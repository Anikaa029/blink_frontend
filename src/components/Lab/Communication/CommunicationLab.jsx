import './CommunicationLab.css'; 

const CommunicationLab = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src="antenna4.jpg" alt="Communication System Lab" className="pic" />
        <div className="text">
          <h2>Communication System Laboratory</h2>
          <p>
            Communication, core of Electronics and Telecommunication Engineering, is one that requires hands-on experience and practical demonstrations of systems in communication. Our Communication System Laboratory enables students to conduct their analog and digital communication lab, telecommunication networks and switching lab with all latest communication trainers. The lab provides the following trainers:
          </p>
          <ul>
            <li>Mobile Telecom Trainer.</li>
            <li>Telecommunication Switching Trainer.</li>
            <li>EPABX Trainer.</li>
            <li>GSM Trainer.</li>
            <li>GPS Trainer.</li>
            <li>Analog Communication Trainer.</li>
            <li>Digital Communication Trainer.</li>
          </ul>
          <p>
            <br />
            <b>The following courses are conducted in this lab:</b>
          </p>
          <ul>
            <li><b>ETE 210 Analog Communications Sessional</b> (Level 2 Term 2)</li>
            <li><b>ETE 306 Digital Communications Sessional</b> (Level 3 Term 1)</li>
            <li><b>ETE 412 Optical Fiber Communications Sessional</b> (Level 4 Term 2)</li>
            <li><b>ETE 408 Multimedia Communication Sessional</b> (Level 4 Term 1)</li>
            <li><b>ETE 456 Biomedical Instrumentation Sessional</b> (Level 4 Term 2)</li>
          </ul>
          <div className="data">
            <a href="/about" className="hire">&lt;---Back</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationLab;
