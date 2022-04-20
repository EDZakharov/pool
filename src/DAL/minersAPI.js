
import axios from 'axios';


export const getMinersFromPool = (pool) => {
        return axios.get(`https://api.e4pool.com/${pool}/miners`)

}



export const getMinersPaymentsData= (pool) => {
        return axios.get(`https://api.e4pool.com/${pool}/payments`)
}