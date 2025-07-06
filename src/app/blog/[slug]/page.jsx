import styles from "./singlePost.module.css";
import Image from "next/image";
import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
import { getPost } from "@/lib/data";

// Fetch Data with API
// const getData = async (slug)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {next:{revalidate: 3600}}) 

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }

const SinglePostPage = async ({params}) => {
    const {slug} = params;

    // const post = await getData(slug);

    //Fetch Data without API
    const post = await getPost(slug);

    return (
        <div className={styles.container}>
            <div className={styles.imgContainer}>
                <Image src="/post.jpg" alt="" fill />
            </div>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>{post?.title}</h1>
                <div className={styles.detail}>
                    <Image className={styles.avatar} src="/avatar.webp" alt="" width={50} height={50}/>
                    
                    {post && <Suspense fallback={<div>Loading...</div>}>
                        <PostUser userId = {post.userId}/>
                    </Suspense>}
                    <div className={styles.detailText}>
                        <span className={styles.detailTitle}>Published</span>
                        <span className={styles.detailValue}>01.01.2024</span>
                    </div>
                </div>
                <div className={styles.content}>
                    {post.body}
                </div>
            </div>
        </div>
    )
}

export default SinglePostPage