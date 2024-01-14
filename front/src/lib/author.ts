import { getEndpoints } from "@/lib/endpoints";

export interface Author {
  id: string;
  name: string;
  picUrl?: string;
}

export async function getAuthorById(id: string): Promise<Author> {

  const res = await fetch(`${getEndpoints().authorAPI}/${id}`)

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}