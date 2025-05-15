import { Link } from "react-router-dom";
function NavBar() {
    return (
      <>
          <nav>
            <Link to="/">Home</Link> {" | "}
            <Link to="/about">About</Link> {" | "}
            <Link to="/work">Work</Link> {" | "}
            <Link to="/contact">Contact Me</Link>
          </nav>
      </>
    );
}
 
export default NavBar;