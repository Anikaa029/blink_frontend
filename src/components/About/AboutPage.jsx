import './AboutPage.css';

const AboutPage = () => {
    return (
        <div>
            <section className="about-section">
                <div className="about-content">
                    <h2>About ETE</h2>
                    <p>Communication engineering plays a vital role in todays rapidly changing world. In this prospect, CUET has launched Department of Electronics and Telecommunication Engineering (ETE) in the year 2012. The vision of this department is to make great contribution by producing efficient and resourceful engineers with research and development capabilities.

                    The ETE Department has well qualified and experienced faculty members with areas of specialization that include Embedded Systems, Applied Electronics and VLSI design. The department has taken step to collect technologically advanced equipment and to build enriched laboratories. Students will be given vast amount of practical exposure through the use of innovative methodologies in the design and development of electronics, which is the backbone for all engineering disciplines.

                    The Department of ETE offers a comprehensive range of rigorous, innovative programs .The undergraduate curriculum of Electronics and Telecommunication Engineering: is designed to give students a sound knowledge of Engineering fundamentals, strong physical sciences background and adequate practical training so that they will be ready to quickly achieve competence in treating current technical problems as well as those that will come with the rapidly changing technologies of the year-to-come. The Electronic and Telecommunication Engineering program prepares students for careers in such areas of electronics, computer, communication etc.

                    The aim of the undergraduate program of the Department of Electronics and Telecommunication Engineering (ETE) is to provide the students with a technical and engineering background and scientific research capabilities in the design and development and production of electronic devices, circuits and systems used in a wide spectrum of applications ranging from home appliances to the most sophisticated satellite communications.</p>
                </div>
            </section>

            <div className="Lab">
                <h2>Lab Facilities</h2>
            </div>

            <div className="card-list">
                <a href="#" className="card-item">
                    <img src="antenna4.jpg" alt="Card Image" />
                    <span className="developer">Digital & Microprocessor Laboratory</span>
                    <h3>Click here to visit Digital & Microprocessor Laboratory</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="/simulation" className="card-item">
                    <img src="Computer_Lab.jpg" alt="Card Image" />
                    <span className="designer">Simulation Laboratory</span>
                    <h3>Click here to visit Simulation Laboratory</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="electronics" className="card-item">
                    <img src="Electrical.jpeg" alt="Card Image" />
                    <span className="editor">Electronic Device & Circuit Laboratory</span>
                    <h3>Click here to visit Electronic Device & Circuit Laboratory</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="#" className="card-item">
                    <img src="lab1.jpg" alt="Card Image" />
                    <span className="editor">Antenna & Microwave Engineering Laboratory</span>
                    <h3>Click here to visit Antenna & Microwave Engineering Laboratory</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
                <a href="communication" className="card-item">
                    <img src="Telecommunication_Lab.jpg" alt="Card Image" />
                    <span className="editor">Communication System Laboratory</span>
                    <h3>Click here to visit Communication System Laboratory</h3>
                    <div className="arrow">
                        <i className="fas fa-arrow-right card-icon"></i>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default AboutPage;
