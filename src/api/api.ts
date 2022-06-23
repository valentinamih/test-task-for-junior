import axios from 'axios'

export const cardsApi = {
  requestCards: () => {
    return axios.get('https://mocki.io/v1/a5814d24-4e22-49fc-96d1-0e9ae2952afc')
  }
}