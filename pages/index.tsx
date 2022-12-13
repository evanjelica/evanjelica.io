import Head from 'next/head'
import Image from 'next/image'
import styles from '../src/styles/Home.module.css'

import Title from '../src/components/Title'
import ScrollDown from '../src/components/ScrollDown'
import ProjectGrid from '../src/components/ProjectGrid'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anjelica Avorque</title>
        <meta name="description" content="Anjelica's personal site!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title/>
        <ScrollDown/>
        <h1>Projects</h1>
        <h3>Here’s some of my favorite personal projects. Hope you like them as much as I do :)</h3>
        <ProjectGrid/>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
