import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function ContributePage() {
  return (
    <Layout title="Contribute" description="Contribute to AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>Contribute</h1>
        <p>Contribute docs, code, or examples to AlphaApollo!</p>
        <h2>How to contribute</h2>
        <ul>
          <li>
            Check <Link to="https://github.com/tmlr-group/AlphaApollo/issues">GitHub
              Issues</Link> and pick a task
          </li>
          <li>Improve documentation (`/docs`)</li>
          <li>Submit examples or environment adaptations</li>
        </ul>
        <h2>References</h2>
        <ul>
          <li>
            <Link to="/docs/intro">Docs home</Link>
          </li>
          <li>
            <Link to="/docs/contribution">Contribution guides</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
