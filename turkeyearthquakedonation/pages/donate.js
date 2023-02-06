import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Donations for Earthquake in Turkey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turkiye1" />
      </Head>
      <div className={styles.headerStyle}>
        <div className={styles.upperlinksStyle}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="/learn">Learn</Link></li>
            </ul> 
        </div>
     </div>
      <main className={styles.main}>
        
        <div className={styles.description}>
          <p>
          <Link href="https://venmo.com/u/TurkishStudentAssociation">Donate now</Link>
          </p>
        </div>

        <div className={styles.center}>
          <h1>A list of trustwhorthy organizations for donations</h1>
          
        </div>
        <div className={styles.grid}>
        <a
            href="https://venmo.com/u/TurkishStudentAssociation"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            Turkish Student Association
            </h2>
            <p className={inter.className}>
              As TSA at the University of Michigan, we are accepting donations on venmo as the fastest option to donate the money to the most trustwhorthy organizations.
            </p>
          </a>
          <a
            href="https://www.akut.org.tr/en/donation"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            AKUT
            </h2>
            <p className={inter.className}>
              A voluntary, non-governmental organization involved in searching, assisting, and rescuing the victims affected. They are fully transparent about the donations they receive and their spending. Accepts EUR and USD
            </p>
          </a>
          <a
            href="https://bagis.ahbap.org/bagis"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            AHBAP
            </h2>
            <p className={inter.className}>
              With 200 philanthropists and 30,000 volunteers, they are a  local voluntary network. Accepts credit card in Lira.
            </p>
          </a>
          <a
            href="https://twitter.com/TurkishEmbassy/status/1622614360190320640"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            Turkish Embassy
            </h2>
            <p className={inter.className}>
              The Turkish Embassy is accepting donations to their bank account. 
            </p>
          </a>
          <a
            href="https://afad.gov.tr/depremkampanyasi2"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
            AFAD
            </h2>
            <p className={inter.className}>
              Turkey's official disaster and emergency management authority. Accepts EUR and USD
            </p>
          </a>

        </div>
      </main>
    </>
  )
}
