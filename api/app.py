"""
API for the R U Washing server.
"""
import enum
import random
from datetime import datetime
from typing import Dict, Iterator

import flask
import werkzeug

app = flask.Flask(__name__)


class MachineType(enum.Enum):
    WASHING = enum.auto()
    DRYER = enum.auto()


class MachineStatus(enum.Enum):
    ON = enum.auto()
    OFF = enum.auto()
    UNKNOWN = enum.auto()


class Machine:
    """
    A washing machine/dryer with a unique id.
    """

    _ALL_MACHINES: Dict[int, "Machine"] = {}

    def __init__(self, machine_id: int, machine_type: MachineType) -> None:
        if machine_id in self._ALL_MACHINES:
            raise ValueError("Id already in used")
        self.type = machine_type
        self.id = machine_id
        self.status = MachineStatus.UNKNOWN
        self._last_update: datetime = datetime.now()
        self._last_change: datetime = self._last_update
        self._ALL_MACHINES[self.id] = self

    @classmethod
    def with_id(cls, machine_id: int) -> "Machine":
        """
        Return the machine with the given id.

        Raises `ValueError` if there is no machine with the given id.
        """
        try:
            return cls._ALL_MACHINES[machine_id]
        except KeyError as e:
            raise ValueError(f"No machine with id: {machine_id}") from e

    @classmethod
    def number_available(cls, machine_type: MachineType) -> int:
        """
        Return the number of machine of the given type that are currently
        available for use.
        """
        return sum(
            machine.status == MachineStatus.OFF and machine.type == machine_type
            for machine in cls._ALL_MACHINES.values()
        )

    @classmethod
    def all_machines(cls) -> Iterator["Machine"]:
        """
        Iterator over all the created machine.
        """
        return iter(cls._ALL_MACHINES.values())

    def update_status(self, status: MachineStatus) -> None:
        self._last_update = datetime.now()
        if status != self.status:
            self._last_change = self._last_update
            self.status = status

    def to_jsonable(self) -> Dict:
        return {
            "type": self.type.name,
            "id": self.id,
            "ison": self.status.name,
        }


@app.errorhandler(werkzeug.exceptions.NotFound)
def not_found(error):
    data = {
        "code": error.code,
        "name": error.name,
        "description": error.description,
    }
    return flask.make_response(flask.jsonify(data), 404)


@app.errorhandler(werkzeug.exceptions.BadRequest)
def bad_request(error):
    data = {
        "code": error.code,
        "name": error.name,
        "description": error.description,
    }
    return flask.make_response(flask.jsonify(data), 400)


@app.route("/api/status")
def laundry_room_status():
    """
    Return a json document describing the status of the laundry room.
    """
    status = {
        "number_washing_free": Machine.number_available(MachineType.WASHING),
        "number_dryer_free": Machine.number_available(MachineType.DRYER),
        "machine_status": {
            machine.id: machine.to_jsonable() for machine in Machine.all_machines()
        },
    }
    return flask.jsonify(status)


@app.route("/api/machine/<int:machine_id>", methods=["PUT"])
def update_machine_status(machine_id: int):
    assert isinstance(machine_id, int)
    try:
        machine = Machine.with_id(machine_id)
    except ValueError:
        flask.abort(404, f"Machine id {machine_id} not found")
    if not flask.request.is_json:
        flask.abort(400, "not a json request")
    data = flask.request.json
    try:
        status_str = data["status"]
    except KeyError:
        flask.abort(400, "No status provided.")
    try:
        status = MachineStatus[status_str]
    except KeyError:
        flask.abort(400, f"Invalid status {status_str}")
    machine.update_status(status)
    return flask.jsonify(machine.to_jsonable())


# Initializing the machine
for i in range(19):
    machine = Machine(i, MachineType.WASHING if i < 12 else MachineType.DRYER)
    status = random.choice([MachineStatus.ON, MachineStatus.OFF])
    machine.update_status(status)

Machine.with_id(7).update_status(MachineStatus.UNKNOWN)
