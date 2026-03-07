import React from 'react';
import './CaseStudies.css';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Ecommerce Brand (US)',
      results: [
        { icon: '📈', label: '42% Increase in Conversion Rate' },
        { icon: '📊', label: '3X Return on Ad Spend' },
        { icon: '⚡', label: '60% Faster Website Speed' }
      ]
    },
    {
      title: 'B2B SaaS Company (UK)',
      results: [
        { icon: '📩', label: '35% Increase in Qualified Leads' },
        { icon: '🔄', label: 'Automated CRM Workflow' },
        { icon: '📈', label: 'Improved Sales Pipeline Efficiency' }
      ]
    }
  ];

  return (
    <section className="case-studies-section">
      <div className="case-studies-container">
        <div className="case-studies-header">
          <h2>Results That Speak</h2>
          <p>Real transformations powered by TechHubbix solutions</p>
        </div>

        <div className="case-studies-grid">
          {caseStudies.map((study, index) => (
            <div key={index} className="case-study-card">
              <h3>{study.title}</h3>
              <div className="results-list">
                {study.results.map((result, idx) => (
                  <div key={idx} className="result-item">
                    <span className="result-icon">{result.icon}</span>
                    <span className="result-text">{result.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
