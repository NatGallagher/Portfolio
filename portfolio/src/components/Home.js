import profilePic from '../img/profile-pic.png';

function Home() {
    return (
      <>
        <div className="App" style={{backgroundColor: "#1b1b1b", color: "white", minHeight: "100vh", paddingTop: "70px"}}>
          <h2 style={{paddingBottom: "70px"}}>Software Engineer | Crafting Innovative Software Solutions | JavaScript, React, Node.js, SQL</h2>
          <h4>Hello, I'm Nat Gallagher <img src={profilePic} height="110" width="100" alt="Profile" style={{borderRadius: "50%"}}></img> a Full Stack Developer</h4>
          <button style={{
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
      </>
    );
  }
  
  export default Home;