import React from "react";
import {
  attendance,
  changelog,
  expectations,
  intro,
  loot,
  progression,
  schedule,
  trials,
  performance,
  introContent,
  scheduleContent,
} from "../media/textConstants";

export default function GuildStructure() {
  return (
    <div>
      <h2>{intro}</h2>
      <p>{introContent}</p>
      <h2>{schedule}</h2>
      <p>{scheduleContent}</p>
      <h2>{expectations}</h2>
      <h2>{progression}</h2>
      <h2>{performance}</h2>
      <h2>{trials}</h2>
      <h2>{attendance}</h2>
      <h2>{loot}</h2>
      <h2>{changelog}</h2>
    </div>
  );
}
