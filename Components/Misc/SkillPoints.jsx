import Arrow from "../Icons/Arrow";

import styles from "../../styles/Skills.module.css";

export default function Profile(props) {
  return (
    <p className={styles.skill}>
      <Arrow className={styles.arrow} /> <span className={styles.title}>{props.skill}</span>&nbsp;{props.description}
    </p>
  );
}
