import logo from "./assets/logo.jpg";
import { monsters } from "./monsters/index.js";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <main>
      <div className="toppage_logo">
        <img src={logo} alt="" />
      </div>

      <h1 className="top_title">モンスター弱点図鑑</h1>

      <div className="top_grid">
        {Object.values(monsters).map((m) => (
          <Link key={m.id} to={`/monsters/${m.id}`} className="monster-card">
            <img src={m.img} alt={m.name} />
            <div className="monster-name">{m.name}</div>
          </Link>
        ))}
      </div>
    </main>
  );
}