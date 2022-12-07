import axios from 'axios'

export const api = axios.create({
  baseURL: `${
    'https://dtmoney-matheuskaully.vercel.app/' ||
    'https://dtmoney-liart.vercel.app/' ||
    'https://dtmoney-git-main-matheuskaully.vercel.app/' ||
    'https://dtmoney-mi9hxooxc-matheuskaully.vercel.app/'
  }api` 
})