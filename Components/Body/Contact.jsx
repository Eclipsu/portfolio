import Heading from "../Heading";
import Link from "next/link";
import Discord from "../Icons/Discord";
import Facebook from "../Icons/Facebook";
import Github from "../Icons/Github";

import styles from "../../styles/Contact.module.css";

const copyDiscord = () => {
  navigator.clipboard.writeText("Eclispu#7925");
};

export default function Contact() {
  return (
    <div className={styles.contactContainer}>
      <Heading>Get in touch</Heading>
      <ul className={styles.iconsContainer}>
        <li className={styles.icons}>
          <Link href={"#"}>
            <Discord onClick={copyDiscord} />
          </Link>
        </li>
        <li className={styles.icons}>
          <Link href={"https://www.facebook.com/profile.php?id=100080941161211"}>
            <Facebook />
          </Link>
        </li>
        <li className={styles.icons}>
          <Link href={"https://github.com/Eclipsu"}>
            <Github />
          </Link>
        </li>
      </ul>
    </div>
  );
}
