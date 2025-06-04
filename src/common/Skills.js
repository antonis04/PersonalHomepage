import { SkillsList, SkillItem, BulletPoint } from "./List";

/**
 * Skills component that renders a list of technical skills
 * Input: list - Array of skill strings to display
 */
export const Skills = ({ list }) => (
  <SkillsList>
    {list.map((skillName, skillIndex) => (
      <SkillItem key={skillIndex}>
        <BulletPoint />
        {skillName}
      </SkillItem>
    ))}
  </SkillsList>
);
