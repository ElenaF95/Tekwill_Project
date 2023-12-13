// //----------------------PROMISE----------------------//
// fetch('https://jsonplaceholder.typicode.com/users/3')
//    .then((response) => {
//       if(!response.ok) {
//          throw new Error('Network response was not ok');
//       }
//       return response.json();
//    })
//    .then((user) => {
//       return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//    })
//    .then(response => response.json())
//    .then((posts) => {
//       return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
//    })
//    .then(response => response.json())
//    .then((comments) => {
//       console.log(comments);
//    })
//    .catch((error) => {
//       console.log('There was a problem with the fetch operation:', error.message);
//    })
// //----------------------ASYNC/AWAIT----------------------//
// const getComments = async() => {
//    let response = await fetch('https://jsonplaceholder.typicode.com/users/3');
//    let user = await response.json();
   
//    let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//    let posts = await postsResponse.json();

//    let commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${posts[0].id}`);
//    let comments = await commentsResponse.json();

//    console.log(comments);
// };
// getComments().catch(Error);


//-------------------------6*-----------------------------//   
document.addEventListener('DOMContentLoaded', function () {
   fetch('https://jsonplaceholder.typicode.com/users')
  
   .then((response) => {
      if(!response.ok) {
         throw new Error('Network response was not ok');
      }
      return response.json();
   })
   .then((usersData) => {
      console.log(usersData);
      handleUser(usersData);
   })
   .catch((error) => {
      console.log('There was a problem with the fetch operation:', error.message);
   })
   
   const handleUser = (users) => {
      const form = document.querySelector('.user-block__content form');
      const input = form.querySelector('.input-user__name');
      
      form.addEventListener('submit', handleSubmit);

      function handleSubmit(event) {
         
         event.preventDefault();

         let userName = input.value;
         let myUser = users.find((user) => user.name === userName);
         let myUserId;

         if (myUser) {
            myUserId = myUser.id;
            getUserPosts(myUserId);
         } else {
            const userBlock = document.querySelector('.user-block__content');
            
            const form = document.querySelector('.user-block__form');
            
            const errorString = document.createElement('div');
            const warningIcon = document.createElement('div');
            const errorMessage = document.createElement('p');

            errorString.classList.add('user-block__error-string');
            warningIcon.classList.add('user-block__error-icon');
            errorMessage.classList.add('user-block__error-message');
            errorMessage.textContent = `User with name ${userName} doesn't exist`;
            
            const currentString = form.querySelector('.user-block__error-string');
            if(currentString) form.removeChild(currentString);
   
            const currentList = userBlock.querySelector('.users-posts');
            if (currentList) userBlock.removeChild(currentList);
           
            errorString.appendChild(warningIcon);
            errorString.appendChild(errorMessage);
            form.appendChild(errorString);

         }
      };
      const getUserPosts = (myUserId) => {
         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${myUserId}`)
         .then(response => response.json())
         .then((posts) =>{
            // Create posts list
            console.log(posts.length);//--
            const postsCount = posts.length;
            const userName = input.value;
            console.log(userName);
            
            const userBlock = document.querySelector('.user-block__content');
            const usersPosts = document.createElement('div');
            const usersPostsCount = document.createElement('p');
            const postsList = document.createElement('ul');
            
            usersPosts.classList.add('users-posts');
            usersPostsCount.classList.add('posts-count');
            postsList.classList.add('posts-list');
            usersPostsCount.textContent = `Found ${postsCount} posts by ${userName} :`;


            const currentString = form.querySelector('.user-block__error-string');
            if(currentString) form.removeChild(currentString);
   
            const currentList = userBlock.querySelector('.users-posts');
            if (currentList) userBlock.removeChild(currentList);
            
            posts.forEach((post) => {
               const listItem = document.createElement('li');
               const itemTable = document.createElement('table');
               
               // Create user's post
               const tableRowPost = document.createElement('tr');
               const tableDataPost = document.createElement('td');
               const usersPost = document.createElement('div');
               const postTitle = document.createElement('h3');
               const postBody = document.createElement('p');
             
               // Adding classes and content
               itemTable.classList.add('user__post');
               tableDataPost.classList.add('post');
               usersPost.classList.add('post__message');
               postTitle.textContent = post.title;
               postBody.textContent = post.body;

               usersPost.appendChild(postTitle);
               usersPost.appendChild(postBody);
               tableDataPost.appendChild(usersPost);
               tableRowPost.appendChild(tableDataPost);
              
               

               // Generating post comments 
               fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
               .then(response => response.json())
               .then((comments) => {
                  const commentsCount = comments.length;
                  // Comment announcement
                  const commentsText = document.createElement('p');
                  commentsText.classList.add('post__comments');
                  commentsText.textContent = `Comments:  ${commentsCount}`;
                  tableDataPost.appendChild(commentsText);

                  comments.forEach((comment) => {
                     const tableRowComment = document.createElement('tr');
                     const tableDataComment = document.createElement('td');
                     const commentUser = document.createElement('div');
                     const commentUserIcon = document.createElement('div');
                     const commentUserEmail = document.createElement('p');
                     const commentTitle = document.createElement('h6');
                     const commentBody = document.createElement('p');
                     // Adding classes and content
                     tableDataComment.classList.add('user__feedback');
                     commentUser.classList.add('commented-user');
                     commentUserIcon.classList.add('commented-user__icon');
                     commentUserEmail.textContent = comment.email;
                     commentTitle.textContent = comment.name;
                     commentBody.textContent = comment.body;
                     // Joining rows elements
                     commentUser.appendChild(commentUserIcon);
                     commentUser.appendChild(commentUserEmail);
                     tableDataComment.appendChild(commentUser);
                     tableDataComment.appendChild(commentTitle);
                     tableDataComment.appendChild(commentBody);
                     tableRowComment.appendChild(tableDataComment);

                     itemTable.appendChild(tableRowComment);
                  })
                  
               })     
               .catch((error) => console.log(error)) 
              // Joining rows elements
               itemTable.appendChild(tableRowPost);
               listItem.appendChild(itemTable);
               postsList.appendChild(listItem);
            });
            
            usersPosts.appendChild(usersPostsCount);
            usersPosts.appendChild(postsList);
            userBlock.appendChild(usersPosts);
            
         })
         .catch((error) => console.log(error)) 
      };
   }
});