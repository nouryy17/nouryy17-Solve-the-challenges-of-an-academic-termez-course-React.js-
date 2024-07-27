import "./style/button.css"
export default function Button({title,Emoji="",children=""}) {
    return(
        <button>
            <p>{title}</p>
            <p>{Emoji}</p>
            {children}
        </button>
    )
}