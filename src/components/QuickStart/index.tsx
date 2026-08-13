import React, {useState} from 'react';
import clsx from 'clsx';
import {Highlight, themes} from 'prism-react-renderer';
import styles from './styles.module.css';

export interface QuickStartProps {
  className?: string;
}

const installCommand = `conda create -n alphaapollo python==3.12 -y
conda activate alphaapollo

git clone https://github.com/tmlr-group/AlphaApollo.git
cd AlphaApollo

bash installation.sh`;

const demoExamples = [
  {
    title: 'Agentic Reasoning',
    language: 'bash',
    code: `# Method 1: workflow entrypoint
# no-tool reasoning
python3 -m alphaapollo.workflows.test \\
  --model.path=Qwen/Qwen2.5-3B-Instruct \\
  --preprocess.data_source=math-ai/aime24

# tool-integrated reasoning
python3 -m alphaapollo.workflows.test \\
  --model.path=Qwen/Qwen2.5-3B-Instruct \\
  --preprocess.data_source=math-ai/aime24 \\
  --env.informal_math.enable_python_code=true \\
  --env.informal_math.enable_local_rag=false \\
  --env.max_steps=4

# Method 2: script entrypoint
bash examples/test/run_test_informal_math_no_tool.sh # no-tool reasoning
bash examples/test/run_test_informal_math.sh # tool-integrated reasoning`,
  },
  {
    title: 'Agentic Learning',
    language: 'bash',
    code: `# Method 1: workflow entrypoint
# multi-turn SFT
python3 -m alphaapollo.workflows.sft \\
  --model.partial_pretrain=Qwen/Qwen2.5-3B-Instruct \\
  --preprocess.data_source=AI-MO/NuminaMath-TIR

# multi-turn RL
python3 -m alphaapollo.workflows.rl \\
  --model.path=Qwen/Qwen2.5-3B-Instruct \\
  --preprocess.data_source=HuggingFaceH4/MATH-500 \\
  --algorithm.adv_estimator=grpo

# Method 2: script entrypoints
bash examples/sft/run_sft_informal_math_no_tool.sh # vanilla SFT
bash examples/sft/run_sft_informal_math_tool.sh # multi-turn SFT
bash examples/rl/run_rl_informal_math_no_tool.sh # vanilla RL (estimator=grpo by default)
bash examples/rl/run_rl_informal_math_tool.sh # multi-turn RL (estimator=grpo by default)`,
  },
  {
    title: 'Agentic Evolution',
    language: 'bash',
    code: `# Before running, serve models:
python alphaapollo/utils/ray_serve_llm.py \\
  --model_path Qwen/Qwen3-4B-Instruct-2507 \\
  --gpus "0,1" \\
  --model_id "qwen3_4b_inst"

# Method 1: workflow entrypoint
# single-model evolution
python3 -m alphaapollo.workflows.evo \\
  --preprocess.data_source=math-ai/aime24 \\
  --run.dataset_name=aime24 \\
  --policy_model_cfg.model_name=qwen3_4b_inst \\
  --verifier_cfg.model_name=qwen3_4b_inst 

# Method 2: script entrypoint
bash examples/evo/run_evo_informal_math.sh # single-model evolution
bash examples/evo/run_evo_informal_math_multi_models.sh # multi-model evolution`,
  },
];

const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Copy failed', err);
    return false;
  }
};

function CodeBlock({code, language}: {code: string; language: string}) {
  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    checkTheme();
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);

  return (
    <Highlight
      theme={isDark ? themes.vsDark : themes.github}
      code={code}
      language={language as any}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={clsx(styles.code, className)} style={style}>
          <code>
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token})} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
}

export default function QuickStart({className}: QuickStartProps) {
  const [activeDemo, setActiveDemo] = useState(0);
  const [copiedInstall, setCopiedInstall] = useState(false);
  const [copiedDemo, setCopiedDemo] = useState(false);

  const handleCopyInstall = async () => {
    const ok = await copyToClipboard(installCommand);
    setCopiedInstall(ok);
    setTimeout(() => setCopiedInstall(false), 1500);
  };

  const handleCopyDemo = async () => {
    const ok = await copyToClipboard(demoExamples[activeDemo].code);
    setCopiedDemo(ok);
    setTimeout(() => setCopiedDemo(false), 1500);
  };

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>Quick Start</h2>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Installation</h3>
          <div className={styles.codeBox}>
            <div className={styles.codeHeader}>
              <span className={styles.language}>bash</span>
              <button
                type="button"
                aria-label="Copy installation command"
                className={styles.copyButton}
                onClick={handleCopyInstall}>
                {copiedInstall ? 'Copied' : 'Copy'}
              </button>
            </div>
            <CodeBlock code={installCommand} language="bash" />
          </div>
        </div>

        <div className={styles.section}>
          <h3 className={styles.subtitle}>Demo Programs</h3>
          <div className={styles.demoTabs}>
            {demoExamples.map((example, idx) => (
              <button
                key={example.title}
                className={clsx(styles.demoTab, idx === activeDemo && styles.activeDemoTab)}
                onClick={() => setActiveDemo(idx)}
                type="button">
                {example.title}
              </button>
            ))}
          </div>
          <div className={styles.codeBox}>
            <div className={styles.codeHeader}>
              <span className={styles.language}>{demoExamples[activeDemo].language}</span>
              <button
                type="button"
                aria-label="Copy demo command"
                className={styles.copyButton}
                onClick={handleCopyDemo}>
                {copiedDemo ? 'Copied' : 'Copy'}
              </button>
            </div>
            <CodeBlock code={demoExamples[activeDemo].code} language={demoExamples[activeDemo].language} />
          </div>
        </div>
      </div>
    </div>
  );
}
