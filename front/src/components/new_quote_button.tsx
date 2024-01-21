import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";

interface NewQuoteButtonProps {
    onClick: () => void;
}
export default function NewQuoteButton(props: NewQuoteButtonProps) {
    return (
        <div className="flex justify-center my-5">
            <button
                onClick={props.onClick}
                type="button"
                className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                <FontAwesomeIcon icon={faPlus}/>
                <span className="sr-only">Icon description</span>
            </button>
        </div>
    )
}