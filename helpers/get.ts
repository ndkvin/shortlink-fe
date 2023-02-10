export default async function get(url : string) : Promise<any>{
  const req = await fetch(url)

  const res = await req.json()
  
  return res
} 