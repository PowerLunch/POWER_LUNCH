class Contact {
  constructor (nav) {
    this.contact = document.getElementById('root')
    this.navbar = nav
  }

  content () {
    return `
      ${navbar}
      <div class="container center">
        <div class="header-container">
          <span>MAKE CONTACT</span>
        </div>

        <div class="container-x">
          <div class="bio">
            <h1>Reach Us Here</h1>
            <h4>We can be emailed at: <a href="mailto:hellopowerlunch@gmail.com">hellopowerlunch@gmail.com</a></h4>
          </div>
          <p>SOCIAL MEDIA HERE</p>
        </div>
      </div>
    `
  }

  render () {
    this.contact.innerHTML = this.content(tis.navbar)
  }
}
