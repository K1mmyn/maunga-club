let currentAuthMode = "";
let user = null;
const authDiv = document.getElementById("booking-auth-div")

const changeAuthMode = (authModeID) => {
   currentAuthMode = authModeID;
   renderAuth();
}

const onLoginSubmit = (event) => {

   event.preventDefault();

   // Getting user information
   const userEmail = document.getElementById("user-email").value
   const userPassword = document.getElementById("user-password").value

   // Checking if all fields are filled
   if (!userEmail || !userPassword) {
      return alert("Please fill out all fields")
   }

   // Checking for previous user data
   const allUsersInLocalStorage = JSON.parse(localStorage.getItem("user-db"))

   // If there are no previous users they are not allowed to sign in
   if (!allUsersInLocalStorage) {
      return alert("No Users currently in Database")
   }

   // Finding the user from localStorage
   const userToFind = allUsersInLocalStorage.find(user => user.userEmail === userEmail && user.userPassword === userPassword)

   // If the given information doesn't match with any user in database 
   if (!userToFind) {
      return alert('Incorrect Password or Email')
   }

   // If we have gotten to this point it means we have found a user in the data base
   user = userToFind

   // Welcoming user
   alert(`Welcome back to Maunga Club ${userToFind.userFullName}`)

   // Now that users are signed in, They are allowed to find booking dates
   return renderCalendar()
}

const onRegisterSubmit = (event) => {
   event.preventDefault();

   // String values
   const userEmail = document.getElementById("user-email").value
   const userPassword = document.getElementById("user-password").value
   const userFullName = document.getElementById("user-full-name").value
   const userAddress = document.getElementById("user-address").value

   // Image Values
   const userProofOfAddress = document.getElementById("user-proof-of-address").files[0]
   const userProofOfID = document.getElementById("user-proof-of-id").files[0]

   // Checking if every field is filled in
   if (!userEmail || !userPassword || !userFullName || !userAddress || !userProofOfAddress || !userProofOfID) {
      return alert("Please fill all fields")
   }

   // Creating new user Object
   const newUser = {
      "userEmail": userEmail,
      "userPassword": userPassword,
      "userFullName": userFullName,
      "userAddress": userAddress,
      "userProofOfAddress": userProofOfAddress,
      "userProofOfID": userProofOfID,
      "userCreationDate": new Date(),
      "userID": Math.random()
   }

   // Previous data in localStorage
   const prevData = JSON.parse(localStorage.getItem("user-db"))

   if (prevData === null) {
      // If there previousData is null it means there arent any users 
      user = newUser
      alert(`Welcome to Maunga Club ${newUser.userFullName.charAt(0).toUpperCase() + newUser.userFullName.slice(1)} 
Book for your next adventure now!`)
      localStorage.setItem("user-db", JSON.stringify([newUser]))
      return renderCalendar()
   }

   // Checking to see if emails are already taken
   for (let i = 0; i < prevData.length; i++) {
      if (prevData[i].userEmail === newUser.userEmail) {
         return alert("This email is already taken")
      }
   }

   // Adding newUser to previous Data
   prevData.push(newUser);

   // Saving data to localStorage
   localStorage.setItem("user-db", JSON.stringify(prevData))
   user = newUser

   // Alerting user of successfil registration
   alert(`Welcome to Maunga Club ${newUser.userFullName.charAt(0).toUpperCase() + newUser.userFullName.slice(1)} 
Book for your next adventure now!`)

   // Sending user to email Maunga Club provided
   console.log(`Sending ${newUser} to Maunga Club email`)

   // Now that users are signed in, They are allowed to find booking dates
   return renderCalendar()

}

const onResetPassword = (event) => {
   event.preventDefault();

   // Getting user email
   const inputEmail = document.getElementById("reset-password-input").value

   // Checking if the field is filled out
   if (!inputEmail) return alert("Please fill out all fields")

   // Alerting user of the email is has been sent to
   alert(`Reset Password Email has been sent to ${inputEmail}`)

   // Automatically sending user to login page for conveince 
   currentAuthMode = "login"
   renderAuth()
}

