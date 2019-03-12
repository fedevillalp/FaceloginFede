// The API object contains methods for each kind of request we'll make
var API = {

  postFace: function (link,first_name, user_name) {
    console.log('postface. This is data to be posted:');
    console.log(link, first_name, user_name);
    //insert username and userlastname into database
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/face/upload",
      data: JSON.stringify({ 
                            link: link,
                            first_name: first_name,
                            user_name: user_name
                           })
    }).then(function(data){
      var data = JSON.parse(data);
      console.log('This is THEN condition of postFace. The Microsoft faceId is: ')
      console.log(data[0].faceId);
      //insert faceID into database:
    });
  },

  postFaceFile: function (link) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/face/uploadfile",
      data: JSON.stringify({ link: link })
    });
  },

  postFaceCompare: function (link) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/face/compare",
      data: JSON.stringify({ link: link })
    }).then(function(data){
      window.location = '../views/dashboard'
    });
  },

  login: function() {
    console.log('login pressed');
       return $.ajax({
         url: "/login",
         type: "GET"
       });
  },

  submitLogin: function(username, link_to_fresh_foto) {
    console.log('this is submitLogin()');
    console.log(username,link_to_fresh_foto);
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/face/compare",
      data: JSON.stringify({ username: username, link_to_fresh_foto: link_to_fresh_foto  })
    });
       
  }


};

//This button makes a post to api/face/upload using API.postFace()
$("#uploadFace").on("click", function (event) {

  event.preventDefault();
  $linkToPicture = $("#link-to-picture").val().trim();
  $first_name = $("#first_name").val().trim();; // need to get gtom text box
  $user_name = $("#user_name").val().trim();; // ned to get from text box
  console.log($linkToPicture);
  console.log('Calling API.getFace()');
  API.postFace($linkToPicture, $first_name, $user_name);
})

//This button makes a post to api/face/uploadfile
$("#uploadFaceFile").on("click", function (event) {

  event.preventDefault();
  $linkToPicture = $("#link-to-picture").val().trim();
  console.log($linkToPicture);
  console.log('Calling API.getFaceFile()');
  API.postFaceFile($linkToPicture);
})

//This button makes a post to api/face/compare
$("#faceCompare").on("click", function (event) {

  event.preventDefault();
  $linkToPicture = $("#link-to-picture").val().trim();
  console.log($linkToPicture);
  console.log('Calling API.getFaceFile()');
  API.postFaceCompare($linkToPicture);
})

//This button makes a post to api/face/compare
$("#goto-login-page").on("click", function (event) {
  event.preventDefault();
 API.login()
})

//This button makes a post to api/face/compare
//No longer needed becasue the POST form has an action
// $("#submit-login").on("click", function (event) {
//   console.log('submit-login was pressed')
//   $username = $("#userName").val().trim();
//   $link_to_fresh_foto = $("#login-link-to-fresh-picture").val().trim();
//   API.submitLogin($username, $link_to_fresh_foto);
// })