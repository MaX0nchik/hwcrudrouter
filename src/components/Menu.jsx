import { NavLink } from "react-router-dom"
import { NavItem } from "./NavItem"

const menuItems = [
    {name: "Главная", link: '/'},
]

export const Menu = () => {
    return(
        <nav className="menu">
           {menuItems.map(({name,link})=> (
            <NavItem key={name} name={name} link={link}/>
           ))}
        </nav>
    )
  }
  