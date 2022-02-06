import "./style.css"

function Checkbox({description, ...rest}) {    
    return (
        <div className="ativo">
            <input type="checkbox" {...rest}></input>
            <p>Ativo</p>   
        </div>
    )
}
export default Checkbox