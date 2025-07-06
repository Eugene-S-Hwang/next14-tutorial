import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
import { getPosts } from "@/lib/data"
import Image from "next/image"

//Fetch Data with API
// const getData = async ()=>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/posts", {cache:"no-store"}) //for data constantly changing
//     const res2 = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate: 3600}}) //refresh data every 3600 secs

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }

const BlogPage = async () => {

    // const posts = await getData()

    //Fetch Data without API
    const posts = await getPosts();

    return (
        <div className={styles.container}>
            {posts.map((post) => (
                <div className={styles.post} key={post.id}>
                    <PostCard post={post}/>
                </div>
            ))}
            
            {/* <div className={styles.post}>
                <PostCard/>
            </div>
            <div className={styles.post}>
                <PostCard/>
            </div>
            <div className={styles.post}>
                <PostCard/> 
            </div> */}
        </div>
    )
}

export default BlogPage