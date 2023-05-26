import './navbar.css';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li><NavLink to='/'>All Output</NavLink> </li>
            <li><NavLink to='/task1'>Type_1</NavLink> </li>
            <li><NavLink to='/task3'>Type__3</NavLink> </li>
        </ul>
    </nav>
  )
}

export default Navbar