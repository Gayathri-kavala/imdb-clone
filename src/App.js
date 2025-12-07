// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="container">
        <h1 className="title">AI Code Review</h1>
        <p className="subtitle">
          Submit your latest GitHub commit ID, and our AI will review your code with production standards.
        </p>

        <div className="card how-it-works">
          <h2>How it Works</h2>
          <ol>
            <li>Finish coding in your preferred editor (VS Code or any other).</li>
            <li>Commit and push your changes directly to the <b>master</b> branch.</li>
            <li>Copy the latest <b>commit ID</b> from GitHub.</li>
            <li>Paste the commit ID below and submit.</li>
            <li>Our AI will analyze your code and provide feedback based on production-level standards.</li>
          </ol>
        </div>

        <div className="card commit-form">
          <label htmlFor="commitId" className="label">
            Enter GitHub Commit ID
          </label>
          <input
            id="commitId"
            type="text"
            className="input"
            placeholder="e.g., a1b2c3d4e5f6g7h8i9j0"
          />
          <button className="btn">Submit for AI Review</button>
        </div>
      </div>
    </div>
  );
}

export default App;
