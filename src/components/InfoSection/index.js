import React from 'react'

import { Button } from '../ButtonElement'
import {InfoContainer, InfoWrapper, InfoRow,Column1,Column2,TextWrapper,TopLine,Heading,Subtitle,BtnWrap,ImgWrap,Img} from '../InfoSection/InfoElements'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headLine,darkText,description,buttonLabel,img,alt}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                    <TextWrapper>
                        <TopLine>{topLine}</TopLine>
                        <Heading lightText={lightText}>{headLine}</Heading>
                        <Subtitle darkText={darkText}>{description}</Subtitle>
                        <BtnWrap>
                            <Button to="home" dark ={false} smooth={true} duration ={500} spy={true} exact="true"  offset={-80} primary={true}>{buttonLabel}</Button>
                        </BtnWrap>
                    </TextWrapper>
                </Column1>
                <Column2>
                    <ImgWrap>
                    <Img src={img} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection