import "./style.css"

function InputForm ({description, ...rest }) {
    return(
        <div>
            <p>{description}</p>
            <input className="inputForm" type="text" {...rest}></input>
        </div>
    )
}
export default InputForm

