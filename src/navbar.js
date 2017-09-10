class NavBar {
  constructor () {
    this.navbar = document.getElementById('navbar')
  }

  template () {
    return `
      <ul id="nav-ul">
        <li><a href='index.html'><h3>POWER LUNCH</h3></a></li>
        <li><a href='episodes.html'><h3>EPISODES</h3></a></li>
        <li><a href='people.html'><h3>PEOPLE</h3></a></li>
        <li><a href='contact.html'><h3>CONTACT</h3></a></li>
      </ul>
    `
  }

  render () {
    this.navbar.innerHTML = this.template()
  }
}

const app = new NavBar()
app.render()
