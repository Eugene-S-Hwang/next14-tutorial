import styles from "./singlePost.module.css"
import Image from "next/image"

const SinglePostPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}></h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="/avatar.webp" alt="" width={50} height={50}/>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Author</span>
                        <span className={styles.detailValue}>Tery Jeferson</span>
                    </div>
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    BALBHLAHBLH LH BLHAB LH B
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage