import Link from "next/link";
import styles from "../../styles/Projects.module.css";

export default function ProjectCard(props) {
  return (
    <Link href={props.homepage || props.html_url}>
      <div className={styles.projectCards}>
        <h2 className={styles.title}>{props.title}</h2>
      </div>
    </Link>
  );
}
