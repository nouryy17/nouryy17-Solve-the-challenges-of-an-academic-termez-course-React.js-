import Post from "./post";
import "./style/content.css"
export default function Content() {
    const ArryPOST=[{
        description:"أكادمية ترميز لتعليم البرمجة بمختلف لغاتها و تقنياتها",
        titel:"أكادمية ترميز",
        c:(
            <h1>20</h1>
        ),
        id:1
    },
    {
        description:"this is the hello world articl",
        titel:" hello world",
        id:2
    },
    {
        description:"this is the bdy of post 3",
        titel:"Post 3",
        id:3
    }]
    const post=ArryPOST.map((post) =>{
        return (<Post key={post.id} titel={post.titel} description={post.description}>{post.c}</Post>)
    })
    return(
        <div className="content">
         {post}

        </div>
    )
   
}