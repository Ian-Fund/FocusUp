import React from 'react'

export default function InfoSection(props){

  const {titleContent, descriptionContent} = props

  return(
    <section>
      <h2>{titleContent}</h2>
      {descriptionContent.map((paragraph) => <p>{paragraph}</p>)}
    </section>
  )
}