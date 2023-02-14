import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const SingleProductImage = ({image}) => {
    const [imgUrl,setImgUrl]=useState(image[0].url)
    const [imgAlt,setImgAlt]=useState(image[0].name)
  return (
    <Wrapper>
        <div className="img_arry">
         {image.map((img,i)=>{
            return (
                <div key={i} >
                    <figure>
                        <img style={{cursor: 'pointer'}}  src={img.url} alt={img.name} width="100px" onClick={()=>{setImgUrl(img.url); setImgAlt(img.name)}}/>
                    </figure>
                </div>
            )
         })}
        </div>
        <div className="main_img">
             <figure>
             <img src={imgUrl} alt={imgAlt} width="300px"/>
             </figure>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    gap:5px;
`

export default SingleProductImage
