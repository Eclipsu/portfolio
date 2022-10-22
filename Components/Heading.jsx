import styles from "../styles/Heading.module.css";
export default function Heading(props) {
  return <h1 className={styles.heading}>{props.children}</h1>;
}
