import Button from "./button"
import "./style/sidebar.css"
export default function Sidebar() {
    const Arrybutton=[{
        title:"جديدة",
        Emoji:"💫💫💫",
        id:1,
    },{
        title:"الاكثر قراءة",
        id:2,
        c:(<img src="https://th.bing.com/th/id/OIP.IsIw032146b-QixjeF0N1gHaEO?pid=ImgDet&w=474&h=270&rs=1" style={{width:"100%"}}></img>)
    },{
        title:"مقالات قراءة",
        Emoji:"⭐️⭐️⭐️",
        id:3,
        c:(<img  src="https://th.bing.com/th/id/OIP.Cn4A6_zgmKm03gm3VKuv-QHaKe?rs=1&pid=ImgDetMain"  style={{width:"100%",height:"fit-content"}}></img>)
    }]
    const butto=Arrybutton.map((button) =>{
    return (
        <Button title={button.title} Emoji={button.Emoji} key={button.id}> {button.c} </Button> 
    )
    })
    return(
       <div className="sidebar" style={{height:"fit-content",flexBasis:"30%"}}> {butto}</div>
    )
   
}