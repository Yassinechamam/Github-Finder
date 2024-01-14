import Alert from "../components/layouts/Alert";
import HeroSection from "../components/layouts/HeroSection";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <div className="home ">
      <HeroSection />
      <Alert />
      <UserSearch />
      <UserResults />
    </div>
  );
}

export default Home;
