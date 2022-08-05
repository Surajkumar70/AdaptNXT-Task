import React from 'react'
import "./sidebar.css"

export const Sidebar = () => {
    return (
        <div>
            <div className="sidebar ">
                <ul className="side-bar">
                    <li className="iconbar"> <i class="fa fa-tachometer"></i>Dashboard</li>
                    <li className="iconbar"><i class="fa fa-tag"></i> Inventory</li>
                    <li className="iconbar"><i class="fa fa-bars"></i> Orders</li>
                    <li className="iconbar"><i class="fa fa-truck"></i> Shipping</li>
                    <li className="iconbar"><i class="fa fa-share-alt"></i> Channel</li>
                </ul>
            </div>
        </div>)
}