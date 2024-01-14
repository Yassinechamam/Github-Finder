import UserSearch from "../users/UserSearch";
function HeroSection() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:items-center">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
          Discover, Code, Inspire.
          <span className="sm:block"> Your Code, Our Canvas. </span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
          Explore GitHub users and their repositories with ease. Search for your
          favorite developers, discover trending repositories, and stay
          connected with the vibrant GitHub community.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
