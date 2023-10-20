import './button.css'

function Button({title, size}){

    return (
        <div className="account-content-wrapper cta">
          <button className={size}>{title}</button>
        </div>
    )

    
}

export default Button