import { FaPen } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
import { FaRegCircle } from "react-icons/fa";


function Icon({name}:{name?:string}) {
if(name === "circle"){
        return <FaRegCircle/>
    }else if(name === "cross"){
        return <ImCross/>
    }else{
        return <FaPen/>
    }
}

export default Icon