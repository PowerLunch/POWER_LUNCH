class Splash {
  constructor () {
    this.splash = document.getElementById('root')
  }

  content () {
    return `
      <a href="about.html">
        <video class="splash-vid" preload="true" autoplay playsinline loop muted>
          <source src="images/videos/splash.mebm" type="video/webm">
          <source src="images/videos/splash.mp4" type="video/mp4">
          <source src="images/videos/splash.mp4.ogg" type="video/ogg">
        </video>
        <div class="text-overlay">
          <span>POWER LUNCH</span>
        </div>
      </a>
    `
  }

  render () {
    this.splash.innerHTML = this.content()
  }
}
