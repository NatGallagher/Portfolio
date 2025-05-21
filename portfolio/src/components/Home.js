import profilePic from '../img/profile-pic.png';
import { useNavigate } from "react-router-dom"

function Home() {

  const navigate = useNavigate();

    return (
      <>
        <div className="App" style={{backgroundColor: "#1b1b1b", color: "white", paddingTop: "70px"}}>
          <h2 style={{paddingBottom: "70px"}}>Software Engineer | Crafting Innovative Software Solutions | JavaScript, React, Node.js, SQL</h2>
          <h4>Hello, I'm Nat Gallagher <img src={profilePic} height="110" width="100" alt="Profile" style={{borderRadius: "50%"}}></img> a Full Stack Developer</h4>
          <button onClick={() => navigate('/contact')}
            style={{
            backgroundColor: 'transparent',
            color: '#00d4ff',
            border: '2px solid #00d4ff',
            padding: '0.6rem 1.5rem',
            borderRadius: '30px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            marginTop: '1rem'
          }}
          onMouseOver={e => {
            e.target.style.backgroundColor = '#00d4ff';
            e.target.style.color = '#1b1b1b';
          }}
          onMouseOut={e => {
            e.target.style.backgroundColor = 'transparent';
            e.target.style.color = '#00d4ff';
          }}>
            Let’s Connect!
          </button>

        </div>
        <div className="work-container" style={{backgroundColor: "#1b1b1b"}}>
          <div className="project-card">
              <a href="https://www.linkedin.com/in/nathaniel-gallagher-420311334/" target="_blank" rel="noreferrer">LinkedIn</a>
              <p>Full Stack Developer | JavaScript • React • Node.js • SQL
              Certified through QuickStart + UTK. Passionate about building clean, practical web apps that solve real problems. Open to full stack, front-end, or back-end roles.</p>
            </div>
    
            <div className="project-card">
              <a href="https://github.com/NatGallagher" target="_blank" rel="noreferrer">GitHub</a>
              <p>Explore my GitHub repositories — full stack projects built with JavaScript, React, Node.js, and SQL. Clean code. Real-world solutions.</p>
            </div>
    
            <div className="project-card">
              <a href="/#/about" target="_blank" rel="noreferrer">About Me</a>
              <p>Curious who’s behind the code? Click to read my story, skills, and what I’m passionate about building.</p>
            </div>
    
            <div className="project-card">
              <a href="https://natgallagher.github.io/Gallagh-Project-4/" target="_blank" rel="noreferrer">Latest Project</a>
              <p>This full-stack app helps users memorize Scripture with login, verse selection, and a 3-tier architecture:</p>
              <ul>
                <li>Frontend (React)</li>
                <li>Backend (Node/Express)</li>
                <li>Database (SQLite)</li>
              </ul>
              <p>Future updates will include personal verse storage and organization.</p>
            </div>
          </div>
      </>
    );
  }
  
  export default Home;