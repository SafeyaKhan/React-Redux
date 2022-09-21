import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { buyEgg } from '../redux'

const HookEggContainer = () => {
    const numOfEggs = useSelector( state => state.egg.numOfEggs)
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Eggs- {numOfEggs}</h2>
            <button onClick={() => dispatch(buyEgg())}>Buy Eggs</button>
        </div>
    )
}

export default HookEggContainer