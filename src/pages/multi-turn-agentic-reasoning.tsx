import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function MultiTurnAgenticReasoningPage() {
  const fg2Url = useBaseUrl('/img/agentic_reasoning.jpg');
  return (
    <Layout title="Multi-turn Agentic Reasoning" description="Multi-turn Agentic Reasoning for AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>Multi-turn Agentic Reasoning</h1>

        <p>
          AlphaApollo enables <strong>multi-turn agentic reasoning</strong> by orchestrating foundation models
          with professional tools to overcome the limitations of model-intrinsic capacity. This approach allows
          models to engage in deliberate, verifiable reasoning through iterative tool-augmented interactions.
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
            src={fg2Url}
            alt="Multi-turn Agentic Reasoning Architecture"
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
            AlphaApollo's reasoning process is an iterative model-environment interaction. The model outputs an action, and the environment provides feedback. Each turn's trajectory is used as the prompt for the next turn, enabling dynamic memory.
          </p>
        </div>

        <h2>Core Components</h2>

        <h3>1. Computation Tool</h3>
        <p>
          AlphaApollo integrates a Python interpreter with domain-specific libraries (e.g., SciPy, SymPy)
          for numerical and symbolic calculations. This enables models to:
        </p>
        <ul>
          <li>Perform exact mathematical computations beyond token prediction limits</li>
          <li>Execute symbolic manipulations for complex algebraic problems</li>
          <li>Verify solutions through executable code checks</li>
          <li>Generate verifiable, fine-grained feedback for solution refinement</li>
        </ul>

        <h3>2. Retrieval Tool</h3>
        <p>
          The retrieval tool surfaces task-relevant information from external sources, including:
        </p>
        <ul>
          <li>Library documentation (e.g., SciPy function usage)</li>
          <li>Contextual information needed for problem-solving</li>
        </ul>

        <h2>How It Works</h2>
        <p>
          In a multi-turn reasoning session, the model:
        </p>
        <ol>
          <li><strong>Analyzes the problem</strong> and identifies required computations or information</li>
          <li><strong>Calls appropriate tools</strong> (computation or retrieval) to gather necessary data</li>
          <li><strong>Integrates tool outputs</strong> into its reasoning process</li>
          <li><strong>Refines the solution</strong> based on verifiable results</li>
          <li><strong>Iterates</strong> until a satisfactory solution is reached</li>
        </ol>


        <p>
          <Link to="/">Back to main page</Link> | <Link to="/multi-turn-agentic-learning">Next: Multi-turn Agentic Learning</Link>
        </p>
      </main>
    </Layout>
  );
}