const renderAuth = () => {

   // If there isn't an authMode that means the user has just opened the website so return a button for them to sign in
   if (!currentAuthMode) {
      authDiv.innerHTML = `
      <div class="login-container" style="width: 100vw; align-items: center;  justify-content: center; padding-bottom: 10vw;">
         <h1 style="margin: 2vw; animation-name: slide-up; animation-duration: 1s; animation-timing-function: ease-in-out;">SIGN IN TO BOOK</h1>
         <button  class="sign-in-button" onclick="changeAuthMode('login')" style="animation-name: slide-up-extended; animation-duration: 1s; animation-timing-function: ease-in-out;">CLICK TO SIGN IN !</button>
      </div> 
      `
   }

   if (currentAuthMode === "login") {
      authDiv.innerHTML = `
         <div class="login-container" style="width: 65vw; padding: 8vw 7vw;">
            <h1 style="margin: 0; margin-bottom: 3vw;">SIGN IN</h1>
            <form style="width: 100%; display: flex; flex-direction: column;" onsubmit="onLoginSubmit(event)">
               <label for="email"  class="login-label" ">EMAIL</label>
               <input type="email" name="email" placeholder="Email..." class="login-input" id="user-email">
               <label for="password"  class="login-label" >PASSWORD</label>
               <input type="password" name="password" placeholder="************" class="login-input"  id="user-password">
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
         </div>
      `
   } else if (currentAuthMode === "register") {
      authDiv.innerHTML = `
         <div class="login-container" style="width: 100vw; padding: 5vw 7vw; ">
            <h1 style="margin: 0; margin-bottom: 3vw; display: block;">REGISTER</h1>
            <form style="display: flex; flex-direction: column;" onsubmit='onRegisterSubmit(event)'>
               <div style="display: flex; justify-content: space-between;">
                  <div style="display: flex; flex-direction: column; width: 42.5vw;">
                     <label for="email"  class="login-label" style="column-span: none;">EMAIL</label>
                     <input type="email" name="email" placeholder="Example@example.com..." id='user-email' class="login-input" autocomplete="off">
                     <label for="fullName"  class="login-label">Full Name</label>
                     <input type="text" name="fullName" placeholder="John Doe" class="login-input" id='user-full-name'>
                     <label for="proofOfAddress"  class="login-label">Proof of Address</label>
                     <input type="file" "accept="image/*" name="proofOfAddress"  class="input-test"  id='user-proof-of-address'>
                  </div>
                  <div style="display: flex; flex-direction: column; width: 42.5vw;">
                     <label for="password"  class="login-label">PASSWORD</label>
                     <input type="password" name="password" placeholder="************" class="login-input"  id='user-password'>
                     <label for="address"  class="login-label" style="column-span: none;">Address</label>
                     <input type="text" name="text" placeholder="275 Ormiston Road, Auckland 2016..." class="login-input" id='user-address'>
                     <label for="proofOfID"  class="login-label">Proof of ID</label>
                     <input type="file" "accept="image/*" name="proofOfID"  class="input-test"  id='user-proof-of-id'>
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
         </div>
   `
   } else if (currentAuthMode === "resetPassword") {
      authDiv.innerHTML = `
       <div class="login-container" style="width: 65vw; padding: 10vw 7vw; ">
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
      </div>
   `
   }
}

const scrollToID = (id) => {
   document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
   });
};


// Container to append to
const calendarContainer = document.getElementById("booking-auth-div")

const cabins = ["KERERŪ", "PŪKEKO", "KĀKĀPO"]
const monthsOfTheYear = ["January", "Febuary", "Mar", "Apr", "May", "June", "July", "August", "September", "October", "November", "December"]
const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

let dayCounter = 0
let dayHeader = daysOfTheWeek[new Date().getDay()];
let day = new Date().getDate()
let booking = ''
let arrowClicks = 0
let currentMonth = new Date().getMonth();
let curentYear = new Date().getFullYear()
let calendarAnimationDuration = 1000
let calendar = ""

const setDayHeader = (dayID) => {

   // New date will give us a 0 for Sunday, 1 for Monday and so on
   // This helps us convert those numbers into strings we can use for the calendar

   let dayConverted;

   switch (dayID) {
      case 0:
         dayConverted = "Sunday"
         break;
      case 1:
         dayConverted = "Monday"
         break
      case 2:
         dayConverted = "Tuesday"
         break
      case 3:
         dayConverted = "Wednesday"
         break
      case 4:
         dayConverted = "Thursday"
         break
      case 5:
         dayConverted = "Friday"
         break
      case 6:
         dayConverted = "Saturday"
         break
      default:
         break;
   }

   return dayConverted

}

const dateAvailabilities = () => {

   booking = ""

   for (let i = 0; i < cabins.length; i++) {

      // This if statement check to see if the day they have clicked on is not Sunday or Friday or Saturday meaning it is unavailable
      if (dayHeader !== "Sunday" && dayHeader !== "Friday" && dayHeader !== "Saturday") {
         return booking += `
            <div style="background-color: #EF4565; width:100%; animation: booking-slide-up 1s ease-in-out" class='div'>
               UNAVAILABLE DATE
            </div>
         `
      }

      // Simulating booked dates
      // We can use a random number for this because if we click in and out of date there will be different results to its availablity 
      if ((day + i) % 3 > 0) {
         booking += `
            <div style="background-color: #7DB542; animation-duration: 1s;" class="div">
               ${cabins[i]}
               <a href='booking.html' target='blank'>
                  <div class="booking-hover-button">
                     BOOK !
                  </div>
               </a>
            </div>
         `
      } else booking += `
         <div style="background-color: #EF4565; animation-duration: 1s;" class="div">
            ${cabins[i]}
         </div>
      `

   }
}

const handleCalendarDateClick = (dayID, dayParam) => {

   // Warning user that if they click on a previous month, booking may not be available
   if (currentMonth < new Date().getMonth()) {
      alert("Booking for this date may not be available as it has already passed")
   }

   // dayParam is just the date itselt example the 3rd in 3rd of August
   day = dayParam

   // Resetting arrows clicks 
   arrowClicks = 0

   // dayID is the day we have clicked 0 for Sunday etc
   dayHeader = setDayHeader(dayID)
   renderCalendar()
}

