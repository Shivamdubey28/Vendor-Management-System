export function Heading({label, color}){
    return(
        <div className={`font-bold text-4xl pt-5 ${color}`}>
            {label}
        </div>
    )
}
