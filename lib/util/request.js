import axios from 'axios'

const request = ({ site, url, err = 'Require id or url' }) => {
  return new Promise((resolve, reject) => {
    if (site) {
      axios.get(url)
        .then((response) => {
          resolve(response.data)
        }).catch(() => {
          reject({ status: 404, message: 'Not found' }) /* eslint-disable-line */
        })
    } else {
      throw new Error(err)
    }
  })
}

export default request
