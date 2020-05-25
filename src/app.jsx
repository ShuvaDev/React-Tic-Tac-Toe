import React from 'react'
import Game from './Tic-Tac-Toe/component/game'
import './app.css'

const App = () => {
    return (
        <div className='app shadow-lg bg-warning'>
            <h1 className='text-center mb-3'>Tic Tac Toe</h1>
            <Game />
        </div>
    )
}

export default App
