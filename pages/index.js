import Head from 'next/head'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import DeployedServerDashboard from '../components/DeployedServerDashboard'
import WriteCodeDashboard from '../components/WriteCodeDashboard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { API, CODE_SAMPLE } from '../utils/constants'

export default function Home() {
  const [code, setCode] = useState('loading...')
  const [isLoading, setIsLoading] = useState(false)
  const [url, setUrl] = useState('')

  const handleClick = async () => {
    setIsLoading(true)
    const response = await fetch(API)
    const data = await response.json();
    setUrl(data.url)
    setIsLoading(false)
  }

  useEffect(() => {
    async function loadExampleCode() {
      const file = await fetch(CODE_SAMPLE)
      setCode(await file.text())
    }
    loadExampleCode();
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Sockets Miracle</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header />

        {
          url && !isLoading && <DeployedServerDashboard url={url} />
        }

        {
          isLoading && <img src="/loading.gif" />
        }

        {
          !url && !isLoading &&
            <WriteCodeDashboard
              code={code}
              setCode={setCode}
              handleClick={handleClick} />
        }

      </main>

      <Footer />

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
