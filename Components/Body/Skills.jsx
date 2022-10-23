import Heading from "../Heading";
import SkillPoints from "../Misc/SkillPoints";

import styles from "../../styles/Skills.module.css";

export default function Profile(props) {
  return (
    <div className={styles.skills}>
      <Heading>Skills</Heading>
      <SkillPoints skill="Javascript" description="as my main language" />
      <SkillPoints skill="MERN" description="as the Stack i work with" />
      <SkillPoints skill="Express" description="as my APT framework" />
      <SkillPoints skill="Mysql / MongoDB" description="as my database" />
    </div>
  );
}
