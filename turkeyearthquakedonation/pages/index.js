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
        <title>Help Turkey</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/turkiye1.jpeg" />
      </Head>
      <div className={styles.headerStyle}>
        <div className={styles.upperlinksStyle}>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/donate">Donate</Link></li>
                <li><Link href="https://www.cnn.com/middleeast/live-news/turkey-earthquake-latest-020623/index.html">Learn</Link></li>
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
          <h1>Earthquake in Turkey</h1>
          <p>On February 6th, Turkey woke up with devastating news by two massive earthquakes that affected over 10 cities. Death toll climbed to 7,926 in Turkey as of now and thousands of people are on the streets waiting to be rescued. It is currently snowing in some of these cities and we are in need of any amount of donation to help them survive. <br></br><br></br> As the Turkish Student Association at the University of Michigan, we have collected $5047 to help those who are in need. Please contribute to our fundraiser by clicking <a style={{color: "white"}} href='https://venmo.com/u/TurkishStudentAssociation'>donate now!</a>
  </p>
          
        </div>
        <div className={styles.images}>
          <Image className={styles.card}
           src="/turkiye1.jpeg"
           width={300}
           height={200}
           />
          <Image className={styles.card}
           src="/turkiye2.jpeg"
           width={300}
           height={200}
           />
           <Image className={styles.card}
           src="/turkiye3.jpeg"
           width={300}
           height={200}
           />
           <Image className={styles.card}
           src="/turkiye4.jpeg"
           width={300}
           height={200}
           />
          
        </div>
        <div className={styles.grid}>
          <a
            href="/donate"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Donate <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find ways to help thousans of people who are affected.
            </p>
          </a>

          <a
            href="https://www.cnn.com/middleeast/live-news/turkey-earthquake-latest-020623/index.html"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Learn about what's going on in Turkey right now.
            </p>
          </a>

        </div>
      </main>
    </>
  )
}
