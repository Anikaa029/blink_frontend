import './ElectronicsLab.css';

const ElectronicsLab = () => {
  return (
    <section className="about-us">
      <div className="about">
        <img src="Electrical.jpeg" alt="Electronic Device & Circuit Laboratory" className="pic" />
        <div className="text">
          <h2>Electronic Device & Circuit Laboratory</h2>
          <p>
            In order to gain fundamental and practical knowledge of electronics engineering, this well-equipped laboratory is used which is enriched with modern electronic instruments and devices. This laboratory also serves students for implementing their projects and thesis in different term.
          </p>
          <p>
            The laboratory is well-equipped with:
            <ul>
              <li>Ammeter</li>
              <li>Voltmeter</li>
              <li>Multimeter</li>
              <li>Oscilloscope (Analog and Digital)</li>
              <li>AC & DC Power Supply Unit and Variable AC Source</li>
              <li>Function Generator</li>
              <li>LCR Meter</li>
              <li>Others relevant components and semiconductor devices extensively used in electronics.</li>
            </ul>
          </p>
          <p>
            <br />
            <b>The following courses are conducted in this lab:</b>
          </p>
          <ul>
            <li><b>EEE 182 Basic Electrical Engineering Sessional</b> (Level 1 Term 1)</li>
            <li><b>ETE 102 Electronics I Sessional</b> (Level 1 Term 2)</li>
            <li><b>ETE 202 Electronics II Sessional</b> (Level 2 Term 1)</li>
            <li><b>ETE 205 Digital Logic Design Sessional</b> (Level 2 Term 2)</li>
            <li><b>ETE 304 Industrial Electronics Sessional</b> (Level 3 Term 1)</li>
            <li><b>ETE 314 Electronics Measurement and Instrumentation Sessional</b> (Level 3 Term 2)</li>
            <li><b>ETE 318 Power system for Communication Engineering Sessional</b> (Level 3 Term 2)</li>
            <li><b>ETE 402 Telecommunication Networks and Switching Sessional</b> (Level 4 Term 1)</li>
          </ul>
          <div className="data">
            <a href="/about" className="hire">&lt;---Back</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectronicsLab;
