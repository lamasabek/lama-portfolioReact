import "../css/contactctus.css";

export default function ContactUs() {
  return (
    <div>
      <div id="Contact" className="front3">
        <h1> Say hi </h1>

        <img src="/say hi.jpg" alt="45" className="say" />
      </div>

      <div className="container">
        <div className="fff">
          <h1>SERVICES</h1>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button className="btn">websites</button>
            <button className="btn">Branding</button>
            <button className="btn">Ecommerce</button>
            <button className="btn">seo</button>
          </div>
          <br />
          <br />
          <h2>stay connected</h2>
          <h> 📞🕊️🔍📷 </h>
          <h3>start a project</h3>
          <h4>im a vailable for freelance projects</h4>
        </div>

        <div className="fff">
          <h1>ABOUT</h1>

          <p className="parr">
            joshua is a professional web devolper. feel free to get in touch
            with me{" "}
          </p>

          <h2> EMAIL</h2>
          <p> hello@josh.design </p>
          <h2> CALL</h2>
          <p> 120-240-9600</p>

          
            <iframe className="inp"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53718.
         15810433133!2d36.572256999999986!3d32.702399!2m3!1f0!2f0!3f0!3m2!1i1024!
         2i768!4f13.1!3m3!1m2!1s0x1518e6dc413cc6a7%3A0x877546f4882af620!2sSyria!
         5e0!3m2!1sen!2s!4v1728548310868!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
              
              referrerPolicy="no-referrer-when-downgrade" title="4*4"
            ></iframe>
         
        </div>

        <form className="fff">
          <input type="name" placeholder="name" className="inp" />
          <br/>
          <br/>
          <input type="email" placeholder="email" className="inp" />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <button className="bt">
              <h1>🌎</h1> websites
            </button>
            <button className="bt">
              {" "}
              <h1>💡</h1>Branding
            </button>
            <button className="bt">
              <h1>📱</h1>
              Ecommerce
            </button>
            <button className="bt">
              {" "}
              <h1>Ĝ </h1>
              seo
            </button>
          </div>
        
          <h3> gender:</h3>
        
          <input type="radio" name="gender" value="male" /> Male
          <input type="radio" name="gender" value="female" />
          female
          <br />
          <h3>profession:</h3>
          
          <input type="radio" name="pro" value="male" /> student
          <input type="radio" name="pro" value="female" />
          employee
          <br />
          <br />
          <input className="inp"
            type="text"
            placeholder="tell me about the project"
            style={{ height: "50px", borderRadius: "8px", textAlign: "center" }}
          />
          <br />
          <button
            style={{
              border: "2px solid pink",
              backgroundImage: " linear-gradient(aqua,pink)",
              borderRadius: "5px",
              margin: "50px",
              width: "70px",
            }}
          >
            send
          </button>
        </form>
      </div>
    </div>
  );
}
