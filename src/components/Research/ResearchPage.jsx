import React from 'react';
import './ResearchPage.css';

const ResearchPage = () => {
  return (
    <div className="research-page">
      <header className="research-header">
        <h1>University Research</h1>
        <p>Explore our latest research projects and innovations.</p>
      </header>

      <section className="research-projects">
        <article className="project">
          <h2>Project A</h2>
          <p>Description of Project A. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est vitae urna vestibulum gravida.</p>
        </article>

        <article className="project">
          <h2>Project B</h2>
          <p>Description of Project B. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est vitae urna vestibulum gravida.</p>
        </article>

        <article className="project">
          <h2>Project C</h2>
          <p>Description of Project C. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel est vitae urna vestibulum gravida.</p>
        </article>
      </section>

      <footer className="research-footer">
        <p>For more information, contact us at research@university.edu</p>
      </footer>
    </div>
  );
};

export default ResearchPage;
