import { List, ListItem, MarkerPic } from "./List";

export const Skills = ({ list }) => (
  <List>
    {list.map((skill, index) => (
      <ListItem key={index}>
        <MarkerPic />
        {skill}
      </ListItem>
    ))}
  </List>
);
