import Link from "next/link";
import navStyles from "../../styles/Navbar.module.css";
import Github from "../Icons/Github.js";

export default function Navbar() {
  return (
    <div className={navStyles.navbar}>
      <ul className={navStyles.nav}>
        <li>
          <Link href={"#"}>Home</Link>
        </li>
        <li>
          <Link href={"#skills"}>Skill</Link>
        </li>
        <li>
          <Link href={"#project"}>Projects</Link>
        </li>
      </ul>
      <ul>
        <li className={navStyles.github}>
          <Link href={"https://github.com/Eclipsu/portfolio"}>{<Github />}</Link>
        </li>
      </ul>
    </div>
  );
}
