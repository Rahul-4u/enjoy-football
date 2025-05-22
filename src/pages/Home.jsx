import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeCard from '../components/home/HomeCard'
import Experience from '../components/home/Experience'
import ExperienceVideo from '../components/home/ExperienceVideo'
import Sociales from '../components/home/Sociales'

export default function Home() {
  return (
      <div>
          <HomeBanner />
          <HomeCard />
          <Experience />
          <ExperienceVideo />
          <Sociales/>
    </div>
  )
}
