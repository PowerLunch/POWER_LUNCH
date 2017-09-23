class NavBar {
  constructor () {
    this.navbar = document.getElementById('navbar')
  }

  template () {
    return `
      <nav class="navbar navbar-expand-sm navbar-light bg-light navbar-center">
        <a class="navbar-brand" href='index.html'><h3>POWER LUNCH</h3></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href='episodes.html'><h3>EPISODES</h3></a>
            <a class="nav-item nav-link" href='people.html'><h3>PEOPLE</h3></a>
            <a class="nav-item nav-link" href='contact.html'><h3>CONTACT</h3></a>
          </div>
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

//
// <nav class="navbar navbar-expand-sm ">
//   <div class="collapse navbar-collapse">
//       <ul class="navbar-nav mr-auto">
//         <li class="nav-item">
//           <a class="nav-link" href='index.html'><h3>POWER LUNCH</h3></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href='episodes.html'><h3>EPISODES</h3></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href='people.html'><h3>PEOPLE</h3></a>
//         </li>
//         <li class="nav-item">
//           <a class="nav-link" href='contact.html'><h3>CONTACT</h3></a>
//         </li>
//       </ul>
//     </div>
//   </nav>
