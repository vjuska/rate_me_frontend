<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="index.html">Rate Me</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a>

        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="index.html" class="active">Home</a></li>

            <li class="dropdown">
              <a href="#">
                <span>About</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="team.html">Team</a></li>
                <li><a href="testimonials.html">Testimonials</a></li>

                <li class="dropdown">
                  <a href="#">
                    <span>Deep Drop Down</span>
                    <i class="bi bi-chevron-right"></i>
                  </a>
                  <ul>
                    <li><a href="#">Deep Drop Down 1</a></li>
                    <li><a href="#">Deep Drop Down 2</a></li>
                    <li><a href="#">Deep Drop Down 3</a></li>
                    <li><a href="#">Deep Drop Down 4</a></li>
                    <li><a href="#">Deep Drop Down 5</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a href="services.html">Services</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
            <li><a href="pricing.html">Pricing</a></li>
            <li><a href="blog.html">Blog</a></li>

            <li><a href="contact.html">Contact</a></li>
            <li><a href="index.html" class="getstarted">Get Started</a></li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/signup">User Signup</router-link>
      |
      <router-link to="/ratersignup">Rater Signup</router-link>
      |
      <router-link to="/login">User Login</router-link>
      |
      <router-link to="/raterlogin">Rater Login</router-link>
      |
      <router-link to="/photos">Photos</router-link>
      |
      <router-link to="/photos/new">Upload Photos</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
