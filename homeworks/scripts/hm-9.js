//----------------------PROMISE----------------------//
fetch('https://jsonplaceholder.typicode.com/users/3')
   .then((response) => {
      if(!response.ok) {
         throw new Error('Network response was not ok');
      }
      return response.json();
   })
   .then((user) => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
   })
   .then(response => response.json())
   .then((posts) => {
      return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
   })
   .then(response => response.json())
   .then((comments) => {
      console.log(comments);
   })
   .catch((error) => {
      console.log('There was a problem with the fetch operation:', error.message);
   })
//----------------------ASYNC/AWAIT----------------------//
const getComments = async() => {
   let response = await fetch('https://jsonplaceholder.typicode.com/users/3');
   let user = await response.json();
   
   let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
   let posts = await postsResponse.json();

   let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
   let comments = await commentsResponse.json();

   console.log(comments);
};
getComments().catch(Error);


 
