import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Engineer</h4>
                <h5>ROWTH Autos</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Refactored and improved 20+ reusable UI components using React.js,
              Redux, and TypeScript. Built RESTful APIs and resolved high-severity
              UI issues, maintaining 99.9% uptime across production platforms.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Front End Engineer</h4>
                <h5>Pragmatic Play</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Engineered real-time multiplayer casino games using React.js,
              Socket.io, and WebSockets, supporting thousands of concurrent users.
              Built 30+ reusable UI components with Storybook, reducing feature
              delivery time by 25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Applied Materials</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Designed and optimized AI-powered data visualization dashboards
              handling large-scale datasets using React, D3.js, and GraphQL,
              reducing data load time by 30%. Architected a predictive UI component
              during an internal AI hackathon, increasing productivity by 70%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
