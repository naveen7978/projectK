require('dotenv').config()
const express = require('express')

const app = express()
const port = 3000 
const githubdata = {
  "login": "naveen7978",
  "id": 174084284,
  "node_id": "U_kgDOCmBQvA",
  "avatar_url": "https://avatars.githubusercontent.com/u/174084284?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/naveen7978",
  "html_url": "https://github.com/naveen7978",
  "followers_url": "https://api.github.com/users/naveen7978/followers",
  "following_url": "https://api.github.com/users/naveen7978/following{/other_user}",
  "gists_url": "https://api.github.com/users/naveen7978/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/naveen7978/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/naveen7978/subscriptions",
  "organizations_url": "https://api.github.com/users/naveen7978/orgs",
  "repos_url": "https://api.github.com/users/naveen7978/repos",
  "events_url": "https://api.github.com/users/naveen7978/events{/privacy}",
  "received_events_url": "https://api.github.com/users/naveen7978/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 6,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-06-28T05:01:33Z",
  "updated_at": "2025-09-18T16:02:37Z"
}

app.get('/',(req,res)=>{
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('this is my twitter account')
})
app.get('/login',(req,res)=>{
    res.send('<h1>please login <h1>')
})
app.get('/github',(req,res)=>{
    res.json(githubdata)
})
app.listen(process.env.PORT,()=>{
    console.log(`app listening on port ${port}`)
})
