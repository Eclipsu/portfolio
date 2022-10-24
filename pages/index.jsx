import axios from "axios";

import Head from "next/head";
import Navbar from "../Components/Navigation/Navbar";
import Profile from "../Components/Body/Profile";
import Skills from "../Components/Body/Skills";

export default function Home(props) {
  return (
    <div className="main">
      <Head>
        <title>Rajeev Shrestha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="Hey it's me Rajeev Shrestha, an aspiring MERN developer. I use Javascript as my main language, but don't limit with it." />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta property="og:image" content={props.image_url} />
      </Head>
      <Navbar />
      <Profile image_url={props.image_url} />
      <Skills id="skills" />
    </div>
  );
}

export const getServerSideProps = async () => {
  const response = await axios.get("https://api.github.com/users/Eclipsu");
  return { props: { image_url: response.data.avatar_url } };
};
