import React from 'react';
import { Container, Card } from 'react-bootstrap';
import profilePic from '../img/profile-pic.png';

function About() {
  return (
    <Container fluid className="bg-dark text-white py-5" style={{minHeight: "100vh"}}>
        
      <Container style={{ maxWidth: '800px' }}>
        
        <Card className="bg-secondary text-white px-4 pt-3 pb-4 shadow">
        <img
            src={profilePic}
            height="150"
            width="140"
            alt="Profile"
            className="d-block mx-auto mb-2 rounded-circle"
            />
          <Card.Body>
            <Card.Title as="h2" className="mb-3">About</Card.Title>
            <Card.Text>
              Hi, I’m <strong>Nat Gallagher</strong> — a certified software engineer with a passion for building practical, user-focused web applications. I earned my certification through QuickStart, in partnership with The University of Tennessee, and specialize in full stack web development.
              <br /><br />
              I’m proficient in a range of technologies including HTML, CSS, JavaScript, React, Node.js, and SQL. I thrive in problem-solving environments and enjoy collaborating to create clean, efficient, and scalable solutions.
              <br /><br />
              Before transitioning into tech, I was a teacher—an experience that sharpened my communication, collaboration, and leadership skills. That background gives me a unique edge as a developer who values clarity, teamwork, and continuous growth.
              <br /><br />
              I’m currently seeking opportunities as a Full Stack Developer, Front-End or Back-End Developer, or JavaScript Developer. I’m open to work and excited to contribute to a mission-driven team.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
}

export default About;