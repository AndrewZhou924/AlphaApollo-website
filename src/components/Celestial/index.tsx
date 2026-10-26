import React, {useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import type {ProjectContent} from '../../data/celestial';
import styles from './styles.module.css';

function Mark({moon = false}: {moon?: boolean}) {
  return <svg viewBox="0 0 40 40" fill="none" aria-hidden="true">
    {moon ? <path d="M31 27A15 15 0 0 1 13 7a15 15 0 1 0 18 20Z" fill="currentColor"/> : <>
      <circle cx="20" cy="20" r="8" fill="currentColor"/>
      {Array.from({length: 12}, (_, i) => <path key={i} d="M20 3v5" stroke="currentColor" strokeWidth="1.6" transform={`rotate(${i * 30} 20 20)`}/>)}
    </>}
  </svg>;
}

function CopyButton({text, label = 'Copy'}: {text: string; label?: string}) {
  const [status, setStatus] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(text); setStatus('Copied'); }
    catch { setStatus('Copy unavailable — select the text below.'); }
  }
  return <div className={styles.copyControl}><button type="button" onClick={copy}>{label} <span aria-hidden="true">↗</span></button><span role="status">{status}</span></div>;
}

export default function Celestial({content: c}: {content: ProjectContent}) {
  const [active, setActive] = useState(0);
  const [example, setExample] = useState(0);
  const [figure, setFigure] = useState({src: c.overview, caption: c.overviewCaption});
  const dialog = useRef<HTMLDialogElement>(null);
  const moon = c.id === 'diana';
  const stage = c.stages[active];
  function enlarge(src: string, caption: string) {
    setFigure({src, caption}); dialog.current?.showModal();
  }
  return <Layout title={`${c.name} · Celestial preview`} description={c.subtitle} noFooter>
    <Head><body className="celestial-preview"/><meta name="robots" content="noindex, nofollow"/></Head>
    <main className={styles.site} data-project={c.id}>
      <a className={styles.skip} href="#overview">Skip to content</a>
      <div className={styles.preview}><span>DESIGN STUDY <span className={styles.previewDetail}>/ SUN & MOON</span></span><div><a href="/solar-preview" aria-current={!moon ? 'page' : undefined}>Apollo / Sun</a><a href="/lunar-preview" aria-current={moon ? 'page' : undefined}>Diana / Moon</a><a href="/">Current Apollo ↗</a></div></div>
      <header className={styles.header}>
        <a href={moon ? '/lunar-preview' : '/solar-preview'} className={styles.wordmark}><Mark moon={moon}/>{c.name}</a>
        <nav aria-label="Page sections"><a href="#framework">Framework</a><a href="#explore">Explore</a><a href="#start">Quick Start</a><a href={c.docs}>Docs ↗</a></nav>
        <a className={styles.headerPaper} href={c.paper}>Paper ↗</a>
      </header>

      <section className={styles.hero} id="overview">
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{c.eyebrow}</p>
          <h1>Alpha<span>{moon ? 'Diana' : 'Apollo'}</span><i aria-hidden="true"><Mark moon={moon}/></i></h1>
          <h2>{c.subtitle}</h2>
          <p className={styles.deck}>{c.deck}</p>
          <div className={styles.actions}><a className={styles.primary} href={c.paper}>Paper <span>↗</span></a><a href={c.code}>GitHub ↗</a><a href="#start">Get started ↓</a></div>
          <p className={styles.paperNote}>{c.paperNote}</p>
        </div>
        <div className={styles.celestial} aria-hidden="true">
          <div className={styles.axis}/><div className={styles.orbit}/><div className={styles.orbitInner}/><div className={styles.globe}/><div className={styles.satellite}/>
          <span className={styles.coordinate}>α / {moon ? 'DIANA' : 'APOLLO'}</span>
          <span className={styles.orbitLabel}>{c.orbitLabel}</span><span className={styles.axisLabel}>{moon ? 'OBSERVE · MEASURE · UNDERSTAND' : 'REASON · LEARN · EVOLVE'}</span>
        </div>
      </section>

      <div className={styles.indexStrip}>{c.stages.map((s, i) => <a href="#explore" key={s.title} onClick={() => setActive(i)}><span>0{i + 1}</span>{s.short}<b aria-hidden="true">↗</b></a>)}</div>

      <section className={styles.section} id="framework">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>01 / THE BIG PICTURE</p><h2>{c.frameworkTitle}</h2></div>
        <p className={styles.intro}>{c.intro}</p>
        <figure className={styles.overviewFigure}><button type="button" onClick={() => enlarge(c.overview, c.overviewCaption)} aria-label="Enlarge framework figure"><img src={c.overview} alt={c.overviewCaption} loading="lazy"/><span className={styles.expand}>View full figure ↗</span></button><figcaption>{c.overviewCaption}</figcaption></figure>
      </section>

      <section className={`${styles.section} ${styles.explore}`} id="explore">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>02 / EXPLORE THE SYSTEM</p><h2>{c.exploreTitle}</h2></div>
        <div className={styles.explorer}>
          <div className={styles.stageList} role="group" aria-label="Choose a system component">{c.stages.map((s, i) => <button type="button" key={s.title} aria-pressed={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span><strong>{s.short}</strong><b aria-hidden="true">{i === active ? '−' : '+'}</b></button>)}<p>Select a component to explore its workflow and original figure.</p></div>
          <div className={styles.stagePanel} aria-live="polite"><p className={styles.smallLabel}>{stage.kicker}</p><h3>{stage.title}</h3><p>{stage.description}</p><ol className={styles.flow}>{stage.flow.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}</ol><button className={styles.stageFigure} type="button" onClick={() => enlarge(stage.image, stage.caption)} aria-label={`Enlarge ${stage.short} figure`}><img src={stage.image} alt={stage.caption} loading="lazy"/><span className={styles.expand}>↗</span></button><p className={styles.caption}>{stage.caption}</p><a className={styles.textLink} href={stage.link}>Explore this component ↗</a></div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.start}`} id="start">
        <div className={styles.sectionHeading}><p className={styles.eyebrow}>03 / FROM IDEA TO EXECUTION</p><h2>{c.startTitle}</h2></div>
        <div className={styles.startGrid}><div><p>{c.startDescription}</p><a className={styles.textLink} href={c.startDocs}>Read the setup guide ↗</a><details className={styles.setup}><summary>Installation & prerequisites</summary>{c.setup.map(item => <div key={item.title}><h3>{item.title}</h3><pre><code>{item.code}</code></pre><CopyButton text={item.code} label={`Copy ${item.title.toLowerCase()}`}/></div>)}</details></div>
          <div className={styles.codePanel}><div className={styles.codeChoices} role="group" aria-label="Choose a code example">{c.examples.map((e, i) => <button type="button" key={e.title} aria-pressed={i === example} onClick={() => setExample(i)}>{e.title}</button>)}</div><div className={styles.codeMeta}><span>{c.examples[example].language}</span><CopyButton key={example} text={c.examples[example].code} label="Copy code"/></div><pre><code>{c.examples[example].code}</code></pre></div></div>
      </section>

      <section className={`${styles.section} ${styles.reading}`} id="paper">
        <div><p className={styles.eyebrow}>04 / READ THE RESEARCH</p><h2>{c.researchTitle}</h2><p>{c.researchDescription}</p><a className={styles.primary} href={c.paper}>Read the paper ↗</a></div>
        <div className={styles.paperCard}><span className={styles.smallLabel}>{c.paperNote}</span><h3>{c.name}: {c.subtitle}</h3><details><summary>Authors</summary><p>{c.authors}</p></details><details><summary>Cite this work</summary><CopyButton text={c.citation} label="Copy BibTeX"/><pre><code>{c.citation}</code></pre></details></div>
      </section>

      <footer className={styles.footer}><div className={styles.footerPair}><Mark moon={moon}/><span>{c.name}</span><span className={styles.pairLine}/><Mark moon={!moon}/><a href={moon ? '/solar-preview' : '/lunar-preview'}>Explore {moon ? 'AlphaApollo' : 'AlphaDiana'} ↗</a></div><p>{c.relatedDescription}</p><div className={styles.footerLinks}><a href={c.code}>GitHub</a><a href={c.docs}>Documentation</a><a href={c.paper}>Paper</a><a href="#overview">Back to top ↑</a></div><small>Sun & Moon · Paired design preview · Original research figures retained</small></footer>

      <dialog ref={dialog} className={styles.dialog} aria-label="Expanded research figure" onClick={e => {if (e.target === e.currentTarget) dialog.current?.close();}}><button type="button" className={styles.close} onClick={() => dialog.current?.close()}>Close ×</button><img src={figure.src} alt={figure.caption}/><p>{figure.caption}</p></dialog>
    </main>
  </Layout>;
}
