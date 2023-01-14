import Image from "next/image"
import styles from "../styles/Home.module.scss"
import Link from "next/link"

export default function Footer (){
    return(
        <footer className={styles.footer}>
            <Link
                href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
            >
                Powered by{' '}
                <span className={styles.logo}>

          </span>
            </Link>
        </footer>
    )
}
