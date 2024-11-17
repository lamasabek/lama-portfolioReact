import "../css/projeect.css";

export default function Projects() {
  return (
    <div>
      <div className="front2" id="Projects">
        <h1> Projects </h1>

        <img src="/computer.jpg" alt="44" className="computer" />
      </div>

      <div className="grid-container2">
        <div className="moo">
          {" "}
          <h5 className="h5">BRANDING </h5>
          <h2> Zoic agency</h2>
          <img src="/zoik.jpg" alt="87" className="mgg" />
        </div>

        <div className="moo">
          <h5 className="h5">PHOTOGRAFY </h5>
          <h2> THE WATCH</h2>

          <img src="/watch.jpg" alt="89" className="mgg" />
        </div>
        <div className="moo">
          <h5 className="h5">WEBSIT </h5>
          <h2> polo</h2>

          <img src="/polo22.jpg" alt="88" className="mgg" />
        </div>
      </div>
    </div>
  );
}
