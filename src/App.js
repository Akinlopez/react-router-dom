import "./styles.css";
import { NavLink, Route, Routes } from "react-router-dom";

// Create a Home page....
function Home() {
  return (
    <section className="home-container">
      <h1>Home page</h1>
      <p>This is a home page</p>
      <p>Click the link below to go to the About page</p>
      <section className="navigation">
        <p>Click the link below to go to the Home page</p>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
          className="navigate"
          to="/"
        >
          Home page
        </NavLink>
        <NavLink
          style={({ isActive }) =>
            isActive ? { color: "white" } : { color: "black" }
          }
          className="navigate"
          to="/about"
        >
          About page
        </NavLink>
      </section>
    </section>
  );
}
//Create an About page....
function About() {
  return (
    <section className="about-container">
      <h1>About page</h1>
      <p>This is about page</p>
      <Navigation/>            
    </section>
  );
}
//Create a navigation component, to be reuse if necessary...
function Navigation() {
return(
  <section className="navigation">
  <NavLink
    style={({ isActive }) =>
      isActive ? { color: "white" } : { color: "black" }
    }
    className="navigate"
    to="/"
  >
    Home page
  </NavLink>
  <NavLink
    style={({ isActive }) =>
      isActive ? { color: "white" } : { color: "black" }
    }
    className="navigate"
    to="/about"
  >
    About page
  </NavLink>
</section>
);
}



export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
