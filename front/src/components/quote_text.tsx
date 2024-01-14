import { Quote } from '@/lib/quotes'
import { Merienda } from 'next/font/google'

const merienda = Merienda({ subsets: ['latin'] })

export default function QuoteText({ quote }: { quote: Quote }) {
    return (
        <div className={merienda.className}>
            <h1 className="text-3xl font-bold text-center">{quote.text}</h1>
        </div>
    )
}