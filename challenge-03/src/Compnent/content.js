import Post from "./post";
import "./style/content.css"
export default function Content() {
    return(
    <div className="content">
    <Post description="أكادمية ترميز لتعليم البرمجة بمختلف لغاتها و تقنياتها" titel="أكادمية ترميز">
        <h1>20</h1>
    </Post>
    <Post description="this is the hello world articl" titel="hello world"/>
    <Post description="this is the bdy of post 3" titel="Post 3"/>
    </div>
    );
}