import axios from "axios";

// const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;

// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: {
    Accept: "application/vnd.GitHub.v3+json",
    // Authorization: "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",
  },
});

export const searchUsers = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });
  //BEFORE I USED AXIOS
  // const response = await fetch(`${GITHUB_URL}search/users?${params}`, {
  //     headers: {
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  // })
  // const {items} = await response.json()
  // return items

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

//get single user
//both getuser and getrepo before i changed to a single func
// export const getUser = async (login) => {

//         const response = await fetch(`${GITHUB_URL}/users?${login}`, {
//             headers: {
//                 Authorization: `token ${GITHUB_TOKEN}`,
//             },
//         })

//         if(response.status === 404) {
//             window.location = '/notfound'
//         }else{
//             const data = await response.json()
//             return data
//         }
//     }

//   export const getUserRepos = async (login) => {

//         const params = new URLSearchParams({
//             sort: 'created',
//             per_page: 10,
//         })
//             const response = await fetch(`${GITHUB_URL}search/users?${login}/repo?${params}`, {
//                 headers: {
//                     Authorization: `token ${GITHUB_TOKEN}`,
//                 },
//             })
//             const data = await response.json()
//             return data

//         }

//get user and repos
export const getUserAndRepos = async (login) => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${login}`),
    github.get(`/users/${login}/repos`),
  ]);
  return { user: user.data, repo: repos.data };
};
