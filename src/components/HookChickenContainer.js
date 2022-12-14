import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyChicken } from '../redux'

const HookChickenContainer = () => {
    const numOfChickens = useSelector(state => state.chicken.numOfChickens)
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Chickens- {numOfChickens}</h2>
            <button onClick={() => dispatch(buyChicken())}>Buy Chickens</button>
        </div>
    )
}

export default HookChickenContainer