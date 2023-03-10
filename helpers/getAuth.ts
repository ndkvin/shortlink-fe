import config from '@helpers/config'
import cookie from 'js-cookie'

export default async function getAuth(url : string) : Promise<any>{
  const token : string = cookie.get("token_")!

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