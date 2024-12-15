const response = (status, success, message = null, data = null) => {
    return {
        status, 
        success, 
        message, 
        data
    }
}

module.exports = { response }

