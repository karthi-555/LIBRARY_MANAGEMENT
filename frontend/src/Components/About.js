import React from 'react'
import './About.css'

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src="https://images.unsplash.com/photo-1583468982228-19f19164aee2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=913&q=80" alt="" />
                </div>
                <div>
                    <p className="about-text">
                        Our mission is to provide our community with access to information, resources, and technology that enriches lives and builds a stronger community.
Our vision is to be the premier library in our community, providing a welcoming and inclusive environment where everyone can learn, grow, and connect.<br/>
                        <br/>
                        Our library's collection includes over 100,000 books, magazines, newspapers, and other materials.
We also have a large collection of electronic resources, including e-books, audiobooks, streaming videos, and databases.
Our collection is constantly growing and evolving to reflect the interests of our community.<br/>
                        <br/>
                        We offer a variety of services to our patrons, including:
Borrowing books, magazines, and other materials
Using computers and Wi-Fi
Attending programs and events<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
