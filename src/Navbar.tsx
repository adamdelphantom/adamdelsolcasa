import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="src/assets/oasys_vest_oogy.PNG" alt="logo" />
      </a>
      <ul>
        <li style={{ margin: "0 5px" }}>
          <a href="https://github.com/adamdelsol" target="_blank">
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li style={{ margin: "0 5px" }}>
          <a href="https://www.twitter.com/adamdelsol" target="_blank">
            <i className="fab fa-twitter"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
