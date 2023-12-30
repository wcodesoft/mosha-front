import { Author, getAuthorById } from "./author";

export interface Quote {
    id: string;
    authorId: string;
    text: string;
    timestamp: number;
    author?: Author;
}

export async function getRandomQuote(): Promise<Quote> {

    const res = await fetch('https://mosha.wcode.space/api/v1/quote/random', { cache: 'no-store' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const quote: Quote = await res.json()
    const author: Author = await getAuthorById(quote.authorId)
    quote.author = author

    return quote
}