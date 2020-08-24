import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>AI marketplace    </>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
       Search, trial, and select from an ever-growing library of AI algorithms 
       created by a community of service providers. Integrate AI services into your own applications.
      </>
    ),
  },
  {
    title: <>AI Publisher    </>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
       Our publishing infrastructure provides both a central hub for creating, 
       editing, and managing your AI services and the tools to launch those services to a global market.
      </>
    ),
  },
  {
    title: <>ORAI Staking    </>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
       Earn more while holding ORAI tokens by vesting them in 30-day staking sessions.
        By staking ORAI tokens, you support the operations of our blockchain network and in doing so you will be rewarded with more ORAI tokens for your contributions.
      </>
    ),
  },
  {
    title: <>Request for AI </>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      The Request for AI portal (RFAI) : A community crowdsource portal allowing anyone to make project requests for,
       and offer to fund, new AI services that are currently not available on the market.
      </>
    ),
  },
  {
    title: <>Oracle AI    </>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
      </>
    ),
  },
  {
    title: <>ORAI Defi</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
      Lorem ipsum dolor sit amet, pretium pretium tempor.Lorem ipsum
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
