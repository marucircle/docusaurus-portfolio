import clsx from 'clsx'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'

import styles from './index.module.css'
import { Profile } from '../components/Top/Profile'

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
        <Profile />
      </main>
    </Layout>
  )
}
