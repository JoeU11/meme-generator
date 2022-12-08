import logo from "../images/logo.png"

export default function () {
  return (
    <nav>
      <div id="nav-logo-title">
        <img src={logo} alt="logo" id="nav-logo" height="60px" />
        <h1 id="nav-title">Meme Generator</h1>
      </div>
      <h3 id="nav-alt-text">React Course - Project 3</h3>
    </nav>
  )
}