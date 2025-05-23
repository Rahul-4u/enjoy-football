import React from 'react'
import CampusBanner from '../components/campus/CampusBanner'
import Campamentos from '../components/campus/Campamentos'
import OurCamps from '../components/campus/OurCamps'
import SemanaSanta from '../components/campus/SemanaSanta'
import Internacionales from '../components/campus/Internacionales'

export default function Campus() {
  return (
    <div>
      <CampusBanner />
      <Campamentos />
      <OurCamps />
      <div className="bg-gradient-to-r from-purple-700 to-red-700">
        {" "}
        <SemanaSanta />
        <Internacionales />
      </div>
    </div>
  );
}
