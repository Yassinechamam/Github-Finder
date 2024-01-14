import { useContext, useEffect, useState } from "react";
import Spinner from "../layouts/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";
import axios from "axios";

function UserResults() {
  const { loading, users } = useContext(GithubContext);

  const [initials, setInitials] = useState([]);

  useEffect(() => {
    const fetchGitHubUsers = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        const data = response.data.slice(0, 21);
        setInitials(data);
      } catch (error) {
        console.error("Error fetching GitHub users:", error);
      }
    };

    fetchGitHubUsers();
  }, []);

  if (!loading) {
    const displayUsers = users.length > 0 ? users : initials;
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {displayUsers.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
