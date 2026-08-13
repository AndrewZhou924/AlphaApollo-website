import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function MultiRoundAgenticEvolutionPage() {
  const fg4Url = useBaseUrl('/img/agentic_evolution.jpg');
  return (
    <Layout title="Multi-round Agentic Evolution" description="Multi-round Agentic Evolution for AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>Multi-round Agentic Evolution</h1>

        <p>
          <strong>Multi-round Agentic Evolution</strong> is AlphaApollo's core mechanism for enabling multiple
          models to collaboratively evolve solutions through parallel reasoning and shared state management.
          This approach addresses the challenge of test-time iteration by providing trustworthy feedback and
          enabling systematic solution refinement.
        </p>

        <div style={{
          textAlign: 'center',
          margin: '3rem auto',
          padding: '1.5rem',
          maxWidth: '900px',
          backgroundColor: 'var(--ifm-color-emphasis-100)',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <img
            src={fg4Url}
            alt="Multi-round Agentic Evolution Framework"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '8px',
              display: 'block',
              margin: '0 auto'
            }}
          />
          <p style={{
            marginTop: '1rem',
            marginBottom: 0,
            fontSize: '0.9rem',
            color: 'var(--ifm-color-content-secondary)',
            fontStyle: 'italic'
          }}>
            Illustration of multi-round agentic evolution in AlphaApollo. The model iteratively refines its strategies through a propose-judge-update evolutionary loop. A long-term memory is introduced to prevent future errors and promote efficient strategies in subsequent rounds.
          </p>
        </div>

        <h2>Long-term Memory</h2>
        <p>
          At the heart of multi-round evolution is a <strong>long-term memory</strong> that records:
        </p>
        <ul>
          <li><strong>Candidate solutions:</strong> All proposed solutions from different models</li>
          <li><strong>Feedback signals:</strong> Fine-grained evaluation outcomes</li>
          <li><strong>Evolution history:</strong> How solutions have been refined over rounds</li>
        </ul>

        <h2>How Multi-Round Evolution Works</h2>

        <h3>1. Parallel Candidate Generation</h3>
        <p>
          Multiple models operate in parallel, each with full access to the toolset:
        </p>
        <ul>
          <li>Each model proposes candidate solutions independently</li>
          <li>Models can use computation and retrieval tools as needed</li>
          <li>All candidates are recorded in the shared memory</li>
        </ul>

        <h3>2. Tool-Based Evaluation</h3>
        <p>
          Each candidate solution undergoes verification:
        </p>
        <ul>
          <li>Code solutions are executed to produce verifiable results</li>
          <li>Mathematical derivations are checked for correctness</li>
          <li>Logical consistency is validated</li>
          <li>Evaluation results are stored in the memory</li>
        </ul>

        <h3>3. Refinement</h3>
        <p>
          Models reference the shared memory to generate improved solutions:
        </p>
        <ul>
          <li>Review successful patterns from previous rounds</li>
          <li>Learn from failed attempts and their feedback</li>
          <li>Combine insights from multiple candidate solutions</li>
          <li>Generate refined solutions that build upon prior candidates</li>
        </ul>


        <p>
          <Link to="/multi-turn-agentic-learning">Previous: Multi-turn Agentic Learning</Link> |
          <Link to="/">Back to main page</Link>
        </p>
      </main>
    </Layout>
  );
}
