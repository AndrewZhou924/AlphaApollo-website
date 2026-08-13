import React from 'react';
import clsx from 'clsx';
import EnvCard from './EnvCard';
import styles from './styles.module.css';

export interface Environment {
  name: string;
  image: string;
  description?: string;
  link: string;
}

export interface EnvironmentShowcaseProps {
  environments: Environment[];
  title?: string;
  background?: 'white' | 'gray';
}

export default function EnvironmentShowcase({
  environments,
  title,
  background = 'gray',
}: EnvironmentShowcaseProps) {
  return (
    <section className={clsx(background === 'gray' ? 'section-gray' : 'section-white')}>
      <div className={styles.container}>
        {title ? <h2 className={styles.heading}>{title}</h2> : null}
        <div className={styles.grid}>
          {environments.map((env) => (
            <EnvCard key={env.name} {...env} />
          ))}
        </div>
      </div>
    </section>
  );
}
