import clsx from 'clsx'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import HomepageFeatures from '@site/src/components/HomepageFeatures'
import Heading from '@theme/Heading'

import styles from './index.module.css'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroLogo}>
          <img src="/img/logo.png" alt="サイトロゴ" />
        </div>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  )
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title="TOP"
      description="まるのポートフォリオ兼個人サイトです。日々の活動や成果物を記録したり、のんびりブログを書きます。"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div>トップページには自分の詳細情報を簡単に書きたい</div>
      </main>
    </Layout>
  )
}
