import React from 'react';

export default function Resume() {
  return (
    <section class="container">
      <h2 className="top-title">Resume</h2>
      <hr></hr>

      <div>
        <div class="mt-5">
          <h2 className="top-title">Brittany Remus</h2>
          <ul>
            <li>
             blah blah 
            </li>
          </ul>
          <a
            href="https://github.com/fondofhats/react-portfolio/raw/main/docs/MichaelGiddingsResume.docx"
            class="link"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">Proficiencies</h2>
          <ul>
            <li>
            HTML, CSS (Bootstrap, HandleBars), JavaScript, jQuery, React.js,<br />
            Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}