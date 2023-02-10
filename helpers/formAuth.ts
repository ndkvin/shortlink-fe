import cookie from 'js-cookie'
import config from '@helpers/config'

export default async function formAuth(method : string, url : string, body : string): Promise<any> {
  const csrf : string = cookie.get("csrf_")!
  const token : string = cookie.get("token_")!

  const req = await fetch(config.API_URL + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf,
      "Authorization": "Bearer " + token
    },
    body,
  })

  const res = await req.json()

  return res
}