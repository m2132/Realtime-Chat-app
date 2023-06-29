import "./home.css"
import { useNavigate } from "react-router-dom"

const HomePage=()=>{ 
    const navigate = useNavigate()
   
    const enter=()=>{
     console.log('click');
     navigate("/start")
    }
    return( 
        <div id="home">
        <button id="enter_btn" onClick={enter}></button>
        </div>
    )

}
export default HomePage