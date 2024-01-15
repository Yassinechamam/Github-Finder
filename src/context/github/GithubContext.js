import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import axios from "axios";

const GithubContext = createContext();

const GITHUB_URL = `https://api.github.com`;
const GITHUB_TOKEN = `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`;

export const GithubProvider = ({ children }) => {
  const initialState = {
    initials: [],
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading();

    const params = new URLSearchParams({
      q: text,
    });

    const response = await axios.get(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    const { items } = response.data;

    dispatch({
      type: "GET_USERS",
      payload: items.slice(0, 20),
    });
  };

  const getUser = async (login) => {
    setLoading();

    const response = await axios.get(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (response.status === 404) {
      window.location = "/notfound";
    } else {
      const item = response.data;

      dispatch({
        type: "GET_USER",
        payload: item,
      });
    }
  };

  const getUserRepos = async (login) => {
    setLoading();

    const params = new URLSearchParams({
      sort: "created",
      per_page: 10,
    });

    const response = await axios.get(
      `${GITHUB_URL}/users/${login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const item = response.data;

    dispatch({
      type: "GET_REPOS",
      payload: item,
    });
  };

  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  const clearUser = () => {
    dispatch({
      type: "CLEAR_USERS",
      payload: [],
    });
  };

  return (
    <GithubContext.Provider
      value={{
        ...state,
        getUserRepos,
        searchUsers,
        clearUser,
        getUser,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
