import React, { useContext } from 'react';
import { CounterContext } from '../App';

const ComponentA = () => {
    const counterContext = useContext(CounterContext);
    return (<div>Component A -- {counterContext.countState}
        <button onClick={() => counterContext.countDispatch('increment')} >Increment</button>
        <button onClick={() => counterContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => counterContext.countDispatch('reset')}>Reset</button>
    </div>);
}

export default ComponentA;