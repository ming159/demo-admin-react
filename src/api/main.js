import request from '../utils/request.js'

const apis = {
    getList: function (obj) {
        return request.get('/apiLocal/getFile', {
            params: {
                id: obj.id,
                key: obj.key
            },
            headers: {},
            timeout: 60*1000
        })
    },
    getAllData: function (obj) {
        return request.get('/sugrec', {
            params: obj,
            headers: {},
            timeout: 60*1000
        })
    }
}

export default apis