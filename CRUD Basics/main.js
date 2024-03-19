let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts")

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button Clicked");
    formValidation();
});

let formValidation = () => { //ES6 function 
    if(input.value === ""){
        msg.innerHTML = "Post cannot be blank";
        console.log("Failure");
    }
    else{
        console.log("Success");
        msg.innerHTML = "";
        acceptData();

    }
};

let data = {};

let acceptData = () => {
    data["text"] =  input.value;
    console.log(data);
    createPost();
   
};

let createPost = () => {
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
        <span class="options">
            <i onClick = "editPost(this)" class="fas fa-edit"></i>
            <i onClick = "deletePost(this)" class="fas fa-trash-alt"></i> <!--this is used to delete only one post which we are focusing on -->
        </span>
    </div>
    `;
    input.value = ""; // to empty the text area once clicked post button
};

let deletePost = (e) => {
    e.parentElement.parentElement.remove()
};

let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
};