const currentMonth = new Date().getMonth();
const monthsOfTheYear = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const calendarContainer = document.getElementById("calendar-container")

const renderCalendar = () => {
   calendarContainer.innerHTML = `
      <div style="width: 100%; display: flex; justify-content: space-between; font-size: 2vw; font-weight: 600; align-items: center; margin-bottom: 2vw; padding: 0vw 1vw;">
         <h3 style="margin: 0; font-size: 2vw; animation: slide-up 1s ease-in-out; ">
            ${monthsOfTheYear[currentMonth].toUpperCase()}
         </h3>
         <div style="animation: slide-up 1s ease-in-out;">
            <span class="month-arrows">
               &#60;
            </span>
            <span class="month-arrows">
               &#62; 
            </span>
         </div>
      </div>
       <div id="calendar">
         <div style="animation-name: slide-up-extended; animation-duration: 1s; transition-timing-function: ease-in-out;">
            S
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.05s; transition-timing-function: ease-in-out;">
            M
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.1s; transition-timing-function: ease-in-out;">
            T
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.15s; transition-timing-function: ease-in-out;">
            W
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.2s; transition-timing-function: ease-in-out;">
            T
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.25s; transition-timing-function: ease-in-out;">
            F
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.3s; transition-timing-function: ease-in-out;">
            S
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.35s; transition-timing-function: ease-in-out;">
            27
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.4s; transition-timing-function: ease-in-out;">
            28
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.45s; transition-timing-function: ease-in-out;">
            29
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.5s; transition-timing-function: ease-in-out;">
            30
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.55s; transition-timing-function: ease-in-out;">
            31
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.6s; transition-timing-function: ease-in-out;">
            1
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.65s; transition-timing-function: ease-in-out;">
            2
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.7s; transition-timing-function: ease-in-out;">
            3
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.75s; transition-timing-function: ease-in-out;">
            4
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.8s; transition-timing-function: ease-in-out;">
            5
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.85s; transition-timing-function: ease-in-out;">
            6
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.9s; transition-timing-function: ease-in-out;">
            7
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 1.95s; transition-timing-function: ease-in-out;">
            8
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2s; transition-timing-function: ease-in-out;">
            9
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.05s; transition-timing-function: ease-in-out;">
            10
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.1s; transition-timing-function: ease-in-out;">
            11
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.15s; transition-timing-function: ease-in-out;">
            12
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.2s; transition-timing-function: ease-in-out;">
            13
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.25s; transition-timing-function: ease-in-out;">
            14
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.3s; transition-timing-function: ease-in-out;">
            15
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.35s; transition-timing-function: ease-in-out;">
            16
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.4s; transition-timing-function: ease-in-out;">
            17
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.45s; transition-timing-function: ease-in-out;">
            18
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.5s; transition-timing-function: ease-in-out;">
            19
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.55s; transition-timing-function: ease-in-out;">
            20
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.6s; transition-timing-function: ease-in-out;">
            21
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.65s; transition-timing-function: ease-in-out;">
            22
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.7s; transition-timing-function: ease-in-out;">
            23
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.75s; transition-timing-function: ease-in-out;">
            24
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.8s; transition-timing-function: ease-in-out;">
            25
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.85s; transition-timing-function: ease-in-out;">
            26
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.9s; transition-timing-function: ease-in-out;">
            27
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 2.95s; transition-timing-function: ease-in-out;">
            28
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3s; transition-timing-function: ease-in-out;">
            29
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.05s; transition-timing-function: ease-in-out;">
            30
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.1s; transition-timing-function: ease-in-out;">
            1
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.15s; transition-timing-function: ease-in-out;">
            2
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.2s; transition-timing-function: ease-in-out;">
            3
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.25s; transition-timing-function: ease-in-out;">
            4
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.3s; transition-timing-function: ease-in-out;">
            5
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.35s; transition-timing-function: ease-in-out;">
            6
         </div>
         <div style="animation-name: slide-up-extended; animation-duration: 3.4s; transition-timing-function: ease-in-out;">
            7
         </div>
      </div>
   `
}

renderCalendar()