import React, {useState} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

export interface CodeExample {
  title: string;
  code: string;
  language: string;
  output?: string;
}

export interface CodeDemoProps {
  examples: CodeExample[];
  defaultTab?: number;
  title?: string;
}

export default function CodeDemo({examples, defaultTab = 0, title}: CodeDemoProps) {
  const [active, setActive] = useState(defaultTab);
  const current = examples[active];

  return (
    <div className={styles.container}>
        {title ? <h3 className={styles.title}>{title}</h3> : null}
        <div className={styles.tabs}>
          {examples.map((example, idx) => (
            <button
              key={example.title}
              className={clsx(styles.tab, idx === active && styles.activeTab)}
              onClick={() => setActive(idx)}
              type="button">
              {example.title}
            </button>
          ))}
        </div>
        <div className={styles.panel}>
          <div className={styles.codeHeader}>
            <span className={styles.language}>{current.language}</span>
          </div>
          <pre className={styles.code}>
            <code>{current.code}</code>
          </pre>
          {current.output ? (
            <div className={styles.output}>
              <div className={styles.outputLabel}>Output</div>
              <pre>
                <code>{current.output}</code>
              </pre>
            </div>
          ) : null}
        </div>
      </div>
  );
}
