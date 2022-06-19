const fetch = require("node-fetch");
const { YOUTUBE_API_KEY } = require("./config");

if (!YOUTUBE_API_KEY) {
  throw new Error("No API key is provided");
}
export class YoutubeResults {
  constructor(query, resultsPerPage) {
    this.query = query;
    this.resultsPerPage = resultsPerPage;
  }

  getResults=() => {
    return getYoutubeResults(this.query, this.resultsPerPage);
  }
}
async function getYoutubeResults(query, resultsPerPage) {
  console.log("Ready to get Youtube data!");
  let url = `https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&type=video&part=snippet&q=${query}`;
  if (resultsPerPage) {
    url = `${url}&maxResults=${resultsPerPage}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  const videoIDs = data.items.map(item => item.id.videoId);
  const dataItems = [];

  videoIDs.forEach(element => {
    url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&id=${element}&key=${YOUTUBE_API_KEY}&maxResults=1`;
    fetch(url).then(res => res.json()).then(data => {
      dataItems.push(data.items[0]);
    });
  });

  return dataItems;
}