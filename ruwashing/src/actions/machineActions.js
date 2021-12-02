import machineService from '../services/machineService'

export const getStatus = () => async (dispatch) => {
    try {
        const status = await machineService.getStatus()
        dispatch(getStatusSuccess(status))
    } catch (err) {
        console.log('Bad request, please try loading again.')
    }
}

const getStatusSuccess = (status) => ({
    type: 'GET_STATUS',
    payload: status
})