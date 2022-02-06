import "./style.css"

function Card ({text, unidade}) {
    return(
        <div className="card">
            <span>{text}</span>
            <span>{unidade}</span>
        </div>
    )
}
export default Card