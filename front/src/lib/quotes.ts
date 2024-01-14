import {Author, getAuthorById} from "@/lib/author";
import {getEndpoints} from "@/lib/endpoints";

export interface Quote {
    id: string;
    authorId: string;
    text: string;
    timestamp: number;
    author?: Author;
}

export async function getRandomQuote(): Promise<Quote> {

    const res = await fetch(`${getEndpoints().quoteAPI}/random`, { cache: 'no-store' })

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    const quote: Quote = await res.json()
    quote.author = await getAuthorById(quote.authorId)

    return quote
}