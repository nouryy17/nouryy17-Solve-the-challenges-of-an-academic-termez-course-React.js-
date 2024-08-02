import "./style/button.css"
export default function Button({title="",Emoji="",children=""}) {
    return(
        <button style={{height:"fit-content"}} className={title =="جديدة" ? "new" :""}>
            <p>{title}</p>
            <p>{Emoji}</p>
            {children}
        </button>
    )
}