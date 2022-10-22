import Arrow from "../Icons/Arrow";

import styles from "../../styles/Skills.module.css";

export default function Profile(props) {
  return (
    <p className={styles.skill}>
      <Arrow /> <span>{props.skill} </span>&nbsp;{props.description}
    </p>
  );
}
