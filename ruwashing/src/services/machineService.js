const machineService = () => {
    return {
        getStatus: () => fetch('127.0.0.1:5000/status', {
        }).then(d => d.json()).then(d => d)
    }
}

export default machineService()