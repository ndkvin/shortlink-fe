import cookie from 'js-cookie'
import  config from '@helpers/config'

export default async function form(method : string, url : string, body : string): Promise<any> {
  const csrf : string = cookie.get("csrf_")!

  const req = await fetch(config.API_URL + url, {
    method,
    headers: {
      "Content-Type": "application/json",
      "X-CSRF-Token": csrf
    },
    body,
  })

  const res = await req.json()

  return res
}