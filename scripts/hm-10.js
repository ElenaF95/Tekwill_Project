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
      console.log(comments);;
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


//-------------------------*-----------------------------//   
// document.addEventListener('DOMContentLoaded', function () {
//    fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => {
//          if(!response.ok) {
//             throw new Error('Network response was not ok');
//          }
//          return response.json();
//       })
//       .then((usersData) => {
//          handleUser(usersData);
//       })
//       .catch((error) => {
//          console.log('There was a problem with the fetch operation:', error.message);
//       })
   
//    const handleUser = (users) => {
//       console.log(users);
//       const form = document.querySelector('.user-block__input');
//       const input = form.querySelector('.input__user-name');
      
//       form.addEventListener('submit', handleSubmit);

//       function handleSubmit(event) {
//          event.preventDefault();
   
//          let inputValue = input.value;
//          let myUser = users.find((el) => el.name === inputValue);
//          let myUserId;
//          let myPostId;
         
//          if (myUser) {
//             myUserId = myUser.id;
//             getUserPosts(myUserId)
//          } else {
//             const userBlock = document.getElementById('user__block');
//             const postsList = document.getElementsByClassName('user__info');

//             if(!!postsList) {
//                userBlock.removeChild(postsList);
//             }
//             const errorMessage = document.createElement('p');
//             errorMessage.textContent = `User with name ${inputValue} doesn't exist`;
//             // form.removeChild(errorMessage);
//             form.appendChild(errorMessage);
//          }
//       }
//    }
//    const getUserPosts = (myUserId) => {
//       fetch(`https://jsonplaceholder.typicode.com/posts?userId=${myUserId}`)
//          .then(response => response.json())
      
//          .then((posts) => {
//             let postsList = document.querySelector('.user__info');
//             let commentsList = document.querySelector('.user__comment')
            
            
           
//             posts.forEach((post) => {
//                const listItem = document.createElement('li');
//                const postTitle = document.createElement('h3');
//                const postBody = document.createElement('p');
               
//                fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
//                .then(response => response.json())
//                console.log(comment);
//                const listComments = document.createElement('li');
//                const commentOwner = document.createElement('h5');
//                const commentTitle = document.createElement('h4');
//                const commentBody = document.createElement('p');

//                postTitle.textContent = post.title;
//                postBody.textContent = post.body;
//                commentOwner.textContent = comment.email;
//                commentTitle.textContent = comment.name;
//                commentBody.textContent = comment.body;

//                postsList.appendChild(listItem);
//                listItem.appendChild(postTitle);
//                listItem.appendChild(postBody);
//                listItem.appendChild(listComments);
//                listComments.appendChild(commentOwner);
//                listComments.appendChild(commentTitle);
//                listComments.appendChild(commentBody);
//             });
//          })
//          .error((error) => {
//             console.log('Error', error);
//          })
//    }

// })