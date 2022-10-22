import Image from "next/image";
import Heading from "../Heading";

import styles from "../../styles/Profile.module.css";

export default function Profile(props) {
  return (
    <div className={styles.profile}>
      <span>
        <Heading>Rajeev Shrestha</Heading>
        <p>
          An aspiring developer and Student.
          <br />I build Web apps and Discord bots
        </p>
      </span>
      <span>
        <Image className={styles.image} src={props.image_url} height={100} width={100} />
      </span>
    </div>
  );
}
