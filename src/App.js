import Header from "./component/Header";
import Aboutus from "./component/Aboutus";
import ContactUs from "./component/ContactUS";
import Services from "./component/Services";
import Projects from "./component/projects";
import "./App.css"
function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Aboutus />
        <Services />
        <Projects />
        <ContactUs />
      
      </div>
    </div>
  );
}

export default App;
