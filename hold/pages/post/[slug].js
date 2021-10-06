import imgUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react'
import Image from 'next/image'
import {useState, useEffect} from 'react'



export const Post = ({title, body, image}) => {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(() => {
    const imageBuilder = imgUrlBuilder({
      projectId: 'ynla6ggn',
      dataset: 'production'
    })
    
    setImgUrl(imageBuilder.image(image))
  }, [image])
  
  return(
    <>
    <h1>{title}</h1>
    <img src={imgUrl} />
    <BlockContent blocks={body} />
    </>
    )
}

export const getServerSideProps = async pageContext => {
  const pageSlug = pageContext.query.slug;
  
  if(!pageSlug){
    return{
      notFound: true
    }
  }
  const query = encodeURIComponent(`*[_type == "post" && slug.current == "${pageSlug}"]`);
  const url =  `https://ynla6ggn.api.sanity.io/v1/data/query/production?query=${query}`
  const result = await fetch(url).then(res => res.json())
  const post = result.result[0]
  
  if(!post){
    return{
      notFound: true
    }
  } else {
    return {
      props: {
        title: post.title,
        body: post.body,
        image: post.mainImage
      }
    }
  }
}

export default Post 