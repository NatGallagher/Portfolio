function Work() {
    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2rem' }}>
          <h2 style={{
                color: '#222',
                fontSize: '2.5rem',
                fontWeight: '700',
                borderBottom: '3px solid #007bff',
                display: 'inline-block',
                paddingBottom: '0.5rem',
                margin: 0
              }}>
            Work
          </h2>
        </div>
        <div className="work-container">
          <div className="project-card">
            <a href="https://natgallagher.github.io/Gallagh-Project-1/" target="_blank" rel="noreferrer">Business Website</a>
            <p>This is a clean, responsive website designed to promote the services of a freelance music arranger. It features an embedded audio sample player and a contact form for client engagement.</p>
          </div>
  
          <div className="project-card">
            <a href="https://natgallagher.github.io/Gallagh-Project-2/" target="_blank" rel="noreferrer">Giphy Search Engine</a>
            <p>An interactive web app that lets users search and browse GIFs using an external API. It demonstrates async JavaScript and dynamic DOM manipulation.</p>
          </div>
  
          <div className="project-card">
            <a href="https://natgallagher.github.io/Gallagh-Project-3/" target="_blank" rel="noreferrer">Task Manager App</a>
            <p>A fully functional to-do list built with React. It allows users to manage tasks and filters them by completion status, showcasing React state and component design.</p>
          </div>
  
          <div className="project-card">
            <a href="https://natgallagher.github.io/Gallagh-Project-4/" target="_blank" rel="noreferrer">Bible Verse Memory App</a>
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
  export default Work;