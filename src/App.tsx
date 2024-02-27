import React from 'react';
import './App.css';

function App() {

  console.log('Welcome my lovely hacker, if you are interested in a job, we have a lot of interesting tasks for you! \r\nContact us %chr@datatogo.uk', 
  'color: blue;');

  return (
    <div className="App">
      <header className="App-header">
        <h1>DataToGo</h1>
        <p>Innovating Data Solutions Tailored for You</p>
        <div className="App-description">
          <p>
            DataToGo is an agency specializing in data engineering, data scraping,
            and data extraction. We build sophisticated bots for automation, text
            and chat interfaces, and create tailored Retrieval-Augmented Generation (RAG) 
            systems based on Large Language Models (LLM) to meet your personal and 
            professional needs. Our commitment to innovation empowers our clients with 
            cutting-edge solutions in data handling and artificial intelligence.
          </p>
        </div>
        <a href="mailto:hr@datatogo.uk">CONTACT US &gt;&gt; alex@datatogo.uk</a>
        <p>
          Our team is growing and we're always looking for talented, creative minds to 
          join us.
        </p>
        <a href="mailto:hr@datatogo.uk">APPLY &gt;&gt; hr@datatogo.uk</a>
      </header>
    </div>
  );
}

export default App;