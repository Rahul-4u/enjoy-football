import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeCard from '../components/home/HomeCard'
import Experience from '../components/home/Experience'
import ExperienceVideo from '../components/home/ExperienceVideo'
import Sociales from '../components/home/Sociales'
import Quierescontactar from '../components/home/Quierescontactar'

export default function Home() {
  return (
      <div>
          <HomeBanner />
          <HomeCard />
          <Experience />
          <ExperienceVideo />
      <Sociales />
      <Quierescontactar/>
    </div>
  )
}
