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
      handleUser(usersData);
   })
   .catch((error) => {
      console.log('There was a problem with the fetch operation:', error.message);
   })
   
   const handleUser = (users) => {
      const form = document.querySelector('#user__block form');
      const input = form.querySelector('.input__user-name');
      
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
            const form = document.querySelector('.user-block__form');
            
            const errorString = document.createElement('div');
            const warningIcon = document.createElement('div');
            const errorMessage = document.createElement('p');

            errorString.classList.add('input-user__text');
            warningIcon.classList.add('user-block__error-icon');
            errorMessage.classList.add('user-block__error-text');
            errorMessage.textContent = `User with name ${userName} doesn't exist`;
            
            form.appendChild(errorString);
            errorString.appendChild(warningIcon);
            errorString.appendChild(errorMessage);

            if(errorString) {
              form.removeChild(errorString);
            }
         }
      };
      const getUserPosts = (myUserId) => {
         fetch(`https://jsonplaceholder.typicode.com/posts?userId=${myUserId}`)
         .then(response => response.json())
         .then((posts) =>{
         
            // Create posts list
            const postsList = document.createElement('ul');
            const listWrapper = document.getElementsByClassName('user-block__posts');
    
            const currentList = listWrapper.querySelector('ul');
            if (currentList) listWrapper.removeChild(currentList);   
            
            posts.forEach((post) => {
               const listItem = document.createElement('li');
               const itemTable = document.createElement('table');
               
               // Create user's post
               const tableRowPost = document.createElement('tr');
               const tableDataPost = document.createElement('td');
               const usersPost = document.createElement('div');
               const postTitle = document.createElement('h3');
               const postBody = document.createElement('p');
               
               // Comment announcement
               const tableRow = document.createElement('tr');
               const tableData = document.createElement('td');
               const commentsIcon = document.createElement('div');
               const commentsText = document.createElement('p');

               // Adding classes and content
               itemTable.classList.add('user__post');
               tableDataPost.classList.add('post');
               usersPost.classList.add('post__message');
               postTitle.textContent = post.title;
               postBody.textContent = post.body;

               tableData.classList.add('post__comments');
               commentsIcon.classList.add('post__comments-icon');
               commentsText.textContent = 'Comments:';

               // Joining table elements
               
               ul.appendChild(listItem);
               listItem.appendChild(itemTable);

               itemTable.appendChild(tableRowPost);
               tableRowPost.appendChild(tableDataPost);
               tableDataPost.appendChild(usersPost);
               usersPost.appendChild(postTitle);
               usersPost.appendChild(postBody);
               
              
               itemTable.appendChild(tableRow);
               tableRow.appendChild(tableData);
               tableData.appendChild(commentsIcon);
               tableData.appendChild(commentsText);

               // Generating post comments 
               let commentsList 
               fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
               .then(response => response.json())
               .then((comments) => {
                  commentsList = comments
                  getPostsComments(commentsList);
               })   
               .catch((error) => console.log(error))    
            }); 
            
            listWrapper.append(postsList);  
               
            const getPostsComments = (commentsList) => {
               const itemTable = document.getElementsByClassName('user__post');
               const tableRowComment = document.createElement('tr');

               commentsList.forEach((comment) => {
                  
                  const tableDataComment = document.createElement('td');
                  const commentUser = document.createElement('div');
                  const commentUserIcon = document.createElement('div');
                  const commentUserEmail = document.createElement('h5');
                  const commentTitle = document.createElement('h4');
                  const commentBody = document.createElement('p');
                  
                  // Adding classes and content
                  tableDataComment.classList.add('user__feedback');
                  commentUser.classList.add('comments__user');
                  commentUserIcon.classList.add('comments__user-icon');
                  commentUserEmail.textContent = comment.email;
                  commentTitle.textContent = comment.name;
                  commentBody.textContent = comment.body;
                  // Joining table elements
                  
                  tableRowComment.appendChild(tableDataComment);
                  tableDataComment.appendChild(commentUser);
                  commentUser.appendChild(commentUserIcon);
                  commentUser.appendChild(commentUserEmail);
                  tableDataComment.appendChild(commentTitle);
                  tableDataComment.apappendChild(commentBody);
                  
               })
               itemTable.append(tableRowComment);
            }
            
         })
         .catch((error) => console.log(error)) 
      };
   }
});