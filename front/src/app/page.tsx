import QuoteText from '@/components/quote_text'
import { getRandomQuote, Quote } from '@/lib/quotes'
import AuthorInfo from '@/components/author_info'

export default async function Home() {

  const quote: Quote = await getRandomQuote()

  return (
    <main className='h-screen flex items-center justify-center'>
      <div>
        <QuoteText quote={quote} />
        {quote.author && <AuthorInfo author={quote.author} />}
      </div>
    </main>
  )
}
