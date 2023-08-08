// About slide local databas

// cabinName: "pūkeko" | "kererū" | "kākāpo";
// cabinPreviewSRCPath: string;
// cabinFeatures: CabinFeature[];
// cabinAboutParagraph: string;

// accessoryIconSRCPath: string;
// accessoryName: string;
// accessoryBubble: string;

const aboutSlideAndCabinSlideData = [
   {
      companyName: "Maunga Club",
      aboutParagraph:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
   },
   {
      cabinName: "pūkeko",
      cabinPreviewSRCPath: "images/pukeko/chalet_exterior.jpg",
      cabinFeatures: [
         {
            featureIconSRCPath: "images/icons/adults_icon.png",
            featureDescription: "2 - 6",
            featureBubble: "Number of Adults",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Great for Families",
            featureBubble: "Excellent option for families",
         },
         {
            featureIconSRCPath: "images/icons/children_icon.png",
            featureDescription: "10 - 15",
            featureBubble: "Number of Children",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Great for Groups",
            featureBubble: "Excellent option for groups",
         },
      ],
      cabinAboutParagraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
   },
   {
      cabinName: "kererū",
      cabinPreviewSRCPath: "images/kereru/cabin_exterior.jpg",
      cabinFeatures: [],
      cabinAboutParagraph: "",
   },
   {
      cabinName: "kākāpo",
      cabinPreviewSRCPath: "images/kakapo/cabin_exterior.jpg",
      cabinFeatures: [],
      cabinAboutParagraph: "",
   },
];



let counter = 0;
const aboutSlide = document.querySelector("#about-slide");

// About slide & cabin rendering function

const render = () => {
   if (counter === 0) {

      // About slide render

      aboutSlide.innerHTML = `<div style="display: flex; flex-direction: column; justify-content: start; align-items: center; padding: 0vw 5vw;" >
            <h1 style="font-size: 5vw; color: #094067; " class="about-slide-header">${aboutSlideAndCabinSlideData[counter].companyName}</h1>
            <h3 style="font-size: 1.5vw; text-align: center; color: #5f6c7b;" class="about-slide-paragraph">${aboutSlideAndCabinSlideData[counter].aboutParagraph}</h3>
         </div>
      `
   }

   // Cabin features array

   const featuresArray = aboutSlideAndCabinSlideData[counter].cabinFeatures
   let features = "";
   let animationDuration = 0.8

   for (let i = 0; i < featuresArray.length; i++) {

      // adding divs into features so we can append into aboutslide inner html
      animationDuration += 0.1

      features += `
            <div  class="feature-container" style='animation-duration: ${animationDuration}s'>
               <img src='${featuresArray[i].featureIconSRCPath}' alt="checkmark_icon"  class="feature-icon"> 
               <h3 class="feature-description" style='animation-duration: ${animationDuration}s'>
                  ${featuresArray[i].featureDescription.toUpperCase()}
               </h3>
               <p  class="feature-container-bubble" >
               ${featuresArray[i].featureBubble}
               </p>
            </div>
         `

   }

   console.log(features)

   aboutSlide.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="display: flex; justify-content: space-around; width: 100%;">
               <img alt="cabin-photo" src="${aboutSlideAndCabinSlideData[counter].cabinPreviewSRCPath}" style="width: 20vw; height: 20vw; border: 1vw solid white; border-radius: 1.5vw; align-self: flex-end; animation-name: slide-up; animation-duration: 1.2s;"/>
               <div style="width: 30vw; display: flex; flex-direction: column; ">
                  <h1 style="color: #094067; font-size: 4vw; margin: 0; margin-bottom: 2vw; animation-name: slide-up; animation-duration: 1s;">${aboutSlideAndCabinSlideData[counter].cabinName.toUpperCase()} !</h1>
                  <div style="display: grid; grid-template-columns: 14vw 14vw; column-gap: 2vw; grid-template-rows: 6vw 6vw; row-gap: 2vw;">
                     ${features}
                  </div>
               </div>
            </div>
            <p  class="cabin-about-paragraph">
               ${aboutSlideAndCabinSlideData[counter].cabinAboutParagraph}
            </p>
         </div> 
   `
}

const counterFunc = (id) => {

   // Adding or minusing counter based on parameter given
   if (id === "+1") {
      counter += 1
   } else { counter -= 1 }

   // If we are at the end of the list reset to beginning 
   if (counter === 4) {
      counter = 0
   } else if (counter === -1) counter = 3 // if we are at the start of the list a try to go back we want to go to the back of the list

   // render based on new counter
   render()

}

render()