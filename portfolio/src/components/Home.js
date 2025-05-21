import profilePic from '../img/profile-pic.png';

function Home() {
    return (
      <>
        <div className="App" style={{backgroundColor: "#1b1b1b", color: "white", minHeight: "100vh", paddingTop: "70px"}}>
          <h2 style={{paddingBottom: "70px"}}>Software Engineer | Crafting Innovative Software Solutions | JavaScript, React, Node.js, SQL</h2>
          <h4>Hello, I'm Nat Gallagher <img src={profilePic} height="110" width="100" alt="Profile" style={{borderRadius: "50%"}}></img> a Full Stack Developer</h4>
          <p>Let's Connect!</p>
        </div>
      </>
    );
  }
  
  export default Home;