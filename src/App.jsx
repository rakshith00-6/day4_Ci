import "./App.css";

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>🚀 DevOps Learning Hub</h1>
        <p>Learning CI/CD with React, GitHub Actions & Docker</p>
      </header>

      <main className="container">
        <section className="hero">
          <h2>Welcome to DevOps 🚀</h2>
          <p>
            This React application is created as a demo project for learning
            Continuous Integration and Continuous Deployment.
          </p>

          <button onClick={() => alert("CI Pipeline Demo 🚀")}>
            Test Application
          </button>
        </section>

        <section className="cards">
          <div className="card">
            <h3>🔧 Git & GitHub</h3>
            <p>
              Manage source code using Git and collaborate through GitHub.
            </p>
          </div>

          <div className="card">
            <h3>⚙️ Continuous Integration</h3>
            <p>
              Automatically build and test the React application whenever code
              is pushed.
            </p>
          </div>

          <div className="card">
            <h3>🐳 Docker</h3>
            <p>
              Containerize the React application and run it consistently
              across environments.
            </p>
          </div>

          <div className="card">
            <h3>☁️ AWS Deployment</h3>
            <p>
              Deploy the application to an AWS EC2 server using DevOps
              practices.
            </p>
          </div>
        </section>

        <section className="pipeline">
          <h2>CI/CD Pipeline</h2>

          <div className="steps">
            <div>👨‍💻 Code</div>
            <span>→</span>
            <div>📦 GitHub</div>
            <span>→</span>
            <div>⚙️ CI</div>
            <span>→</span>
            <div>🧪 Test</div>
            <span>→</span>
            <div>🚀 Deploy</div>
          </div>
        </section>
      </main>

      <footer>
        <p>DevOps Workshop Demo Project | React + CI/CD</p>
      </footer>
    </div>
  );
}

export default App;