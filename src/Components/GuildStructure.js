import React from 'react'
import { content } from '../media/textConstants'
import InfoSection from './InfoSection'
import styled from 'styled-components'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

const SectionPage = styled.div`
  background: #1d1d1d;
  display: flex;
  justify-content: center;
`
const SectionContentBox = styled.div`
  width: 100%;
  @media (min-width: 1200px) {
    width: 80%;
  }
`

export default function GuildStructure () {
  return (
    <SectionPage>
      <SectionContentBox>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 600: 2, 900: 3 }}>
          <Masonry>{content.guildInfoSections.map(InfoSection)}</Masonry>
        </ResponsiveMasonry>
      </SectionContentBox>
    </SectionPage>
  )
}
