import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <header>
      <h1>Pichichus SRL</h1>
      
      <nav>
        <ul>
          <li>Alimentos</li>
          <li>Accesorios</li>
          <li>Snacks</li>
        </ul>
      </nav>
      
      <CartWidget/>
    </header>
  )
}

export default NavBar;
