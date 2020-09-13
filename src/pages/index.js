import React from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Oracle AI</>,
    imageUrl: "img/growth-strategy.svg",
    description: (
      <>
        Oraichain enables smart contracts to securely access external AI APIs.
        Artificial Intelligence helps enhance smart contracts.
      </>
    ),
  },
  {
    title: <>AI marketplace </>,
    imageUrl: "img/integrated-marketing.svg",
    description: (
      <>
        Search, trial, and select from an ever-growing library of AI algorithms
        created by a community of service providers. Integrate AI services into
        your own applications (both Dapps and regular apps).
      </>
    ),
  },
  {
    title: <>AI Publisher </>,
    imageUrl: "img/design-development.svg",
    description: (
      <>
        Our publishing infrastructure provides both a central hub for creating,
        editing, and managing your AI services and the tools to launch those
        services to a global market.
      </>
    ),
  },
  {
    title: <>ORAI Staking </>,
    imageUrl: "img/digital-strategy.svg",
    description: (
      <>
        Earn more while holding ORAI tokens by vesting them in 30-day staking
        sessions. By staking ORAI tokens, you support the operations of our
        blockchain network and in doing so you will be rewarded with more ORAI
        tokens for your contributions.
      </>
    ),
  },
  {
    title: <>Request for AI </>,
    imageUrl: "img/digital-marketing.svg",
    description: (
      <>
        The Request for AI portal (RFAI): A community crowdsource portal
        allowing anyone to make requests for, and offer to fund, new AI services
        that are currently not available on the market.
      </>
    ),
  },
  {
    title: <>ORAI DAO</>,
    imageUrl: "img/saving-strategy.svg",
    description: (
      <>
        You are the governor of the product serving you. Oraichain is of, for,
        and by Community.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="">
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
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Homepage ${siteConfig.title}`}
      description="Oraichain is a data oracle platform that aggregates and connects
      Artificial Intelligence APIs to smart contracts and regular applications.
      The world’s first oracle AI has arrived.
      
      "
    >
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/")}
            >
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
