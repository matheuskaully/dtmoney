import axios from 'axios'

export const api = axios.create({
  baseURL: `${
    'https://dtmoney-matheuskaully.vercel.app/' ||
    'https://dtmoney-rouge-mu.vercel.app/' ||
    'https://dtmoney-cdtve3emg-matheuskaully.vercel.app/'
  }api` 
})