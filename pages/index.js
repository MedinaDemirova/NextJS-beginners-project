import styles from '../styles/Home.module.css';
import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>People's List | Home</title>
      </Head>
      <div >

        <h1 className={styles.title}>Hello world</h1>
        <p className={styles.text}>This is my first next app</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe architecto autem ex deleniti veritatis? Aliquam nisi consectetur repellendus totam porro.</p>
        <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta facere saepe et sit, quibusdam necessitatibus officiis alias eius numquam voluptates facilis possimus odit sapiente distinctio repellat officia. Minima, similique fuga?</p>

        <Link href="/people" ><a className={styles.btn}>People's List</a></Link>

      </div>
    </>
  )
}
