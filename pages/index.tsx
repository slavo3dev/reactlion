import Head from "next/head";
import styles from "../styles/Home.module.css";
import React from "react";

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>React Lion</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <h1> React Lion</h1>
            </div>
            <footer className={styles.footer}>
                <a
                    href="https://www.foonomad.com"
                    target="_blank"
                    rel="noopener noreferrer"
                >
          Powered by React Lion 
                </a>
            </footer>
        </div>
    );
}
