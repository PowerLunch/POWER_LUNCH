class NavBar {
  constructor () {
    this.navbar = document.getElementById('navbar-x')
  }

  template () {
    return `
      <nav class="navbar navbar-toggleable-sm">
        <div class="nav navbar-nav align-items-center">
          <a class="nav-link-x margin-r" href="index.html">POWER LUNCH</a>
          <a class="nav-link-x margin-r" href="episodes.html">EPISODES</a>
          <a class="nav-link-x margin-r" href="about.html">ABOUT</a>
          <a class="nav-link-x margin-r" href="team.html">TEAM</a>
          <a class="nav-link-x" href="contact.html">CONTACT</a>
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
