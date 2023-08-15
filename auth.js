let currentAuthMode = "";
let user = null;
const authDiv = document.getElementById("booking-auth-div")

const changeAuthMode = (authModeID) => {
   currentAuthMode = authModeID;
   renderAuth()
   console.log(currentAuthMode)
}

const onLoginSubmit = () => { }

const onRegisterSubmit = () => { }

const onResetPassword = (event) => {
   event.preventDefault();
   const inputEmail = document.getElementById("reset-password-input").value
   if (!inputEmail) return alert("Please enter a valid email")
   alert(`Reset Password Email has been sent to ${inputEmail}`)
   currentAuthMode = "login"
   renderAuth()
}

const renderAuth = () => {
   if (!currentAuthMode) {
      authDiv.innerHTML = `
      <section class="login-container" style="width: 100vw; align-items: center;  justify-content: center; padding-bottom: 10vw;">
         <h1 style="margin: 2vw; animation-name: slide-up; animation-duration: 1s; animation-timing-function: ease-in-out;">SIGN IN TO BOOK</h1>
         <button  class="sign-in-button" onclick="changeAuthMode('login')" style="animation-name: slide-up-extended; animation-duration: 1s; animation-timing-function: ease-in-out;">CLICK TO SIGN IN !</button>
      </section> 
      `
   }

   if (currentAuthMode === "login") {
      authDiv.innerHTML = `
         <section class="login-container" style="width: 65vw; padding: 8vw 7vw;">
            <h1 style="margin: 0; margin-bottom: 3vw;">SIGN IN</h1>
            <form style="width: 100%; display: flex; flex-direction: column;">
               <label for="email"  class="login-label" ">EMAIL</label>
               <input type="email" name="email" placeholder="Email..." class="login-input" id="login-email-input">
               <label for="password"  class="login-label" >PASSWORD</label>
               <input type="password" name="password" placeholder="************" class="login-input"  id="login-password-input">
               <button  class="sign-in-button form-login-button" type="submit" style="font-style: italic; animation: slide-up 1s ease-in-out;">SIGN IN !</button>
            </form>
            <div style="justify-content: space-between ;" class="login-nav-div" >
               <span onclick="changeAuthMode('register')">
                  CREATE AN ACCOUNT?
               </span>
               <span style="color: #094067;"onclick="changeAuthMode('resetPassword')" >
                  FORGOT PASSWORD?
               </span>
            </div>
         </section>
      `
   } else if (currentAuthMode === "register") {
      authDiv.innerHTML = `
         <section class="login-container" style="width: 100vw; padding: 5vw 7vw; ">
            <h1 style="margin: 0; margin-bottom: 3vw; display: block;">REGISTER</h1>
            <form style="display: flex; flex-direction: column;">
               <div style="display: flex; justify-content: space-between;">
                  <div style="display: flex; flex-direction: column; width: 42.5vw;">
                     <label for="email"  class="login-label" style="column-span: none;">EMAIL</label>
                     <input type="email" name="email" placeholder="Example@example.com..." class="login-input" >
                     <label for="fullName"  class="login-label">Full Name</label>
                     <input type="text" name="fullName" placeholder="John Doe" class="login-input" >
                     <label for="proofOfAddress"  class="login-label">Proof of Adresss</label>
                     <input type="file" name="proofOfAddress"  class="input-test"  >
                  </div>
                  <div style="display: flex; flex-direction: column; width: 42.5vw;">
                     <label for="password"  class="login-label">PASSWORD</label>
                     <input type="password" name="password" placeholder="************" class="login-input" >
                     <label for="address"  class="login-label" style="column-span: none;">Address</label>
                     <input type="text" name="text" placeholder="275 Ormiston Road, Auckland 2016..." class="login-input" >
                     <label for="proofOfID"  class="login-label">Proof of ID</label>
                     <input type="file" name="proofOfID"  class="input-test"  >
                  </div>
               </div>
               <button  class="sign-in-button form-login-button" type="submit" style="font-style: italic;">REGISTER !</button>
            </form>
            <div class="login-nav-div">
               <span style="margin-right: 0.5vw;">
                  ALREADY HAVE AN ACCOUNT?
               </span>
               <span style="color: #EF4565;" onclick="changeAuthMode('login')">
                  LOG IN
               </span>
            </div>
         </section>
   `
   } else if (currentAuthMode === "resetPassword") {
      authDiv.innerHTML = `
       <section class="login-container" style="width: 65vw; padding: 10vw 7vw; ">
         <h1 style="margin: 0; margin-bottom: 3vw;">RESET PASSWORD</h1>
         <form style="width: 100%; display: flex; flex-direction: column;" onsubmit='onResetPassword(event)'>
            <label for="email" class="login-label" style="font-size: 2vw !important;">Forgotten your password? Enter your email address below, and we'll send you an e-mail allowing you to reset it.</label>
            <input type="email" name="email" placeholder="example@example.com" class="login-input" id="reset-password-input">
            <button class="sign-in-button form-login-button" type="submit" style="font-style: italic;">RESET PASSWORD !</button>
         </form>
         <div
            style="justify-content: space-between;" 
            class="login-nav-div">
            <span style="color: #094067;" onclick="changeAuthMode('register')">
               CREATE AN ACCOUNT?
            </span>
            <span style="color: #094067;" onclick="changeAuthMode('login')">
               LOG IN?
            </span>
         </div>
      </section>
   `
   }
}

renderAuth()