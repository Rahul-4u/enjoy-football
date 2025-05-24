import React from 'react'
import HomeBanner from '../components/home/HomeBanner'
import HomeCard from '../components/home/HomeCard'
import Experience from '../components/home/Experience'
import ExperienceVideo from '../components/home/ExperienceVideo'
import Sociales from '../components/home/Sociales'
import Quierescontactar from '../components/home/Quierescontactar'
import Entidades from '../components/home/Entidades'
import ActivitySummary from '../components/home/ActivitySummary'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <HomeBanner />
      <HomeCard />
      <Experience />
      <ExperienceVideo />
      <Sociales />
      <ActivitySummary />
      <Quierescontactar />
      <Entidades />
    </div>
  );
}
