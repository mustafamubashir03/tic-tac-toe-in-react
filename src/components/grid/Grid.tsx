import Card from "../card/Card"
import "./Grid.css"


function Grid({board,onClick}:{board:string[],onClick:(id:number,e:React.MouseEvent<Element, MouseEvent>)=>void}) {
  return (
    <div className="grid">
      {board.map((el,i)=><Card key={i} id={i} iconName={board[i]} onClick={onClick}/>)}
    </div>
  )
}

export default Grid