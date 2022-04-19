import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import profilePic from '../assets/profile_pic.jpg'
import mlPrepDevice from '../assets/ml-prep.png'
import raidenGamePlay from '../assets/raiden.png'
import smallProfile from '../assets/small_profile.jpg'

export default function Home() {
  return (
    <div>
      {/* Page information */}
      <Head>
        <title>David Harley's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}
      <div className={styles.topnav} >
        <Image className={styles.smallProfile} alt="Profile Image" src={smallProfile} width={40} height={40} />
        <h3 className={styles.navbarName}> David Harley </h3>

        <a href="#projects">Projects</a>
        <a href="#news">Experience</a>
        <a href="#home" >Skills</a>
        <a href="#about" className={styles.active}>About</a>
        <a href="javascript:void(0);" className="icon" onClick="myFunction()">
          <i className="fa fa-bars"></i>
        </a>
      </div>
      <div className={styles.container}>
        <main className={styles.main}>
          <h3 className={styles.subTitle}> Hey There! I&apos;m David </h3>
          <h1 className={styles.title}>
            I develop software and websites.
          </h1>
          <p className={styles.aboutText}> I&apos;m a developer commited to making engaging and polished experiences.  </p>
        </main>

        <div className={styles.section}>
          <h2 className={styles.subTitle}>01. About Me</h2>
          <div className={styles.grid}>
            <p className={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              <br />
              <br />

              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br />
              <br />

              Some Technologies I&apos;ve been working with lately:
              <br />
              <ul className={styles.descriptionText}>
                <li>C#</li>
                <li>Javascript</li>
                <li>TypeScript</li>
              </ul>
              <ul className={styles.descriptionText}>
                <li>Angular</li>
                <li>React</li>
                <li>HTML/CSS</li>

              </ul>
            </p>
            <Image className={styles.profilePicture} src={profilePic} alt="ML Prep Device" width={450} height={450}></Image>
          </div>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subTitle}>02. Skills</h2>
          <p className={styles.fullText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className={styles.section}>
          <h2 className={styles.subTitle}>03. Experience</h2>
          <p className={styles.fullText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>

        <div className={styles.section} id="projects">
          <h2 className={styles.subTitle}>04. Projects</h2>
          <div className={styles.grid}>
            <Image className={styles.profilePicture} src={mlPrepDevice} alt="ML Prep Device" width={360} height={225}></Image>
            <p className={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <p className={styles.descriptionText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Image className={styles.profilePicture} src={raidenGamePlay} alt="ML Prep Device" width={442} height={249}></Image>

          </div>
        </div>

        {/* <div className={styles.grid}>
            <a href="/about" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div> */}

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Add some social links...

          </a>
        </footer>
      </div>
    </div>
  )
}
