export default async function get(url : string) : Promise<any>{
  try {
    const req = await fetch(url)

    const res = await req.json()
    
    return res
  } catch(e) {
    return e
  }
} 