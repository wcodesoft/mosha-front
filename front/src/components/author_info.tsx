import { Author } from '../lib/author'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
})

export default function AuthorInfo({ author }: { author: Author }) {
    return (
        <div className={roboto.className}>
            <h5 className='text-center'>{author.name}</h5>
            {author.picUrl && (
                <img className="w-24 h-24 rounded-full mx-auto" src={author.picUrl} alt="" />
            )}
        </div>
    )
}