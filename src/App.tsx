import { useState } from 'react'
import './App.css'
import Grid from './components/grid/Grid'
import Button from './components/button/Button'


function App() {

  const [turn ,setTurn] = useState(true)
  const [board,setBoard] = useState<string[]>(Array(9).fill(""))
  const icon = turn?"cross":"circle"
  const [result,setResult] = useState<string|null>(null)

const handleRestart=()=>{
  setTurn(true)
  setBoard(Array(9).fill(""))
  setResult(null)
}

  const handleUserAction = (id:number)=>{
    if(result){
      return
    }
    if(board[id]===""){
      setBoard((board)=>{
        board[id]=icon
        return [...board]
      })
      setResult(()=>checkResult(icon))
      setTurn(turn=>!turn)
    }else{
      return
    }
  }
  const checkResult=(turn:string)=>{
    const row1Equal = board[0]===board[1] && board[1]===board[2] && board[2]!==""
    const row2Equal = board[3]===board[4] && board[4]===board[5] && board[5]!==""
    const row3Equal = board[6]===board[7]&& board[7]===board[8] && board[8]!==""
    const col1Equal = board[0]===board[3] && board[3]===board[6] && board[6]!==""
    const col2Equal = board[1]===board[4] && board[4]===board[7] && board[7]!==""
    const col3Equal = board[2]===board[5]&& board[5]===board[8] && board[8]!==""
    const diag1Equal = board[0]=== board[4] && board[4]===board[8] && board[8]!==""
    const diag2Equal = board[2]=== board[4] && board[4]===board[6] && board[6]!==""
    if(row1Equal || row2Equal || row3Equal|| col1Equal|| col2Equal || col3Equal|| diag1Equal || diag2Equal){
          return turn
    }else{
      return null;
    }
  }

  return (
<div className='main'>
  {result && <p className='result'><b>{icon==="circle"?"Cross":"Circle"}</b> have won the match</p>}
  <h1>Tic Tac Toe</h1>
  {result && <Button onClick={handleRestart}>Restart</Button>}
  <h2>Current turn: {turn?'X':"O"}</h2>
  <Grid onClick={handleUserAction} board={board}/>
</div>
  )
}

export default App
