import React from 'react'

const NavBar = () => {
  function goToLink(link) {
    location.href = link;
  }
  return (
    <div>
        <nav>
            <div class="logo">
                <img src="logo.svg" alt="SGreliefteaching Logo"/>
            </div>
            <div class="hamburger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            <ul class="nav-links">
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact Us</a></li>
                <li><button onclick="goToLink(https://google.com)" class="login-button" href="/login">Login</button></li>
                <li><button class="join-button" href="/signup">Join</button></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar