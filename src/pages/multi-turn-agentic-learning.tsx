import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Layout from '@theme/Layout';

export default function MultiTurnAgenticLearningPage() {
  const fg3Url = useBaseUrl('/img/agentic_learning.jpg');
  return (
    <Layout title="Multi-turn Agentic Learning" description="Multi-turn Agentic Learning for AlphaApollo">
      <main className="container margin-vert--lg">
        <h1>Multi-turn Agentic Learning</h1>

        <p>
          <strong>Multi-turn Agentic Learning</strong> enables models to learn and improve through iterative
          interactions with tools and feedback mechanisms. Unlike static prompting, this approach allows models
          to adapt their strategies based on verifiable outcomes from tool executions.
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
            src={fg3Url}
            alt="Multi-turn Agentic Learning Process"
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
            Illustration of multi-turn agentic RL in AlphaApollo. During generation, per-turn rewards are assigned based on model outputs and environment feedback, and summed to form the trajectory reward. During policy update, the policy is updated at each turn with non-model outputs masked.
          </p>
        </div>

        <h2>Learning Through Tool Interaction</h2>
        <p>
          In AlphaApollo, models learn by:
        </p>
        <ul>
          <li><strong>Observing tool outputs:</strong> Understanding what works and what doesn't through executable feedback</li>
          <li><strong>Refining strategies:</strong> Adjusting problem-solving strategies based on successful patterns</li>
          <li><strong>Building expertise:</strong> Accumulating knowledge about effective tool usage and problem decomposition</li>
          <li><strong>Error correction:</strong> Learning from failed attempts and tool execution errors</li>
        </ul>

        <h2>Feedback Mechanisms</h2>

        <h3>1. Execution Feedback</h3>
        <p>
          When code is executed, models receive:
        </p>
        <ul>
          <li>Success/failure indicators</li>
          <li>Output values and intermediate results</li>
          <li>Error messages and stack traces</li>
        </ul>

        <h3>2. Retrieval Feedback</h3>
        <p>
          When retrieving information, models learn:
        </p>
        <ul>
          <li>Which information sources are most relevant</li>
          <li>How to formulate effective queries</li>
          <li>How to integrate retrieved knowledge into reasoning</li>
        </ul>


        <h2>Key Benefits</h2>
        <ul>
          <li><strong>Multi-tool usage:</strong> Models learn how to use multiple tools effectively for different tasks.</li>
          <li><strong>Tool integration in reasoning:</strong> Models learn to integrate tools seamlessly into their step-by-step reasoning processes.</li>
          <li><strong>Self-improvement via tool feedback:</strong> Models learn to improve their performance by analyzing and learning from the execution feedback.</li>
        </ul>


        <p>
          <Link to="/multi-turn-agentic-reasoning">Previous: Multi-turn Agentic Reasoning</Link> |
          <Link to="/multi-round-agentic-evolution">Next: Multi-round Agentic Evolution</Link>
        </p>
      </main>
    </Layout>
  );
}
