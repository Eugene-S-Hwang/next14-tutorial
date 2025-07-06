import { getUser } from "@/lib/data";
import styles from "./postUser.module.css";

//Fetch Data with API
// const getData = async (userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {cache:"no-store"}) 

//     if(!res.ok){
//         throw new Error("Something went wrong")
//     }

//     return res.json()
// }


const PostUser = async ({userId}) => {

    // const user = await getData(userId);

    //Fetch Data without API
    const user = await getUser(userId);

    return(
        <div className={styles.container}>
            <span className={styles.title}>Author</span>
            <span className={styles.username}>{user.username}</span>
        </div>
    )
}

export default PostUser