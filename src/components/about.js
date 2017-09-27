class About {
  constructor () {
    this.about = document.getElementById('root')
    this.navbar = new NavBar().render()
  }

  content (navbar) {
    return `
      ${navbar}
      <div class="container center test">
        <div class="header-container">
          <span>POWER LUNCH</span>
        </div>

        <img class="headshot headshot-pw " src="media/images/sandwhich.png" alt="Sandwhich">

        <div class="about">
          <br>
          <span>Syd and Marla work for Borowitz & Borowitz Construction Co.</span>
          <br>
          <br>
          <span>They offer reasonably priced demolition, construction, and basic finishes.</span>
          <br>
          <br>
          <span>They eat lunch together every day.</span>
        </div>
      </div>
    `
  }

  render () {
    this.about.innerHTML = this.content(this.navbar)
  }
}
