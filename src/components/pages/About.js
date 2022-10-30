import React from 'react';

export default function About() {
  return (
    <section className="container">
    <h2 className='top-title'> Allow Me to Introduce Myself</h2>
    <hr></hr>
    <div className='imagep'>
        <img className="mb-5" id="avatar" src= 'https://raw.githubusercontent.com/bremus124/Portfolio-BRemus/main/images/selfie.JPG' alt="Brittany Remus" />
        <div className='auto'>
        <p>
        Hello and Welcome! My name is Brittany Remus. For the last 9 years
        I worked as a Physcial Therapist in West Philly. Recently, I was injured
        on the job and have decided to pivot to an alternative career!
        </p>
        <p>
          I have always been interested in problem solving and making things
          better! Joining a full-stack bootcamp was a no brainer! I enjoy
          all aspects of web devlopment and think it would be awesome if I could
          find a new career combing my health care experiance with coding!
        </p>
        <p>
          When I am not coding, I enjoy spending time with my 2 dogs at the park! 
          I also enjoy watching sports (Go Phillies! ⚾) hanging out with 
          friends, and reading.
        </p>
        <p>
          Above you can click the tabs to see my portfolio and resume! Below are links
          to my github, linkedin, and instagram.
        </p>
        </div>
        
    </div>
</section>
);
};