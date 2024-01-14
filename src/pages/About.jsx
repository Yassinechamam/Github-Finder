import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="hero">
      <div className="text-left hero-content">
        <div className="">
          <h1 className="text-4xl font-bold mb-8">About US</h1>
          <p className="text-xl w-full mb-8">
            Welcome to GitHub Finder, your go-to platform for discovering and
            connecting with developers from around the world. At GitHub Finder,
            we believe in the power of collaboration and the impact it can have
            on the world of coding. Our mission is to create a space where
            developers, both seasoned professionals and coding enthusiasts, can
            seamlessly explore GitHub users and repositories, fostering a
            community built on knowledge sharing and innovation. Our journey
            began with a simple idea: to make it easier for individuals and
            teams to find and connect with like-minded developers, explore
            exciting projects, and contribute to the ever-evolving world of
            open-source software. GitHub Finder is designed to simplify the
            process of discovering new talents, tracking your favorite projects,
            and staying updated on the latest developments in the coding
            landscape. Whether you're a seasoned coder, a beginner looking to
            learn, or a business seeking talented developers, GitHub Finder is
            your gateway to a vibrant and collaborative coding ecosystem. Join
            us on this coding adventure as we strive to create a platform that
            not only connects developers but also inspires creativity, learning,
            and the endless possibilities that coding brings. Thank you for
            being part of the GitHub Finder community. Together, let's explore,
            collaborate, and celebrate the incredible world of code.!
          </p>
          <Link to="/" className="btn btn-primary btn-lg">
            <FaHome className="mr-2" />
            <span>Back To Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;
