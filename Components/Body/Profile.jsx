import Image from "next/image";
import Heading from "../Heading";

import styles from "../../styles/Profile.module.css";

export default function Profile(props) {
  return (
    <div className={styles.profile}>
      <span>
        <Heading>Rajeev</Heading>
        <p>An aspiring Developer and Student.</p>
        <p>I build Web apps and Discord bots</p>
      </span>
      <span className={styles.image}>
        <Image className={styles.image} src={props.image_url} height={100} width={100} />
      </span>
    </div>
  );
}
