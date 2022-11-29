import React from 'react'
import styled from 'styled-components'

const SectionHeader = styled.h2`
  color: white;
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
`

const SectionDescription = styled.p`
  color: white;
  font-family: "Montserrat", sans-serif;
`

const SectionContent = styled.section`
  border: 1px solid white;
  margin: 15px;
`
export default function InfoSection (props) {
  const { titleContent, descriptionContent } = props

  return (
    <SectionContent>
      <SectionHeader>{titleContent}</SectionHeader>
      {descriptionContent.map((paragraph, index) => (
        <SectionDescription key={index}>{paragraph}</SectionDescription>
      ))}
    </SectionContent>
  )
}
