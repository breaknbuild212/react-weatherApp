import React from "react"

function Booty(){
  return(
    <div>

    <html lang="en">
    <body>

        <header>
          <nav class="navbar navbar-expand-lg navbar-dark fixed-top scrolling-navbar">
            <div class="container">
              <a class="navbar-brand" href="#">
                <strong>MDB</strong>
              </a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="#">Home
                      <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">Profile</a>
                  </li>
                </ul>
                <form class="form-inline">
                  <div class="md-form my-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </form>
              </div>
            </div>
          </nav>

          <div class="view" style={{backgroundImage: "url('https://mdbootstrap.com/img/Photos/Others/images/91.jpg')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"}}>
            <div class="mask rgba-gradient align-items-center">

              <div class="container">

                <div class="row mt-5">

                  <div class="col-md-6 mb-5 mt-md-0 mt-5 white-text text-center text-md-left">
                    <h1 class="h1-responsive font-weight-bold wow fadeInLeft" data-wow-delay="0.3s">LidoWeather! </h1>
                    <hr class="hr-light wow fadeInLeft" data-wow-delay="0.3s" />
                    <h6 class="mb-3 wow fadeInLeft" data-wow-delay="0.3s">Your gharelo mausameter.</h6>
                    <a class="btn btn-outline-white wow fadeInLeft" data-wow-delay="0.3s">Learn more</a>
                  </div>


                  <div class="col-md-6 col-xl-5 mb-4">

                    <div class="card wow fadeInRight" data-wow-delay="0.3s">
                      <div class="card-body">

                        <div class="text-center">
                          <h3 class="white-text">
                            <i class="fas fa-user white-text"></i> Register:</h3>
                          <hr class="hr-light" />
                        </div>

                        <div class="md-form">
                          <i class="fas fa-user prefix white-text active"></i>
                          <input type="text" id="form3" class="white-text form-control" />
                          <label for="form3" class="active">Your name</label>
                        </div>
                        <div class="md-form">
                          <i class="fas fa-envelope prefix white-text active"></i>
                          <input type="email" id="form2" class="white-text form-control" />
                          <label for="form2" class="active">Your email</label>
                        </div>
                        <div class="md-form">
                          <i class="fas fa-lock prefix white-text active"></i>
                          <input type="password" id="form4" class="white-text form-control" />
                          <label for="form4">Your password</label>
                        </div>
                        <div class="text-center mt-4">
                          <button class="btn btn-indigo">Sign up</button>
                          <hr class="hr-light mb-3 mt-4" />
                          <div class="inline-ul text-center">
                            <a class="p-2 m-2 tw-ic">
                              <i class="fab fa-twitter white-text"></i>
                            </a>
                            <a class="p-2 m-2 li-ic">
                              <i class="fab fa-linkedin-in white-text"> </i>
                            </a>
                            <a class="p-2 m-2 ins-ic" >
                              <i class="fas fa-instagram white-text"> </i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </header>

        <main>
          <div class="container">

            <div class="row py-5">

              <div class="col-md-12 text-center">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
            </div>
          </div>
        </main>

    </body>
</html>





    </div>
  )
}

export default Booty
