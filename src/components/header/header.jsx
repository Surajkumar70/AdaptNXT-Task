import React from 'react'
import "./header.css"

export const Header = () => {
    return (
        <div className='header-container'>
            <div>
                <img className='logo-img' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7szBNoWY2ZN7mpAGsNojvRcY0QkvkrL5cRILAAvT2-w&s" alt="logo"/>
                <p><i className="fa fa-bars icon"></i></p>
            </div>
            <div>
                <p><i className="fa fa-moon-o icon"></i></p>
                <p><i className="fa fa-bell icon"></i></p>
                <p><i className="fa fa-language icon"></i></p>
                <p><i className="fa fa-user-circle-o icon"></i></p>

                
            </div>
        </div>
    )
}