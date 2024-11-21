import React, { Component } from 'react';
import Counter from './counter';

function Counters({
    handleIncrement, 
    handleDecrement, 
    counters, 
    handleDelete, 
    handleReset, 
    handleRestart 
}) {
    return (
        <div>
            <div className="row">
                <button
                    className='btn'
                    onClick={handleReset}
                    disabled={counters.length === 0 ? "disabled" : ""}
                >
                    Reset
                </button>
                <button
                    className='btn'
                    onClick={handleRestart}
                    disabled={counters.length !== 0 ? "disabled" : ""}
                >
                    Restart
                </button>
            </div>
            {counters.map(counter =>
            (<Counter
                key={counter.id}
                counter={counter}
                onIncrement={handleIncrement}
                onDecrement={handleDecrement}
                onDelete={handleDelete}
            />))}
        </div>
    )
}

export default Counters