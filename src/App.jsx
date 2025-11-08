import React from 'react'
import SectionContainer from './components/SectionContainer'
import SectionHeader from './components/SectionHeader'
import ActionButtons from './components/ActionButtons'
import ImageCarousel from './components/ImageCarousel'

function App() {
  return (
    <SectionContainer>
      <SectionHeader />
      <ActionButtons />
      <ImageCarousel />
    </SectionContainer>
  )
}

export default App
