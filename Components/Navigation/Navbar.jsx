import Link from "next/link";
import navStyles from "../../styles/Navbar.module.css";
import GithubIco from "../Icons/Github.js";
export default function Navbar() {
  return (
    <div className={navStyles.navbar}>
      <ul className={navStyles.nav}>
        <li>
          <Link href={"Home"}>Home</Link>
        </li>
        <li>
          <Link href={"Skill"}>Skill</Link>
        </li>
        <li>
          <Link href={"Projects"}>Projects</Link>
        </li>
      </ul>
      <ul>
        <li className={navStyles.github}>
          <Link href={"https://github.com/Eclipsu"}>{<GithubIco />}</Link>
        </li>
      </ul>
    </div>
  );
}
