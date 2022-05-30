import React from 'react'
import Post from "../Post"
import Welcome from "../Welcome"


const post = {
  title: "harry potter and the goblet",
  author: "Jk rowlin",
  body: "This is a good book"
}

function Home(props) {
  return (
    <div>
      <Welcome name ={"Edward"} location={"Seattle"} />
      <Post title={post.title} author={post.author} body={post.body} />

    </div>
  );
}


export default Home;