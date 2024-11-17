import "../css/headre.css";

export default function Header() {
  return (
    <div className="header">
      <ul className="ul">
        <li>
          <h2> FIRST </h2>
        </li>

        <li>
          {" "}
          <a className="li" href="#About us">
            About us{" "}
          </a>
        </li>

        <li>
          {" "}
          <a className="li" href="#Services">
            Services
          </a>
        </li>

        <li>
          <a className="li" href="#Projects">
            Projects
          </a>
        </li>

        <li>
          <a className="li" href="#Contact">
            Contact us
          </a>
        </li>
      </ul>
      <div className="ss">
        <div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <img src="/Face.png" alt="77" className="facee" />
            <h1 className="beuty"> hello friend! </h1>
          </div>

          <h2 className="beuty">Im available for freelance work</h2>
          <h3 className="simple"> LETS GO</h3>
        </div>

        <div>
          <img src="/Man.png" alt="55" className="imggg" />
        </div>
      </div>
    </div>
  );
}
