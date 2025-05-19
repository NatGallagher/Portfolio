import profilePic from '../img/profile-pic.png';

function Home() {
    return (
      <>
        <div className="App" style={{backgroundColor: "#1c1c1e", color: "white"}}>
          <h2>Software Engineer | Crafting Innovative Software Solutions | JavaScript, React, Node.js, SQL</h2>
          <p>Hello, I'm Nat Gallagher <img src={profilePic} height="110" width="100" alt="Profile"></img> a Full Stack Developer</p>
          <p>Let's Connect!</p>
        </div>
      </>
    );
  }
  
  export default Home;