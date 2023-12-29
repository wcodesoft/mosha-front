import { getRandomQuote, Quote } from '../lib/quotes'

export default async function Home() {

  const quote: Quote = await getRandomQuote()

  return (
    <main>
      <h1 className='text-3xl font-bold'>{quote.text}</h1>
      <h2>{quote.author?.name}</h2>
      {quote.author?.picUrl && <img src={quote.author.picUrl} alt={quote.author.name} />}
    </main>
  )
}
