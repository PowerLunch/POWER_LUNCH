class Splash {
  constructor () {
    this.splash = document.getElementById('root')
  }

  content () {
    return `
      <a href="/about">
        <video class="splash-vid" preload="true" autoplay playsinline loop muted>
          <source src="media/videos/splash.webm" type="video/webm">
          <source src="media/videos/splash.mp4" type="video/mp4">
          <source src="media/videos/splash.mp4.ogg" type="video/ogg">
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
