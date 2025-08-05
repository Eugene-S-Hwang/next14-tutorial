//TEMPORARY DATA
// const users = [
//     {id:1, name: 'John'},
//     {id:2, name: 'Jane'}
// ]

// const posts = [
//     {id: 1, title: 'post 1', body: ".....", userId: 1},
//     {id: 2, title: 'post 2', body: ".....", userId: 1},
//     {id: 3, title: 'post 3', body: ".....", userId: 2},
//     {id: 4, title: 'post 4', body: ".....", userId: 2},
// ]

// export const getPosts = async ()=>{
//     return posts;
// }

// export const getPost = async (id)=>{
//     return posts.find((post) => post.id === parseInt(id));
// }

// export const getUser = async (id)=>{
//     return users.find((user) => user.id === parseInt(id));
// }


// MONGODB DATA
import {Post, User} from "./models"
import { connectToDB } from "./utils"
import {unstable_noStore as noStore} from "next/cache"

export const getPosts = async ()=>{
    try{
        connectToDB();
        const posts = await Post.find()
        return posts
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch posts!")
    }
}

export const getPost = async (slug)=>{
    // noStore(); for not caching data from API
    try{
        connectToDB();
        const post = await Post.findOne({slug});
        return post;
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch post!")
    }
}

export const getUser = async (id)=>{
    try{
        connectToDB();
        const user = await User.findById(id);
        return user;
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch user!")
    }
}

export const getUsers = async ()=>{
    try{
        connectToDB();
        const users = await User.find();
        return users;
    }
    catch(err){
        console.log(err);
        throw new Error("Failed to fetch users!")
    }
}