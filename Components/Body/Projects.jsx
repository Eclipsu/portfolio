import Heading from "../Heading";
import ProjectCard from "../Misc/ProjectCard";

import styles from "../../styles/Projects.module.css";

export default function Projects(props) {
  if (!props.repos) return;

  return (
    <div className={styles.projects}>
      <Heading>Projects</Heading>
      <div className={styles.projectContainer}>
        {props.repos.map((repo) => {
          if (repo.stargazers_count === 0) return;
          return <ProjectCard className={styles.projectCards} title={repo.name} homepage={repo.homepage} html_url={repo.html_url} description={repo.description} />;
        })}
      </div>
    </div>
  );
}
