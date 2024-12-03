import { NavLink } from "react-router-dom";

export const NavItem = ({name, link}) => {
    return(
        <NavLink className={({isActive}) => isActive ? "menu__item menu__item-active" : "menu__item"} to={link}>{name}</NavLink>
    )
}