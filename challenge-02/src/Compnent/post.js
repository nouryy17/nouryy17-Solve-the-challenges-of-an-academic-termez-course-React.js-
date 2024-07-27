import "./style/Post.css"
export default function Post({description,titel,children}) {
    return(
        <div className="Post">
            {children}
            <h3>{titel}</h3>
            <hr></hr>
            <p>{description}</p>
        </div>
    )
}