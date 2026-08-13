import React from 'react';
import styles from './styles.module.css';

interface EnvCardProps {
  name: string;
  image: string;
  description?: string;
  link: string;
}

export default function EnvCard({name, image, description, link}: EnvCardProps) {
  return (
    <a className={styles.card} href={link}>
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{name}</h3>
        {description ? <p className={styles.description}>{description}</p> : null}
      </div>
    </a>
  );
}
