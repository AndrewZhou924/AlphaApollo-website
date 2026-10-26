import React, {useRef, useState} from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import 'katex/dist/katex.min.css';
import type {ProjectContent} from '../../data/celestial';
import styles from './styles.module.css';

function CopyButton({text, label = 'Copy'}: {text: string; label?: string}) {
  const [status, setStatus] = useState('');
  async function copy() {
    try { await navigator.clipboard.writeText(text); setStatus('Copied'); }
    catch { setStatus('Copy unavailable — select the text below.'); }
  }
  return <div className={styles.copyControl}><button type="button" onClick={copy}>{label}</button><span role="status">{status}</span></div>;
}

export default function Celestial({content: c}: {content: ProjectContent}) {
  const [active, setActive] = useState(0);
  const [example, setExample] = useState(0);
  const [demo, setDemo] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [figure, setFigure] = useState({src: c.overview, caption: c.overviewCaption});
  const dialog = useRef<HTMLDialogElement>(null);
  const moon = c.id === 'diana';
  const stage = c.stages[active];
  function enlarge(src: string, caption: string) {
    setFigure({src, caption}); dialog.current?.showModal();
  }
  return <Layout title={`${c.name} · Website preview`} description={c.subtitle} noFooter>
    <Head><body className="celestial-preview"/><meta name="robots" content="noindex, nofollow"/></Head>
    <main className={styles.site} data-project={c.id}>
      <a className={styles.skip} href="#overview">Skip to content</a>
      <div className={styles.preview}><span>Website preview</span><div><a href="/solar-preview" aria-current={!moon ? 'page' : undefined}>Apollo</a><a href="/lunar-preview" aria-current={moon ? 'page' : undefined}>Diana</a><a href="/">Current website</a></div></div>
      <header className={styles.header}>
        <a href={moon ? '/lunar-preview' : '/solar-preview'} className={styles.wordmark}>{c.name}</a>
        <nav aria-label="Page sections"><a href="#framework">Overview</a><a href="#explore">Framework</a>{c.demos && <a href="#demos">Demos</a>}<a href="#start">Quick Start</a><a href={c.docs}>Docs</a></nav>
        <a className={styles.headerPaper} href={c.paper}>Paper</a>
      </header>

      <section className={styles.hero} id="overview">
        <div className={styles.heroCopy}>
          <h1>{c.name}</h1>
          <h2>{c.subtitle}</h2>
          <p className={styles.deck}>{c.deck}</p>
          <div className={styles.actions}><a className={styles.primary} href={c.paper}>Paper</a><a href={c.code}>GitHub</a><a href={c.docs}>Documentation</a></div>
          <p className={styles.paperNote}>{c.paperNote}</p>
        </div>
      </section>

      <section className={styles.section} id="framework">
        <div className={styles.sectionHeading}><h2>{c.frameworkTitle}</h2></div>
        <figure className={styles.overviewFigure}><button type="button" onClick={() => enlarge(c.overview, c.overviewCaption)} aria-label="Enlarge framework figure"><img src={c.overview} alt={c.overviewCaption} loading="lazy"/><span className={styles.expand}>Enlarge figure</span></button><figcaption>{c.overviewCaption}</figcaption></figure>
        <p className={styles.intro}>{c.intro}</p>
      </section>

      <section className={`${styles.section} ${styles.explore}`} id="explore">
        <div className={styles.sectionHeading}><h2>{c.exploreTitle}</h2></div>
        <div className={styles.explorer}>
          <div className={styles.stageList} role="group" aria-label="Choose a system component">{c.stages.map((s, i) => <button type="button" key={s.title} aria-pressed={i === active} onClick={() => setActive(i)}><span>0{i + 1}</span><strong>{s.short}</strong><b aria-hidden="true">{i === active ? '−' : '+'}</b></button>)}<p>Select a component to explore its workflow and original figure.</p></div>
          <div className={styles.stagePanel} aria-live="polite"><h3>{stage.title}</h3><p>{stage.description}</p><ol className={styles.flow}>{stage.flow.map((step, i) => <li key={step}><span>{i + 1}</span>{step}</li>)}</ol><button className={styles.stageFigure} type="button" onClick={() => enlarge(stage.image, stage.caption)} aria-label={`Enlarge ${stage.short} figure`}><img src={stage.image} alt={stage.caption} loading="lazy"/><span className={styles.expand}>Enlarge figure</span></button><p className={styles.caption}>{stage.caption}</p><a className={styles.textLink} href={stage.link}>Component documentation</a></div>
        </div>
      </section>

      {c.demos && <section className={`${styles.section} ${styles.demos}`} id="demos">
        <div className={styles.sectionHeading}><h2>Agentic reasoning in practice</h2></div>
        <p className={styles.demoIntro}>Three questions and their tool-assisted follow-ups, with recordings from the original AlphaApollo website.</p>
        <div className={styles.demoChoices} role="group" aria-label="Choose a recorded demo">{c.demos.map((item, i) => <button key={item.label} type="button" aria-pressed={demo === i} onClick={() => {setDemo(i); setPlaying(false);}}>{item.label}</button>)}</div>
        <article className={styles.demoPanel}>
          <h3>{c.demos[demo].label}</h3>
          <ReactMarkdown remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]}>{c.demos[demo].text}</ReactMarkdown>
          <button className={styles.playButton} type="button" onClick={() => setPlaying(!playing)}>{playing ? 'Stop recording' : 'Play recording'}</button>
          {playing && <figure className={styles.demoRecording}><img src={c.demos[demo].gif} alt={`${c.demos[demo].label} — original AlphaApollo recording`}/><figcaption>Recorded demonstration</figcaption></figure>}
        </article>
      </section>}

      <section className={`${styles.section} ${styles.start}`} id="start">
        <div className={styles.sectionHeading}><h2>{c.startTitle}</h2></div>
        <div className={styles.startGrid}><div><p>{c.startDescription}</p><a className={styles.textLink} href={c.startDocs}>Installation guide</a><details className={styles.setup}><summary>Installation & prerequisites</summary>{c.setup.map(item => <div key={item.title}><h3>{item.title}</h3><pre><code>{item.code}</code></pre><CopyButton text={item.code} label={`Copy ${item.title.toLowerCase()}`}/></div>)}</details></div>
          <div className={styles.codePanel}><div className={styles.codeChoices} role="group" aria-label="Choose a code example">{c.examples.map((e, i) => <button type="button" key={e.title} aria-pressed={i === example} onClick={() => setExample(i)}>{e.title}</button>)}</div><div className={styles.codeMeta}><span>{c.examples[example].language}</span><CopyButton key={example} text={c.examples[example].code} label="Copy code"/></div><pre><code>{c.examples[example].code}</code></pre></div></div>
      </section>

      <section className={`${styles.section} ${styles.reading}`} id="paper">
        <div><h2>{c.researchTitle}</h2><p>{c.researchDescription}</p><a className={styles.primary} href={c.paper}>Paper</a></div>
        <div className={styles.paperCard}><span className={styles.smallLabel}>{c.paperNote}</span><h3>{c.name}: {c.subtitle}</h3><details><summary>Authors</summary><p>{c.authors}</p></details><details><summary>Cite this work</summary><CopyButton text={c.citation} label="Copy BibTeX"/><pre><code>{c.citation}</code></pre></details></div>
      </section>

      <footer className={styles.footer}><div className={styles.footerPair}><strong>{c.name}</strong><a href={moon ? '/solar-preview' : '/lunar-preview'}>{moon ? 'AlphaApollo' : 'AlphaDiana'}</a></div><p>{c.relatedDescription}</p><div className={styles.footerLinks}><a href={c.code}>GitHub</a><a href={c.docs}>Documentation</a><a href={c.paper}>Paper</a><a href="#overview">Back to top</a></div>{!moon && <p className={styles.contact}>For technical issues, please submit an issue on <a href="https://github.com/tmlr-group/AlphaApollo/issues">GitHub</a>. For questions and discussions, please contact Prof. Bo Han (<a href="mailto:bhanml@comp.hkbu.edu.hk">bhanml@comp.hkbu.edu.hk</a>) or Zhanke Zhou (<a href="mailto:cszkzhou@comp.hkbu.edu.hk">cszkzhou@comp.hkbu.edu.hk</a>).</p>}{!moon && <small>Copyright © {new Date().getFullYear()} AlphaApollo. Built with Docusaurus. All rights reserved.</small>}</footer>

      <dialog ref={dialog} className={styles.dialog} aria-label="Expanded research figure" onClick={e => {if (e.target === e.currentTarget) dialog.current?.close();}}><button type="button" className={styles.close} onClick={() => dialog.current?.close()}>Close ×</button><img src={figure.src} alt={figure.caption}/><p>{figure.caption}</p></dialog>
    </main>
  </Layout>;
}
