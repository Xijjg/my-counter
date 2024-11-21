import React from "react";

function Counter({
    counter,
    onIncrement,
    onDecrement,
    onDelete
}) {
    const getBadgeClasses = () => {
        let classes = 'badge';
        classes += counter.value === 0 ? ' warning' : ' primary';
        return classes;
    }

    const formatCount = () => {
        const { value } = counter;
        return value === 0 ? 'Zero' : value;
    }
    return (
        <div>
            <div className="row">
                <span
                    style={{ fontSize: 24 }} className={getBadgeClasses()}
                >
                    {formatCount()}
                </span>

                <button
                    className="btn main"
                    onClick={() => onIncrement(counter)}
                >
                    +
                </button>
                <button
                    className="btn sub"
                    onClick={() => onDecrement(counter)}
                >
                    -
                </button>

                <button
                    className="btn delete"
                    onClick={() => onDelete(counter.id)}
                >
                    delete
                </button>
            </div>
        </div>
    )


}

export default Counter