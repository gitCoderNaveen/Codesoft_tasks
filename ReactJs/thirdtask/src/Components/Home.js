import { collection,  deleteDoc,  doc,  getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'

import {db} from '../Firebase/Firebase'

export default function Home() {
    const [postList, setPostList] = useState([])
    const postCollectionRef = collection(db, 'posts')


    useEffect(()=>{
        const getPosts = async ()=>{
            const data = await getDocs(postCollectionRef);
            setPostList(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
        }
        getPosts();
    })

    const deletePost = async(id) =>{
        const postDoc = doc(db, 'posts', id)
        await deleteDoc(postDoc)
    }
  return (
    <div className='homePage'>
        {postList.map((post)=>{
            return <div className='post'>
                <div className='postHeader'>
                    <div className='title'>
                        <h1>{post.title}</h1>
                    </div>
                    <div className='deletePost'>
                        <button onClick={()=>{deletePost(post.id)}}>&#128465;</button>
                    </div>
                </div>
                <div className='postTextContainer'>{post.postText}</div>
                <h3>@{post.author.name}</h3>
            </div>
        })}
    </div>
  )
}