const handleBetweenMonthsClick = (id, date, dayParam) => {

   arrowClicks = 0

   if (id === "next") {
      currentMonth += 1
      day = date
      dayHeader = setDayHeader(dayParam)
   } else if (id === "prev") {
      currentMonth -= 1
      day = date
      dayHeader = setDayHeader(dayParam)
   }

   renderCalendar()
}

const handleCalendarArrowClick = (id) => {
   if (id === "next") {
      // To check that to see if we are on december
      if (currentMonth + 1 === 12) {
         // If we are do nothing
         return
      }
      currentMonth += 1
      arrowClicks += 1
   } else if (id === "prev") {

      // To check that to see if we are on december
      if (currentMonth - 1 === -1) {
         // If we are do nothing
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

   // Calendar headers
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

   // Previous Dates
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

   // Dates for current month
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

   // Following months date
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
      <div style="padding: 5vw; display: flex; justify-content: space-between; width: 100vw; height: 57.5vw;">
         <div style="width: 27.5vw; height: 100%; background-color: white; border-radius: 2vw; display: flex; flex-direction: column; justify-content: space-around; padding: 2vw">
            <div style="width: 100%; height: 60%; display: flex; flex-direction: column;" id="calendar-container">
               <div style="width: 100%; display: flex; justify-content: space-between; font-size: 2vw; font-weight: 600; align-items: center; margin-bottom: 2vw; padding: 0vw 1vw;">
                  <h3 style="margin: 0; font-size: 2vw; animation: slide-up 1s ease-in-out; text-transform: uppercase; color: #EF4565;">
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
         </div>

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


const getClosestAvaliableDate = () => {

   const currentMonth = new Date().getMonth()
   const currentYear = new Date().getFullYear()
   const currentDate = new Date().getDate()
   const availableDateDiv = document.getElementById('available-dates')

   let closestAvailableDatesArray = []
   let closestAvailableDates = ''
   let animationDuration = 800
   let counter = 0
   while (currentDate + counter < new Date(currentYear, currentMonth, 0).getDate() && closestAvailableDatesArray.length < 5) {
      const date = new Date(currentYear, currentMonth, currentDate + counter)
      if (date.getDay() === 0 && date.getDate() > currentDate || date.getDay() === 5 && date.getDate() > currentDate || date.getDay() === 6 && date.getDate() > currentDate) {
         closestAvailableDatesArray.push(date)
      }
      counter += 1
   }
   counter = 0
   if (closestAvailableDatesArray.length < 5) {

      while (closestAvailableDatesArray.length < 5) {
         const date = new Date(currentYear, currentMonth + 1, 0 + counter)
         if (date.getDay() === 0 || date.getDay() === 5 || date.getDay() === 6) {
            closestAvailableDatesArray.push(date)
         }
         counter += 1
      }
   }


   for (let i = 0; i < closestAvailableDatesArray.length; i++) {
      const closestDayHeader = setDayHeader(closestAvailableDatesArray[i].getDay())

      if (i === 0 || closestAvailableDatesArray[i].getMonth() > currentMonth) {
         closestAvailableDates += `
            <div class="homepage-booking-container" style="animation-duration: ${animationDuration}ms;">
               <div style="width: 7.5vw; position: absolute; font-size: 1vw;  text-align: center; top: -2vw; font-weight: 700; color: white; display: flex; justify-content: center;">
                  <h3 style='text-transform: uppercase;'>
                     ${monthsOfTheYear[closestAvailableDatesArray[i].getMonth()].substring(0, 3)}
                  </h3>
               </div>
               <h3 style='text-transform: uppercase;'>${closestDayHeader.substring(0, 3)} ${closestAvailableDatesArray[i].getDate()}</h3>
               <p >from</p>
               <h3 >$250</h3>
               <button class="homepage-booking-container-button" onclick="scrollToID('booking-auth-div')">BOOK</button>
               </div>
               `
         animationDuration += 200
      } else {
         closestAvailableDates += `
         <div class="homepage-booking-container" style="animation-duration: ${animationDuration}ms;">
         <div style="width: 7.5vw; position: absolute; font-size: 1vw;  text-align: center; top: -2vw; font-weight: 700; color: white; display: flex; justify-content: center;">
         </div>
         <h3 style='text-transform: uppercase;'>${closestDayHeader.substring(0, 3)} ${closestAvailableDatesArray[i].getDate()}</h3>
         <p >from</p>
         <h3 >$250</h3>
         <button class="homepage-booking-container-button" onclick="scrollToID('booking-auth-div')">BOOK</button>
         </div>
      `}
      animationDuration += 200
   }
   closestAvailableDates += `
   <div class="homepage-booking-container" onclick="scrollToID('booking-auth-div')">
      BOOK NOW !
   </div>`
   availableDateDiv.innerHTML = closestAvailableDates
}


getClosestAvaliableDate()
if (!user) renderAuth();
else renderCalendar();

