import EnvironmentShowcase from '@site/src/components/EnvironmentShowcase';
import Hero from '@site/src/components/Hero';
import InstallBox from '@site/src/components/InstallBox';
import QuickStart from '@site/src/components/QuickStart';
import Layout from '@theme/Layout';
import React, { ReactNode, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import styles from './index.module.css';


const features = [
  {
    icon: '🧠',
    title: 'Multi-turn Agentic Reasoning',
    description: 'Iterative model-environment interaction with dynamic memory and tool-augmented reasoning for complex problem-solving.',
  },
  {
    icon: '📚',
    title: 'Multi-turn Agentic Learning',
    description: 'Per-turn reward assignment and policy updates with masked non-model outputs for continuous learning and adaptation.',
  },
  {
    icon: '🔄',
    title: 'Multi-round Agentic Evolution',
    description: 'Propose-judge-update evolutionary loop with long-term memory to prevent errors and promote efficient strategies.',
  },
];

const solutions = [
  {
    name: 'Agentic Reasoning',
    image: '/img/agentic_reasoning.jpg',
    description: 'Multi-turn agentic reasoning through an iterative cycle of model reasoning, tool execution, and environment feedback.',
    link: '/multi-turn-agentic-reasoning',
  },
  {
    name: 'Agentic Learning',
    image: '/img/agentic_learning.jpg',
    description: 'Stable agentic learning via turn-level optimization that decouples model generations and environmental feedback.',
    link: '/multi-turn-agentic-learning',
  },
  {
    name: 'Agentic Evolution',
    image: '/img/agentic_evolution.jpg',
    description: 'Multi-round agentic evolution through a propose-judge-update evolutionary loop with long-term memory.',
    link: '/multi-round-agentic-evolution',
  },
];

const codeExamples = [
  {
    title: 'Agentic Reasoning',
    language: 'python',
    code: `import alphaapollo

# Initialize the model agent
agent = model()

# Load a problem (Easy)
problem = load_data(PATH)

# Perform inference with tools enabled
reasoning_traj = agent.inference(problem, tool=True)
print(reasoning_traj)`,
  },
  {
    title: 'Agentic Evolution',
    language: 'python',
    code: `import alphaapollo

# Initialize the model agent
agent = model()

# Load a problem (Hard)
problem = load_data(PATH)

# Evolving process with tools
reasoning_traj = agent.evolving(problem, tool=True)
print(reasoning_traj)`,
  },
];

const q1Text = "Every morning Aya goes for a 9-kilometer-long walk and stops at a coffee shop afterwards. When she walks at a constant speed of $s$ kilometers per hour, the walk takes her 4 hours, including $t$ minutes spent in the coffee shop. When she walks $s+2$ kilometers per hour, the walk takes her 2 hours and 24 minutes, including $t$ minutes spent in the coffee shop. Suppose Aya walks at $s+\\frac{1}{2}$ kilometers per hour. Find the number of minutes the walk takes her, including the $t$ minutes spent in the coffee shop.";
const f1Text = "Could you write a short Python script using SymPy to solve the system of equations for $s$ and $t$, and then calculate the final answer in minutes?";

const q2Text = "Jen enters a lottery by picking 4 distinct numbers from $S=\\{1, 2, 3, \\dots, 9, 10\\}$. 4 numbers are randomly chosen from $S$. She wins a prize if at least two of her numbers were of the randomly chosen numbers, and wins the grand prize if all four of her numbers were the randomly chosen numbers. The probability of her winning the grand prize given that she won a prize is $m/n$, where $m$ and $n$ are relatively prime positive integers. Find $m+n$.";
const f2Text = "Could you write a Python script to simulate this lottery 100,000 times and verify if the empirical probability closely matches your analytical result?";

const q3Text = "Find the largest possible real part of $(75+117i)z+\\frac{96+144i}{z}$ where $z$ is a complex number with $|z|=4$.";
const f3Text = "Please write a Python program using `scipy.optimize` or a simple search over $\\theta \\in [0, 2\\pi]$ to numerically find the maximum real part of this expression and verify your analytical maximum.";

const demoItems = [
  { label: 'Question 1', text: q1Text, gif: '/img/demo_q1.gif' },
  { label: 'Question 2', text: q2Text, gif: '/img/demo_q2.gif' },
  { label: 'Question 3', text: q3Text, gif: '/img/demo_q3.gif' },
  { label: 'Followup 1', text: f1Text, gif: '/img/demo_f1.gif' },
  { label: 'Followup 2', text: f2Text, gif: '/img/demo_f2.gif' },
  { label: 'Followup 3', text: f3Text, gif: '/img/demo_f3.gif' },
];

export default function Home(): ReactNode {
  const [activeGif, setActiveGif] = useState<string | null>(null);

  return (
    <Layout
      title="AlphaApollo"
      description="AlphaApollo: RL training framework for LLMs">
      <main>
        <div className={styles.container}>
          <Hero
            title="AlphaApollo"
            description="A System for Deep Agentic Reasoning"
            primaryButtonText="Paper"
            primaryButtonLink="https://arxiv.org/abs/2510.06261"
            secondaryButtonText="GitHub"
            secondaryButtonLink="https://github.com/tmlr-group/AlphaApollo"
          />

          <section className={styles.introSection}>
            <div className={styles.introContent}>
              <p>
                AlphaApollo is an agentic reasoning framework that integrates multiple models and tools to enable iterative, verifiable, and self-evolving reasoning.
                It supports a wide range of agentic reasoning paradigms, including tool-integrated reasoning, agentic post-training (multi-turn SFT and reinforcement learning), and agentic self-evolution.
                AlphaApollo incorporates multiple post-training algorithms such as PPO, GRPO, and DAPO, and provides dataset-backed agentic evaluation pipelines.
                AlphaApollo also offers flexible and extensible agentic environments and tool-set configurations, allowing users to easily customize, extend, and scale agentic reasoning workflows.
              </p>
            </div>
          </section>

          <EnvironmentShowcase
            title="Key Features"
            environments={solutions}
            background="gray"
          />

          <section className={styles.demoSection}>
            <div className={styles.demoContent}>
              <h2>Demo</h2>
              <div className={styles.demoGrid}>
                {demoItems.map((item, index) => (
                  <div key={index} className={styles.demoItem}>
                    <div className={styles.demoHeader}>
                      <span className={styles.demoLabel}>{item.label}</span>
                      <div className={styles.demoText}>
                        <ReactMarkdown 
                          remarkPlugins={[remarkMath]} 
                          rehypePlugins={[rehypeKatex]}
                        >
                          {item.text}
                        </ReactMarkdown>
                      </div>
                    </div>
                    <div className={styles.gifWrapper} onClick={() => setActiveGif(item.gif)}>
                      <img src={item.gif} alt={item.label} loading="lazy" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {activeGif && (
            <div className={styles.modal} onClick={() => setActiveGif(null)}>
              <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={() => setActiveGif(null)}>&times;</button>
                <img src={activeGif} alt="Enlarged Demo" />
              </div>
            </div>
          )}

          <QuickStart />
        </div>
      </main>
    </Layout>
  );
}
