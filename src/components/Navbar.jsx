import { Link } from "react-router-dom"; 
import "./Navbar.css"; 

function Navbar() {
  return (
    <div className="header">

      <h1>Explore Almora</h1>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/temples">Temples</Link>
        <Link to="/culture">Culture</Link>
        <Link to="/tourism">Tourism</Link>
      </nav>

    </div>
  )
}

export default Navbar;