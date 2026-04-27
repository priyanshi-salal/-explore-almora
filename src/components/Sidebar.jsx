import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="sidebar">

      <h3>Almora Temples</h3>

      <ul>

        <li><Link to="/Jageshwar">Jageshwar Temple</Link></li>

        <li><Link to="/Chitai">Chitai Golu Devta</Link></li>

        <li><Link to="/KasarDevi">Kasar Devi Temple</Link></li>

        <li><Link to="/NandaDevi">Nanda Devi Temple</Link></li>

        <li><Link to="/BanarDevi">Vindhyavasini Banari Devi Temple</Link></li>

        <li><Link to="/DolAshram">Dol Ashram</Link></li>

        <li><Link to="/Katarmal">Katarmal Sun Temple</Link></li>

      </ul>

    </div>
  )
}

export default Sidebar