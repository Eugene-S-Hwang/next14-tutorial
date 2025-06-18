import Link from "next/link"
import Links from "./links/Links"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>
                Logo
            </Link>

            {/* Brute force */}
            {/* <div>
                <Link href="/">Homepage </Link>
                <Link href="/about">About </Link>
                <Link href="/contact">Contact </Link>
                <Link href="/blog">Blog </Link>
            </div> */}
            <div>
                <Links/>
            </div>
        </div>
    )
}

export default Navbar