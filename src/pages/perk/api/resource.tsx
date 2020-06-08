import axios from "axios";

// check if production live, or dev
let url =
  process.env.NODE_ENV && process.env.NODE_ENV == "production"
    ? "https://api-reallifeperktree.herokuapp.com/"
    : "http://127.0.0.1:1337/";

export async function getArticles(perk) {
  return await axios
    .get(url + `resource/${perk}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
