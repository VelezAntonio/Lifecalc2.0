import React from 'react'
import { HeroBg, HeroContainer,HeroBtnWraper,ArrowForward,ArrowRight,HeroContent,HeroH1,HeroP } from './HeroElements'
import { useState } from 'react'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover,setHover] = useState(false)

    const onHover = () =>{
        setHover(!hover)
    }
  return (
    <HeroContainer id="home">
        <HeroBg>

        </HeroBg>
        <HeroContent>
            <HeroH1>Howdy!</HeroH1>
            <HeroP>
                Our lifestyle calculator helps you determine how much you need to earn to live the life you want!
            </HeroP>
            <HeroBtnWraper>
                <Button to='singup' onMouseEnter={onHover} onMouseLeave={onHover} primary="true">
                    Get Started {hover ? <ArrowForward/> : <ArrowRight/>}
                </Button>
            </HeroBtnWraper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection

