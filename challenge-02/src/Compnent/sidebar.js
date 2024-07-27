import Button from "./button"
import "./style/sidebar.css"
export default function Sidebar() {
    return(
        <div className="sidebar">
           <Button title="جديدة" Emoji="💫💫💫" /> 
           <Button title="الاكثر قراءة" >
            <img src="https://th.bing.com/th/id/OIP.Cn4A6_zgmKm03gm3VKuv-QHaKe?rs=1&pid=ImgDetMain"></img>
           </Button>
           <Button title="مقالات قراءة"  Emoji="⭐️⭐️⭐️">
            <img src="https://th.bing.com/th/id/OIP.IsIw032146b-QixjeF0N1gHaEO?pid=ImgDet&w=474&h=270&rs=1"></img>
           </Button>

        </div>
    )
}