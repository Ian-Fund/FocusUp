import React from "react";
import {content} from "../media/textConstants"
import InfoSection from "./InfoSection";

export default function GuildStructure() {
  return(
    <div>
      {content.guildInfoSections.map(InfoSection)}
    </div>
  )
}
