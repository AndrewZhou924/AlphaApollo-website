import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function AboutPage() {
  return (
    <Layout title="About" description="About AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>About</h1>
        <p>
          AlphaApollo is an RL framework for post-training LLMs, built on the HybridFlow
          architecture, supporting multiple algorithms, environments, and production-grade
          infrastructure.
        </p>
        <h2>Key features</h2>
        <ul>
          <li>Hybrid programming model (single/multi-controller)</li>
          <li>Rich environment suite with extensible interfaces</li>
          <li>Production-grade throughput and distributed capability</li>
        </ul>
        <p>
          See the <Link to="/docs/intro">docs</Link> to learn more.
        </p>
      </main>
    </Layout>
  );
}
