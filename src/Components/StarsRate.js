import React from 'react'
import styled from 'styled-components'
import {BsStar, BsStarFill, BsStarHalf} from "react-icons/bs"
const StarsRate = ({ stars }) => {
    const star = parseInt(stars)
    let array = []
    let HFarray=[]
    let UFarray = []
    if (star === 0 || star === 1 || star === 2 || star === 3 || star === 4 || star === 5) {
        for (let index = 0; index < star; index++) {
            array[index] = 1;

        }
        console.log(array)
        if (array.length < 5) {
            const num = 5 - array.length
            for (let index = 0; index < num; index++) {
                UFarray[index] = 1;

            }
        }
    } else {
        console.log(typeof star)
        const Adj = Math.floor(star)
        for (let index = 0; index < Adj; index++) {
            array[index] = 1;

        }
        HFarray[0]=1
        if (array.length < 4) {
            const num = 5 - array.length-1
            for (let index = 0; index < num; index++) {
                UFarray[index] = 1;

            }
        }
    }
    return (
        <Wrapper>
           {array?.map((item,i)=>{
            return <BsStarFill key={i}/>
           })}
           {HFarray?.map((item,i)=>{
            return <BsStarHalf key={i}/>
           })}
           {UFarray?.map((item,i)=>{
            return <BsStar key={i}/>
           })}
        </Wrapper>
    )
}

const Wrapper = styled.div`

`
export default StarsRate
