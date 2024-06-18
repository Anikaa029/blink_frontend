import React from 'react';
import './Notice.css';

const notices = [
  {
    id: 1,
    title: 'Seminar on AI and Machine Learning',
    date: '2024-06-25',
    description: 'Join us for an insightful seminar on the latest advancements in AI and Machine Learning. Open to all students and faculty.'
  },
  {
    id: 2,
    title: 'Guest Lecture: The Future of Quantum Computing',
    date: '2024-07-10',
    description: 'A special lecture by Dr. Jane Doe on the future prospects and research opportunities in Quantum Computing.'
  },
  {
    id: 3,
    title: 'Departmental Sports Meet',
    date: '2024-08-15',
    description: 'Annual sports meet for all departments. Participate in various sports and win exciting prizes!'
  },
  // Add more notices as needed
];

const emergencyNotice = '** Emergency Notice: The university will be closed tomorrow due to unforeseen circumstances. Stay safe and stay tuned for further updates.';

const Notice = () => {
  return (
    <div className="notice-page">
      <header className="notice-header">
        <h1>Departmental Notices</h1>
        <p>Stay updated with the latest announcements and events.</p>
      </header>

      <div className="emergency-notice-container">
        <div className="emergency-notice">
          {emergencyNotice}
        </div>
      </div>

      <section className="notices-list">
        {notices.map(notice => (
          <article key={notice.id} className="notice">
            <h2>{notice.title}</h2>
            <p className="notice-date">{notice.date}</p>
            <p>{notice.description}</p>
          </article>
        ))}
      </section>
    </div>
  );
};

export default Notice;
