import axios from 'axios'
import type { Axios, AxiosError } from 'axios'

const client: Axios = axios

const request = async (options: { site: string | number, url: string }, err = 'Require id or url'): Promise<any> => {
  return await new Promise((resolve, reject) => {
    if (options.site) {
      client.get(options.url)
        .then((response) => {
          resolve({ data: response.data, status: response.status })
        }).catch((err: AxiosError) => {
          reject(err.response?.status)
        })
    } else {
      throw new Error(err)
    }
  })
}

export default request
