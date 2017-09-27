class App {
  constructor () {
    // this.whichPage = this.getParam()
    // this.currentPage = ""
    this.navbar = new NavBar()
    this.about = new About(this.navbar.render())
  }

  // getParam() {
  //   var array = window.location.href.split("?")
  //   var param = array[array.length - 1]
  //   return param
  // }
  //
  // loadPage() {
  //   switch (this.whichPage) {
  //     case "about":
  //       this.currentPage = new About()
  //       break
  //     case "projects":
  //       this.currentPage = new Projects()
  //       break
  //     case "students":
  //       this.currentPage = new Students()
  //       break
  //     case "clients":
  //       this.currentPage = new Clients()
  //       break
  //     case "react":
  //       this.currentPage = new React()
  //       break
  //     case "javascript":
  //       this.currentPage = new Javascript()
  //       break
  //     case "mongodb":
  //       this.currentPage = new Mongodb()
  //       break
  //     case "cs":
  //       this.currentPage = new Cs()
  //       break
  //     default:
  //       this.currentPage = new About()
  //   }
  // }

  render () {
    // this.loadPage()
    this.about.render()
    // this.currentPage.render()
  }
}
