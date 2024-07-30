import Content from "./content";
import Sidebar from "./sidebar";
import "./style/maine.css"
export default function Main() {
    return(
        <div className={"main"}>
            <Content/>
            <Sidebar/>
        </div>
    )
}