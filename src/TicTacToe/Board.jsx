import React, { useState } from "react";
import Square from "./Square";
import './Board.css' ; 
const Board = () => {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXturn, setisXturn] = useState(true);

    let move = "None" ;  
    const checkWinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ]

        //Array destructing ......
        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] === state[b] && state[b] === state[c] && (state[a] != null && state[b] != null && state[c] != null)) {
                move = state[a] ; 
                return true;
            }
        }

    }

    let isWinner = checkWinner();

  
    const handleclicked = (index) => {
        //Spread Operator .....
        const copyState = [...state];
        copyState[index] = isXturn ? 'X' : 'O';
        setState(copyState);
        setisXturn(!isXturn);
    }

    return (
        <div className="board-conatiner">


            {isWinner ? <> <center> <h2> {move} has  Won !! </h2> </center> </> :
                <>
                    <div className="board-row">
                        <Square onclick={() => handleclicked(0)} value={state[0]} />
                        <Square onclick={() => handleclicked(1)} value={state[1]} />
                        <Square onclick={() => handleclicked(2)} value={state[2]} />

                    </div>
                    <div className="board-row">
                        <Square onclick={() => handleclicked(3)} value={state[3]} />
                        <Square onclick={() => handleclicked(4)} value={state[4]} />
                        <Square onclick={() => handleclicked(5)} value={state[5]} />
                    </div>
                    <div className="board-row">
                        <Square onclick={() => handleclicked(6)} value={state[6]} />
                        <Square onclick={() => handleclicked(7)} value={state[7]} />
                        <Square onclick={() => handleclicked(8)} value={state[8]} />
                    </div>
                </>
            }
        </div>
    )
}
export default Board;

