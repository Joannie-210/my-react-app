import React from "react";
import '../styles/home.css'
import me from '../assets/img/me.jpg'

function Home() {
    return (
        <>
        <nav>
            <ul>
                <li>Joanna.jsx</li>
            </ul>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
            </ul>
        </nav>



<div class="hero-sec">
    <div class="description">
        <h5>My name is Joanna Enoch</h5>
        <h1>I am an aspiring <span>software engineer and full stack developer</span>, with interest in Data and AI.</h1>
        <p>Your best bet for swift and quality software solutions</p>
        <button>Contact me</button>
    </div>
    <div class="img">
    <img src={me} alt="Description" />
    </div>
</div>
<div class="stuff">
</div>

        </>
    )
}
export default Home