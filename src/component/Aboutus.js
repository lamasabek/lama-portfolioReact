import "../css/aboutus.css";

export default function Aboutus() {
  return (
    <div id="About us">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alinItem: "center",
          width: "97%",
        }}
      >
        <div>
          <img src="/Family.png" alt="88" className="big" />
        </div>
        <div className="me">
          <div className="story" >
            <img
              src="/Face.png"
              alt="77"
              style={{ width: "150px", height: "150px" }}
              className="face2"
            />
           
            <strong  style={{margin:"40px"}}>   MY STORY </strong>
          </div>
          <div className="tt" style={{ padding: "30px", marginTop: "10px" }}>
            <h1 className="h1"> A little bit about joshua </h1>

            <p className="par">
              
              this one-page HTML portofolio is provided by templateMO. this
              layout is based on bootstrabpv51.1.3css and js libraries .image
              credits go to unplash and freepik for images used in this page
              this one-page HTML portofolio is provided by templateMO this
              one-page HTML portofolio is provided by templateMO this one-page
              HTML portofolio is provided by templateMO
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
