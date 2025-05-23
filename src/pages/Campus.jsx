import React from 'react'
import CampusBanner from '../components/campus/CampusBanner'
import Campamentos from '../components/campus/Campamentos'
import OurCamps from '../components/campus/OurCamps'
import SemanaSanta from '../components/campus/SemanaSanta'

export default function Campus() {
  return (
      <div>
          <CampusBanner />
      <Campamentos />
      <OurCamps />
      <SemanaSanta/>
    </div>
  )
}
