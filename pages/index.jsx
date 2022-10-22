import axios from "axios";
import Navbar from "../Components/Navigation/Navbar";
import Profile from "../Components/Body/Profile";
import Skills from "../Components/Body/Skills";

export default function Home(props) {
  return (
    <div className="main">
      <Navbar />
      <Profile image_url={props.image_url} />
      <Skills />
    </div>
  );
}

export const getStaticProps = async () => {
  const response = await axios.get("https://api.github.com/users/Eclipsu");
  return { props: { image_url: response.data.avatar_url }, revalidate: 10 };
};
