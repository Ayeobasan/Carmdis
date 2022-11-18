// const form = document.querySelector("form");

// form.addEventListener("submit", event => {
//    event.preventDefault();
//   const firstname = document.querySelector("[name='First-Name']").value.trim();
//   const lastname = document.querySelector("[name='Last-Name']").value.trim();
//   const email = document.querySelector("[name='email']").value.trim();
//   const password = document.querySelector("[name='Password']").value.trim();
//   const confirmPassword = document
//     .querySelector("[name='confirm-Password']")
//     .value.trim();

//   const errors = [];

// if (firstname === "") errors.push("firstname can't be blank");
// if (lastname === "") errors.push("lastname can't be blank");
// if (email === "") errors.push("email can't be blank");
// if (password === "") errors.push("password can't be blank");
// if (confirmPassword !== "") errors.push("Password dos not match");
// console.log(errors);
// });




const form = document.getElementById("signup");
const First = document.getElementById("First");
const Last = document.getElementById("Last");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener('submit', e => {
  e.preventDefault();
  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.preventElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.ClassList.add("error"); 
  inputControl.ClassList.Remove("Success");
};
const setSuccess = (element) => {
  const inputControl = element.preventElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.ClassList.add("success");
  inputControl.ClassList.Remove("error");
};

const isValidEmail = email =>{
   // const re = /^(([^<>()[\]\\.,;:\s@"]+()
   return (String(email).toLowerCase())
}

const validateInputs = () => {
  const FirstValue = First.Value.trim();
  const LastValue = Last.Value.trim();
  const emailValue = email.Value.trim();
  const passwordValue = password.Value.trim();
  const password2Value = password2.Value.trim();

  if (FirstValue === "") {
   setError(First ,"Firstname can't be blank")
  } else{
   setSuccess(First )
  };
  if (LastValue === "") {
   setError(Last, "lastname can't be blank")
  } else{
   setSuccess(Last)
  };
  if (emailValue === "") {
   setError(email, "Email is required")
  } else if(!isValidEmail(email)){
   setSuccess(email, "Provide a valid email adress")
  } else{
   setSuccess(email)
  };
  if (passwordValue === "") {
   setError(password ,"password is required")
  }else if(password.lenght < 8 ){
   setError(password, "password must be more than 8 characters." )
  } else{
   setSuccess(password )
  };
  if (password2Value === "") {
   setError(password2 ,"Please Check again")
  }else if(password2Value !== passwordValue){
   setError( "passwords dont match")
  } else{
   setSuccess(password2 )
  };
};
