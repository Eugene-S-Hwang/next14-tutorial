import Image from "next/image"
import styles from "./about.module.css"

const AboutPage = () => {
    return (
        <div className={styles.container}> 
            {/* <img src="/about.png"></img> Could have performance issues */}
            <div className={styles.imgContainer}>
                {/* <Image src="/about.png" alt="" fill/> */}
                <Image src="https://images.pexels.com/photos/8597551/pexels-photo-8597551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" fill/>
            </div>
            <div className={styles.boxes}>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Years of experience</p>
                </div>
                <div className={styles.box}>
                    <h1>10 K+</h1>
                    <p>Years of experience</p>
                </div>
            </div>
        </div>
    )
}

export default AboutPage