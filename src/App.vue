<template>
  <div id="app">
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center">
      <div class="container d-flex align-items-center">
        <h1 class="logo me-auto"><a href="/">Rate Me</a></h1>
        <!-- Uncomment below if you prefer to use an image logo -->
        <!-- <a href="/" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid" /></a> -->

        <nav id="navbar" class="navbar">
          <ul>
            <li><a href="/" class="active">Home</a></li>

            <li class="dropdown">
              <a href="#">
                <span class="getstarted">User Login/Signup</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="/signup">User Signup</a></li>
                <li><a href="/login">Login</a></li>
              </ul>
            </li>
            <li><a href="/logout">User Logout</a></li>
            <li><a href="/photos">User Photos</a></li>
            <li><a href="/photos/new">Upload Photos</a></li>
            <li class="dropdown">
              <a href="#">
                <span>Rater</span>
                <i class="bi bi-chevron-down"></i>
              </a>
              <ul>
                <li><a href="/ratersignup">Rater Signup</a></li>
                <li><a href="/raterlogin">Login</a></li>
              </ul>
            </li>
          </ul>
          <i class="bi bi-list mobile-nav-toggle"></i>
        </nav>
        <!-- .navbar -->
      </div>
    </header>
    <!-- End Header -->
    <!-- <div id="nav">
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
    </div> -->
    <router-view />
  </div>
</template>

<style>
body {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(/assets/img/slide/2013056.jpg) no-repeat center center fixed;
}
</style>
