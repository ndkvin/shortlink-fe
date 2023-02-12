import cookie from 'js-cookie'
import config from '@helpers/config'
export default async function get(url : string, token : string) : Promise<any>{
  try {
    const req = await fetch(config.API_URL + url, {
      "method": "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + token
      },
    })

    const res = await req.json()
    
    return res
  } catch(e) {
    return e
  }
} 