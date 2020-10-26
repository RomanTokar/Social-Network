import {NavLink} from "react-router-dom";
import React from "react";

const Logo = () => (
    <NavLink to={'/profile'}>
        <img style={{width: 40}} alt={'/profile'}
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Telegram_2019_Logo.svg/480px-Telegram_2019_Logo.svg.png"
        />
    </NavLink>
)

export default Logo;