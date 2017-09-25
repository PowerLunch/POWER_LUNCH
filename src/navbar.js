class NavBar {
  constructor () {
    this.navbar = document.getElementById('navbar-x')
  }

  template () {
    return `
      <nav class="navbar navbar-toggleable-sm">
        <div class="nav navbar-nav align-items-center">
          <a class="nav-link-x" href="index.html"><h1>POWER LUNCH</h1></a>
          <a class="nav-link-x" href="about.html"><h1>ABOUT</h1></a>
          <a class="nav-link-x" href="episodes.html"><h1>EPISODES</h1></a>
          <a class="nav-link-x" href="people.html"><h1>PEOPLE</h1></a>
          <a class="nav-link-x" href="contact.html"><h1>CONTACT</h1></a>
        </div>
      </nav>
    `
  }

  render () {
    this.navbar.innerHTML = this.template()
  }
}

const app = new NavBar()
app.render()
