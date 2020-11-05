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
        Artificial Intelligence helps enhance smart contracts. Users are able to collect more useful information from the blockchain through AI, where normally, a number of blockchain platforms currently focus only on oracle prices and cryptocurrencies. Not only that, other systems can exploit the Oraichain system by sending requests, and Oraichain will return a response that will be stored on-chain. Hence, that result is reliable and can be used as proofs in the future.
      </>
    ),
  },
  {
    title: <>AI Marketplace </>,
    imageUrl: "img/integrated-marketing.svg",
    description: (
      <>
        An ecosystem for those that would want to experience Artificial Intelligence from a blockchain system, which is Oraichain. For providers, they can provide their AI services to earn ORAI token rewards, where they do not need to rely on any third parties to host their models. Small companies or individuals can consider this as a chance to compete with bigger ones in the AI field while getting more users involved. Some AI services will be supplied initially by the development team as a foundation for others to join in.
      </>
    ),
  },
  {
    title: <>Test Cases</>,
    imageUrl: "img/design-development.svg",
    description: (
      <>
        An unique feature of Oraichain is Test Case. Indeed, since we provide an AI ecosystem on a blockchain network, it is crucial to provide test cases that can verify the correctness or integrity of the AI services on the system. A third party can join as a Test Case provider to examine if a specific AI model is qualified to charge user fees or not. Moreover, users can also provide their expected outputs from the model to check if the results are similar to what they initially evaluated. This will encourage the AI providers to work hard and supply quality services to be able to earn rewards from the users.
      </>
    ),
  },
  {
    title: <>Staking & Earning </>,
    imageUrl: "img/digital-strategy.svg",
    description: (
      <>
        Users can become delegators, where they put tokens into a specific validator to increase its power within the blockchain network. From there, that validator can have more chances of executing requests, which will earn a specific amount of commission while the rest goes back to the delegators. The delegators, however, have to monitor their delegated validators well, as a malicious validator may try to break the system's rule to earn more. If one gets caught, all the staked tokens of the delegators will be slashed. In other words, there's a tight coupling between two entities, and they should both
      </>
    ),
  },
  {
    title: <>ORAI DAO</>,
    imageUrl: "img/saving-strategy.svg",
    description: (
      <>
        You are the governor of the product serving you. Oraichain is of, for,
        and by Community. By owning ORAI tokens, you can take part in to govern the development and future plan for the Oraichain system. Because this is a decentralized network, the project development team only creates the foundation, while you can build a bright future for it using your own tokens.
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
              to={useBaseUrl("docs/whitepaper/introduction")}
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
