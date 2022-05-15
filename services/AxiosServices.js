const axios = require('axios').default

export default class AxiosServices  {

    post(url, data, IsRequiredHeader = false , header){
        return axios.post(url, data , IsRequiredHeader && header)
    }
}


