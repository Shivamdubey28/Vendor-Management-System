import {Link} from "react-router-dom";

export const BottomWarning = ({label, buttonText, to}) => {
    return(
        <div className="py-2 text-sm flex justify-center text-slate-500">
            <div>
                {label}
            </div>
            <Link to={to} className="pointer underline pl-1 cursor-pointer text-blue-500">
                {buttonText}
            </Link>
        </div>
    )
}