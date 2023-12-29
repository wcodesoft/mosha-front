export interface Author {
    id: string;
    name: string;
    bio: string;
    timestamp: number;
}

export async function getAuthorById(id: string): Promise<Author> { 
  
    const res = await fetch(`https://mosha.wcode.space/api/v1/author/${id}`)
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }