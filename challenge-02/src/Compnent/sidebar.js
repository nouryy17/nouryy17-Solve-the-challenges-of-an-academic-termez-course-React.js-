import Button from "./button"
import "./style/sidebar.css"
export default function Sidebar() {
    return(
        <div className="sidebar" style={{height:"fit-content",flexBasis:"30%"}}>
           <Button title="جديدة" ><span>💫💫💫</span> </Button> 
           <Button title="الاكثر قراءة" >
            <img  src="https://th.bing.com/th/id/OIP.IsIw032146b-QixjeF0N1gHaEO?pid=ImgDet&w=474&h=270&rs=1" style={{width:"100%"}}></img>
           </Button>
           <Button title="مقالات قراءة"  Emoji="⭐️⭐️⭐️">
            <img src="https://th.bing.com/th/id/OIP.Cn4A6_zgmKm03gm3VKuv-QHaKe?rs=1&pid=ImgDetMain"  style={{width:"100%",height:"fit-content"}}></img>
           </Button>

        </div>
    )
}