class Episodes {
  constructor () {
    this.episodes = document.getElementById('root')
    this.navbar = new NavBar().render()
  }

  content (navbar) {
    return `
      ${navbar}
      <div class="container center">
      <div class="header-container">
        <span>EPISODES</span>
      </div>

      <div class="container-x">
        <h1>NAME OF EPISODE</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/175908154" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>

      <div class="container-x">
        <h1>NAME OF EPISODE</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/175908154" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>

      <div class="container-x">
        <h1>NAME OF EPISODE</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/175908154" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>

      <div class="container-x">
        <h1>NAME OF EPISODE</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/175908154" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>

      <div class="container-x">
        <h1>NAME OF EPISODE</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/175908154" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>

      <div class="container-x">
        <h1>NAME OF EPISODE</h1>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src="https://player.vimeo.com/video/175908154" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
        </div>
      </div>
    `
  }

  render () {
    this.episodes.innerHTML = this.content(this.navbar)
  }
}
