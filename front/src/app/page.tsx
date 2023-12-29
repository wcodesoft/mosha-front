import { getRandomQuote, Quote } from '../data/quotes'

export default async function Home() {

  const quote: Quote = await getRandomQuote()

  return (
    <main>
      <h1>{quote.text}</h1>
      <h2>{quote.author?.name}</h2>
    </main>
  )
}
