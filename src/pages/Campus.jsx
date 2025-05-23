import React from 'react'
import CampusBanner from '../components/campus/CampusBanner'
import Campamentos from '../components/campus/Campamentos'
import OurCamps from '../components/campus/OurCamps'
import SemanaSanta from '../components/campus/SemanaSanta'
import Internacionales from '../components/campus/Internacionales'
import Verano from '../components/campus/Verano'
import CampusForm from '../components/campus/CampusForm'

export default function Campus() {
  return (
    <div>
      <CampusBanner />
      <Campamentos />
      <OurCamps />
      <div className="bg-gradient-to-r from-purple-700 to-red-700">
        {" "}
        <SemanaSanta />
        <Verano/>
        <Internacionales />
      </div>
      <CampusForm/>
    </div>
  );
}
