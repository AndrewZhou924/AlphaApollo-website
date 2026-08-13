import React from 'react';
import Layout from '@theme/Layout';
import QuickStart from '@site/src/components/QuickStart';

export default function GetStartedPage() {
  return (
    <Layout title="Get Started" description="Start with AlphaApollo">
      <main className="container margin-vert--xl">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h1>Get Started with AlphaApollo</h1>
          <p className="hero__subtitle">
            Follow these steps to set up your environment and run your first agentic reasoning task.
          </p>
          
          <QuickStart />

          <section className="margin-vert--lg">
            <h2>What's Next?</h2>
            <div className="row">
              <div className="col col--4">
                <div className="card shadow--md">
                  <div className="card__header">
                    <h3>📚 Documentation</h3>
                  </div>
                  <div className="card__body">
                    <p>Explore the full documentation to learn about core modules, configurations, and advanced features.</p>
                  </div>
                  <div className="card__footer">
                    <a href="/docs/intro" className="button button--primary button--block">Read Docs</a>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card shadow--md">
                  <div className="card__header">
                    <h3>🛠️ Built-in Tools</h3>
                  </div>
                  <div className="card__body">
                    <p>Learn how to use and extend built-in tools like the Python interpreter and local RAG module.</p>
                  </div>
                  <div className="card__footer">
                    <a href="/docs/core-modules/tools" className="button button--secondary button--block">Explore Tools</a>
                  </div>
                </div>
              </div>
              <div className="col col--4">
                <div className="card shadow--md">
                  <div className="card__header">
                    <h3>🤝 Contribute</h3>
                  </div>
                  <div className="card__body">
                    <p>Join the community and help us improve AlphaApollo by contributing new algorithms or environments.</p>
                  </div>
                  <div className="card__footer">
                    <a href="https://github.com/tmlr-group/AlphaApollo" className="button button--secondary button--block">GitHub</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </Layout>
  );
}
