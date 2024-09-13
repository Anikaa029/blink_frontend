import './SimulationLab.css'; 

const SimulationLab = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src="Computer_Lab.jpg" alt="Simulation Lab" className="pic" />
        <div className="text">
          <h2>Simulation Laboratory</h2>
          <p>
            In this laboratory, students can perform computer programming and numerical analysis lab, signals and systems lab, digital signal processing lab, multimedia communication lab, neural and fuzzy systems lab in C, C++, MATLAB and Python to learn about different types of signal generation, manipulation of audio & video signals, spectral analysis, filter response, computer programming etc. Besides, design and simulation of different logic circuits in the field of VLSI is done in this laboratory by Cadence Virtuoso Software. In internet programming, students learn about HTML, CSS, JavaScript, PHP and create database for website development.
          </p>
          <p>
            <br />
            <b>The following courses are conducted in this lab:</b>
            <br />
            <br />
            <ul>
              <li><b>CSE 182 Computer Programming and Numerical Analysis Sessional </b>(Level 1 Term 2)</li>
              <li><b>ETE 204 Signals and Systems Sessional  </b>(Level 2 Term 1)</li>
              <li><b>CSE 282 Data Structures and Algorithms Sessional </b>(Level 2 Term 1)</li>
              <li><b>CSE 284 Object Oriented programming </b>(Level 2 Term 2)</li>
              <li><b>CSE 380 Internet Programming</b> (Level 3 Term 1)</li>
              <li><b>ETE 316 Computer Communications and Network Sessional </b>(Level 3 Term 2)</li>
              <li><b>ETE 404 VLSI Technology Sessional </b> (Level 4 Term 1)</li>
              <li><b>ETE 406 Wireless and Mobile Communication Sessional </b> (Level 4 Term 1)</li>
              <li><b>ETE 408 Multimedia Communication Sessional </b> (Level 4 Term 1)</li>
              <li><b>ETE 430 Neural and Fuzzy Systems in Communication Sessional </b> (Level 4 Term 1)</li>
              <li><b>ETE 414 Satellite Communications & RADAR Sessional </b> (Level 4 Term 2)</li>
              <li><b>ETE 416 IoT and Industrial Automation Sessional </b> (Level 4 Term 2)</li>
              <li><b>ETE 452 Advanced Communications and Networking Sessional </b> (Level 4 Term 2)</li>
            </ul>
          </p>
          <div className="data">
            <a href="/about" className="hire">&lt;---Back</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationLab;
