const machineService = () => {
    return {
        getStatus: (token) => fetch('127.0.0.1:5000/status', {
            headers: {
            }
        }).then(d => d.json()).then(d => d)
    }
}

export default machineService()