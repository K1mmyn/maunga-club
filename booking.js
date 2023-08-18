
let currentAuthMode = "";
let user = true;
const authDiv = document.getElementById("booking-auth-div")

const changeAuthMode = (authModeID) => {
   currentAuthMode = authModeID;
   renderAuth()
   console.log(currentAuthMode)
}

const onLoginSubmit = (event) => {
   // const userEmail = document.getElementById("login-email-input")
   // const userPassword = document.getElementById("login-password-input")

   // const newUser = {
   //    id: Math.random(),
   //    email: userEmail,
   //    password: userPassword,
   // }

   // localStorage.getItem("user-auth")

}

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


// Container to append to
const calendarContainer = document.getElementById("booking-auth-div")

const cabins = ["KERERŪ", "PŪKEKO", "KĀKĀPO"]
const monthsOfTheYear = ["January", "Febuary", "Mar", "Apr", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dayCounter = 0
let dayHeader = daysOfTheWeek[new Date().getDay()];
let day = new Date().getUTCDate()
let booking = ''
let arrowClicks = 0
let currentMonth = new Date().getMonth();
let curentYear = new Date().getFullYear()

const dateAvailabilities = () => {

   booking = ""

   for (let i = 0; i < cabins.length; i++) {
      if (dayHeader !== "Sunday" && dayHeader !== "Friday" && dayHeader !== "Saturday") {
         return booking += `
            <div style="background-color: #EF4565; animation-duration: 1s; width:100%;">
               UNAVAILABLE DATE
            </div>
         `

      }
      if ((day + i) % 3 > 0) {
         booking += `
            <div style="background-color: #7DB542; animation-duration: 1s;">
               ${cabins[i]}
               <a href='booking.html' target='blank'> 
                  <section class="booking-hover-button">
                     BOOK !
                  </section>
               </a>
            </div>
         `
      } else booking += `
         <div style="background-color: #EF4565; animation-duration: 1s;">
            ${cabins[i]}
         </div>
      `

   }
}

let calendarAnimationDuration = 1000
let calendar = ""

const setDayHeader = (dayID) => {
   switch (dayID) {
      case 0:
         dayHeader = "Sunday"
         break;
      case 1:
         dayHeader = "Monday"
         break
      case 2:
         dayHeader = "Tuesday"
         break
      case 3:
         dayHeader = "Wednesday"
         break
      case 4:
         dayHeader = "Thursday"
         break
      case 5:
         dayHeader = "Friday"
         break
      case 6:
         dayHeader = "Saturday"
         break
      default:
         break;
   }
}

const handleCalendarDateClick = (dayID, dayParam) => {
   day = dayParam
   arrowClicks = 0
   setDayHeader(dayID)
   renderCalendar()
}

const handleBetweenMonthsClick = (id, date, dayParam) => {

   arrowClicks = 0

   if (id === "next") {
      currentMonth += 1
      day = date
      setDayHeader(dayParam)
   } else if (id === "prev") {
      currentMonth -= 1
      day = date
      setDayHeader(dayParam)
   }

   renderCalendar()
}

const handleCalendarArrowClick = (id) => {
   if (id === "next") {
      if (currentMonth + 1 === 12) {
         return
      }
      currentMonth += 1
      arrowClicks += 1
   } else if (id === "prev") {
      if (currentMonth - 1 === -1) {
         return
      }
      currentMonth -= 1
      arrowClicks -= 1
   }

   renderCalendar()
}

const renderCalendar = () => {

   // Getting the last date of the month
   const lastDateOfTheMonth = new Date(curentYear, currentMonth + 1, 0).getDate()

   // This is for which day the month ends on (Monday or Tuesday)
   const lastDayOfTheMonth = new Date(curentYear, currentMonth, lastDateOfTheMonth).getDay()

   // This is for which day the month starts on (Monday or Tuesday or Wednesday...)
   const firstDayOfTheMonth = new Date(curentYear, currentMonth, 1).getDay()

   // This is to get the amount of days in last month
   const lastDateOfLastMonth = new Date(curentYear, currentMonth, 0).getDate()

   dateAvailabilities()
   calendar = ""
   calendarAnimationDuration = 1000

   for (let i = 0; i < daysOfTheWeek.length; i++) {

      if (dayCounter === 7) {
         dayCounter = 0
      }
      calendar += `
         <div style="animation-name: slide-up-extended; animation-duration: ${calendarAnimationDuration}ms; transition-timing-function: ease-in-out; cursor: default;">
            ${daysOfTheWeek[i].slice(0, 1)}
         </div> 
         `
      calendarAnimationDuration += 50
      dayCounter += 1
   }

   for (let i = firstDayOfTheMonth; i > 0; i--) {

      if (dayCounter === 7) {
         dayCounter = 0
      }

      calendar += `
         <div style="animation-name: slide-up-extended; animation-duration: ${calendarAnimationDuration}ms; transition-timing-function: ease-in-out; color: #5f6c7b;" onclick="handleBetweenMonthsClick('prev', ${lastDateOfLastMonth - i + 1}, ${dayCounter})">
            ${lastDateOfLastMonth - i + 1}
         </div> 
      `
      calendarAnimationDuration += 50
      dayCounter += 1
   }

   for (let i = 1; i <= lastDateOfTheMonth; i++) {

      if (dayCounter === 7) {
         dayCounter = 0
      }

      calendar += `
      <div style="animation-name: slide-up-extended; animation-duration: ${calendarAnimationDuration}ms; transition-timing-function: ease-in-out; " onclick="handleCalendarDateClick(${dayCounter}, ${i})">
      ${i}
      </div> 
      `
      calendarAnimationDuration += 50
      dayCounter += 1
   }

   for (let i = lastDayOfTheMonth; i < 6; i++) {

      if (dayCounter === 7) {
         dayCounter = 0
      }

      calendar += `
         <div style="animation-name: slide-up-extended; animation-duration: ${calendarAnimationDuration}ms; transition-timing-function: ease-in-out; color: #5f6c7b;" onclick="handleBetweenMonthsClick('next', ${i - lastDayOfTheMonth + 1}, ${dayCounter})">
            ${i - lastDayOfTheMonth + 1}
         </div> 
      `
      calendarAnimationDuration += 50
      dayCounter += 1
   }

   calendarContainer.innerHTML = `
      <div style="padding: 5vw; display: flex; justify-content: space-between; width: 100vw; height: 57.5vw; border: 1px solid black;">
         <section style="width: 27.5vw; height: 100%; background-color: white; border-radius: 2vw; display: flex; flex-direction: column; justify-content: space-around; padding: 2vw">
            <div style="width: 100%; height: 60%; display: flex; flex-direction: column;" id="calendar-container">
               <div style="width: 100%; display: flex; justify-content: space-between; font-size: 2vw; font-weight: 600; align-items: center; margin-bottom: 2vw; padding: 0vw 1vw;">
                  <h3 style="margin: 0; font-size: 2vw; animation: slide-up 1s ease-in-out; text-transform: uppercase;">
                     ${monthsOfTheYear[currentMonth].slice(0, 3)}
                  </h3>
                  <div style="animation: slide-up 1s ease-in-out;">
                     <span class="month-arrows" onclick="handleCalendarArrowClick('prev')">
                        &#60;
                     </span>
                     <span class="month-arrows" onclick="handleCalendarArrowClick('next')">
                        &#62; 
                     </span>
                  </div>
               </div>
               <div id="calendar"> 
                  ${calendar}
               </div>

            </div>
            <div style="width: 100%; height: 30%; display: flex; flex-direction: column; justify-content: space-around; padding: 0vw 1vw;">
               <div style="display: flex; width: 100%; height: 50%; align-items: center;">
                  <div style="background-color: #EF4565;" class="calendar-colours">
                  </div>
                  <h3 style="animation: slide-up-extended 1s ease-in-out;">
                     AVAILABLE DATES
                  </h3>
               </div>
               <div style="display: flex; width: 100%; height: 50%; align-items: center;">
                  <div style="background-color: #5f6c7b;" class="calendar-colours">
                  </div>
                  <h3 style="animation: slide-up-extended 1s ease-in-out;">
                     PREVIOUS &amp; FOLLOWING DATES
                  </h3>
               </div>
               <div style="display: flex; width: 100%; height: 50%; align-items: center;">
                  <div style="background-color: black;" class="calendar-colours">
                  </div>
                  <h3 style="animation: slide-up-extended 1s ease-in-out;">
                     UNAVAILABLE DATES
                  </h3>
               </div>
            </div>
         </section>

         <div style="width: 55.5vw; height: 100%; display: flex; flex-direction: column; justify-content: space-between;">
            <div style="width: 100%; height: 60%; background-color: white; border-radius: 1vw; display: flex;flex-direction: column; padding: 3vw; justify-content: space-between;">
               <h3 style="margin: 0; font-size: 3vw; animation: slide-up 1s ease-in-out; text-transform: uppercase;">${dayHeader} ${day} ${monthsOfTheYear[currentMonth - arrowClicks]}</h3>
               <div  class="booking-container">
                  ${booking}
               </div>
            </div>
            <div style="width: 100%; height: 30%; background-color: white; border-radius: 1vw; display: flex; justify-content: space-around; align-items: center;">
               <div style="display: flex; align-items: center; font-size: 2vw; font-weight: 700; animation: booking-slide-up 1s ease-in-out;">
                  <div style="width: 5vw; height: 5vw; background-color: #7DB542; margin-right: 1.5vw; border-radius: 0.75vw;">
                  </div>
                  VACANT
               </div>
               <div style="display: flex; align-items: center; font-size: 2vw; font-weight: 700; animation: booking-slide-up 1s ease-in-out;">
                  <div style="width: 5vw; height: 5vw; background-color: #EF4565; margin-right: 1.5vw; border-radius: 0.75vw;">
                  </div>
                  OCCUPIED
               </div>
               <div>

               </div>
            </div>
         </div>
      </div>
   `
}

if (!user) renderAuth();
else {
   renderCalendar();;
}
// renderCalendar()