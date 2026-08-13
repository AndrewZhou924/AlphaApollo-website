import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

export default function TutorialsPage() {
  return (
    <Layout title="Tutorials" description="Tutorials for AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>Tutorials</h1>
        <p>Curated tutorials to help you get started and go deep with AlphaApollo.</p>
        <ul>
          <li>
            <Link to="/docs/intro">Docs home</Link>
          </li>
        </ul>
      </main>
    </Layout>
  );
}
