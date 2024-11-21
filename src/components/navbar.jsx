import React from "react";

const NavBar = ({ totalCounters }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <span
                    className="badge"
                    style={{ width: 50, fontSize: '24px' }}
                >
                    {totalCounters}
                </span>
                Items
            </div>
        </nav>
    )
}

export default NavBar