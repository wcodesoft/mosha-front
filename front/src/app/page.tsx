import { getRandomQuote } from '@/lib/quotes'
import QuoteBlock from "@/components/quote_block";

export default async function Home() {

  const quote = await getRandomQuote()

  return (
    <main className='h-screen flex items-center justify-center'>
      <QuoteBlock quote={quote}/>
    </main>
  )
}
