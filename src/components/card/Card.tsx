import Icon from "../Icon"
import "./Card.css"
function Card({id,iconName,onClick}:{id:number,iconName?:string,onClick:(id:number,e:React.MouseEvent<Element, MouseEvent>)=>void}) {
  return (
    <div className="card" onClick={(e)=>onClick(id,e)}>
        <span><Icon name={iconName}/></span>
    </div>
  )
}

export default Card