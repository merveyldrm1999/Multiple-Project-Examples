function getPosts(e) {
  // sayfa yenilememesi için
  e.preventDefault();
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });

  axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
    const posts = res.data;

    const filteredPost = posts.filter((post) => post.id >= 50);
    console.log(filteredPost);
    posts.map((post) => {
      if (post.id === 52) {
        post.title = "Hüseyin Merve".toUpperCase();
      }
    });

    console.log(posts);

    const postTitleFiltered = posts.filter((post) => {
      return post.title.includes("merve");
    });
    console.log(postTitleFiltered);
  });
}

//https://jsonplaceholder.typicode.com/posts
//burda yer alan bütün postları consol ile getir.
