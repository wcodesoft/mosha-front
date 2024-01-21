"use client";
import {Quote} from "@/lib/quotes";
import QuoteText from "@/components/quote_text";
import AuthorInfo from "@/components/author_info";
import NewQuoteButton from "@/components/new_quote_button";

interface QuoteBlockProps {
    quote: Quote;
}

export default function QuoteBlock(quoteProps: QuoteBlockProps) {

    const quote = quoteProps.quote

    const onNewQuote = async () => {
        window.location.reload();
    }

    return (
        <div>
            <QuoteText quote={quote}/>
            {quote.author && <AuthorInfo author={quote.author}/>}
            <NewQuoteButton onClick={onNewQuote}/>
        </div>
    )

}