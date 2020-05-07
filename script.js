const fetch = require("node-fetch");


async function pingBack() {
  let params = {
    title: "Chuma Umenze",
    blogurl: "https://chumaumenze.com",
    rssurl: "https://chumaumenze.com/feed.xml",
    chk_blogs: "on",
    chk_feedburner: "on",
    chk_tailrank: "on",
    chk_superfeedr: "on"
  }
  let url = new URL("http://pingomatic.com/ping/")
  Object.keys(params).forEach(k => {url.searchParams.append(k, params[k])})
  return await fetch(url)
}

if (process.argv.includes("pingBack") || process.argv.includes("ping")) {
  console.info("Initiate Pingback!!!")
  pingBack().then(
    r => console.log(r.status, r)
  );
  console.info("Pingback Complete!!!")
} 
