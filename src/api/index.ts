// @ts-ignore
import axios from '@/utils/request'

export const loginAPI = (data: Record<string, any>) =>
  axios({
    method: 'post',
    url: 'login',
    data
  })
