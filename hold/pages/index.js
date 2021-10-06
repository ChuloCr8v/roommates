import Head from 'next/head'
import Image from 'next/image'
import {useState, useEffect} from 'react'
import imgUrlBuilder from '@sanity/image-url'
import { useRouter } from 'next/router'

export default function Home({posts}) {
  
  const router = useRouter()
  const [mappedPosts, setMappedPosts] = useState([])
  useEffect(() => {
    if(posts.length){
      const imgBuilder = imgUrlBuilder({
      projectId: 'ynla6ggn',
      dataset: 'production'
      })
      
      setMappedPosts(
        posts.map(p => {
          return {
         ...p, mainImage: imgBuilder.image(p.mainImage).width(500).height(300)
          } 
        })
        )
    } else {
      setMappedPosts([])
    }
  },[posts])
  
  
  return (
    <div class="md:flex justify-around items-center p-10" >
      {mappedPosts.map((p, index) => (
      <div key={index} onClick ={() => router.push( `/post/${p.slug.current}`)} 
      class=" my-20 relative shadow-xl "
      >
        <h1 
        class="absolute bottom-0 left-100 bg-gray-600 bg-opacity-50 w-full text-center text-white text-md bold" 
        > {p.title} </h1>
        <img src={p.mainImage} class=" rounded hover:scale-110  " />
        </div>
     ) ) }
    </div>
  )
  const router = useRouter()
  const [mappedPosts, setMappedPosts] = useState([])
  useEffect(() => {
    if(posts.length){
      const imgBuilder = imgUrlBuilder({
      projectId: 'ynla6ggn',
      dataset: 'production'
      })
      
      setMappedPosts(
        posts.map(p => {
          return {
         ...p, mainImage: imgBuilder.image(p.mainImage).width(500).height(300)
          } 
        })
        )
    } else {
      setMappedPosts([])
    }
  },[posts])
  
  
  return (
    <div class="md:flex justify-around items-center p-10" >
      {mappedPosts.map((p, index) => (
      <div key={index} onClick ={() => router.push( `/post/${p.slug.current}`)} 
      class=" my-20 relative shadow-xl "
      >
        <h1 
        class="absolute bottom-0 left-100 bg-gray-600 bg-opacity-50 w-full text-center text-white text-md bold" 
        > {p.title} </h1>
        <img src={p.mainImage} class=" rounded hover:scale-110  " />
        </div>
     ) ) }
    </div>
  )
}

export const getServerSideProps = async pageContext => {
  const query = encodeURIComponent( `*[_type == "post"] `)
  const url =  `https://ynla6ggn.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then(res => res.json())
  
  if(!result.result || !result.result.length){
    return{
      props: {
        posts: [], 
      }
    }
  } else {
    return {
      props: {
        posts: result.result
      }
    }
  } 
} 