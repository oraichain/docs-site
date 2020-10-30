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
    title: <>AI Marketplace </>,
    imageUrl: "img/integrated-marketing.svg",
    description: (
      <>
        Have access to, look up, and choose an ever-increasing AI algorithms and models from
        different providers around the world. Develop your applications along with the
        integration of AI services to increase your application functionalities as well as values.
      </>
    ),
  },
  {
    title: <>AI Provider </>,
    imageUrl: "img/design-development.svg",
    description: (
      <>
        AI developers, individuals or companies, can have a chance to publish, edit, and manage their work
        and earn rewards from the users on a global scale. Hence, you can improve your models even more,
        collect data and continue to provide exceptional AI services.
      </>
    ),
  },
  {
    title: <>Staking & Earning</>,
    imageUrl: "img/digital-strategy.svg",
    description: (
      <>
        Staking means earning. By staking your ORAI tokens into one or more validators,
        you will have a chance to participate in the system as a governor while earning more.
        Moreover, by doing so, your contributions also have a positive impact on our operations of the network.
        It is a win-win for all sides.
      </>
    ),
  },
  {
    title: <>Users & AI requests</>,
    imageUrl: "img/digital-marketing.svg",
    description: (
      <>
        Users are able to make different requests to AI services that are not easy to find elsewhere,
        as the service providers may not have enough resources to provide a stand-alone AI service application.
        If the services are great, sending funds to these services can be worth considering to allow them grow
        more and more.
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
