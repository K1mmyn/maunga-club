const aboutSlideAndCabinSlideData = [
   {
      companyName: "Maunga Club",
      aboutParagraph:
         "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
   },
   {
      cabinName: "kererū",
      cabinPreviewSRCPath: "images/kereru/cabin_exterior.jpg",
      cabinFeatures: [
         {
            featureIconSRCPath: "images/icons/adults_icon.png",
            featureDescription: "1 - 2",
            featureBubble: "Number of Adults",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Great for Families",
            featureBubble: "Excellent option for small families",
         },
         {
            featureIconSRCPath: "images/icons/children_icon.png",
            featureDescription: "2 - 4",
            featureBubble: "Number of Children",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Great for Groups",
            featureBubble: "Excellent option for small groups",
         },
      ],
      cabinGalleryImgs: [
         {
            cabinImgSRCPath: "images/kereru/adult_bedroom.jpg",
            imgAlt: "kereru-adult-bedroom"
         },
         {
            cabinImgSRCPath: "images/kereru/cabin_exterior.jpg",
            imgAlt: "kereru-exterior"
         },
         {
            cabinImgSRCPath: "images/kereru/kids_bedroom.jpg",
            imgAlt: "kereru-kids-bedroom"
         },
         {
            cabinImgSRCPath: "images/kereru/kitchen.jpg",
            imgAlt: "kereru-kitchen"
         },
      ]
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
      cabinGalleryImgs: [
         {
            cabinImgSRCPath: "images/pukeko/adult_bedroom.jpg",
            imgAlt: "kereru-adult-bedroom"
         },
         {
            cabinImgSRCPath: "images/pukeko/bathroom.jpg",
            imgAlt: "kereru-bathroom"
         },
         {
            cabinImgSRCPath: "images/pukeko/chalet_exterior.jpg",
            imgAlt: "kereru-exterior"
         },
         {
            cabinImgSRCPath: "images/pukeko/chalet_view.jpg",
            imgAlt: "kereru-view"
         },
      ]
   },
   {
      cabinName: "kākāpo",
      cabinPreviewSRCPath: "images/kakapo/cabin_exterior.jpg",
      cabinFeatures: [
         {
            featureIconSRCPath: "images/icons/adults_icon.png",
            featureDescription: "6 - 10",
            featureBubble: "Number of Adults",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Largest",
            featureBubble: "Largest Cabin Available",
         },
         {
            featureIconSRCPath: "images/icons/children_icon.png",
            featureDescription: "20 - 30",
            featureBubble: "Number of Children",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Kitchen, Dining & Living",
            featureBubble: "Best option for large groups",
         },
      ],
      cabinGalleryImgs: [
         {
            cabinImgSRCPath: "images/kakapo/bunk_room.jpg",
            imgAlt: "kereru-bunk-room"
         },
         {
            cabinImgSRCPath: "images/kakapo/cabin_exterior.jpg",
            imgAlt: "kereru-exterior"
         },
         {
            cabinImgSRCPath: "images/kakapo/cabin_view.jpg",
            imgAlt: "kereru-view"
         },
         {
            cabinImgSRCPath: "images/kakapo/hallway.jpg",
            imgAlt: "kereru-hallway"
         },
      ]
   },
];

let counter = 0;
const aboutSlide = document.querySelector("#about-slide");

// About slide & cabin rendering function

const render = () => {
   if (counter === 0) {

      // About slide render

      return aboutSlide.innerHTML = `
         <div style="display: flex; flex-direction: column; justify-content: start; align-items: center; padding: 0vw 5vw;" >
            <h1 style="font-size: 5vw; color: black; " class="about-slide-header">${aboutSlideAndCabinSlideData[counter].companyName}</h1>
            <h3 style="font-size: 1.5vw; text-align: center; color: #5f6c7b;" class="about-slide-paragraph">${aboutSlideAndCabinSlideData[counter].aboutParagraph}</h3>
         </div>
      `
   }

   // Cabin features array
   const featuresArray = aboutSlideAndCabinSlideData[counter].cabinFeatures
   const cabinGalleryImages = aboutSlideAndCabinSlideData[counter].cabinGalleryImgs
   let features = "";
   let gallery = ""
   let animationDuration = 0.8

   for (let i = 0; i < featuresArray.length; i++) {

      // adding divs into features so we can append into aboutslide inner html
      animationDuration += 0.1
      features += `
      <div  class="feature-container" style='animation-duration: ${animationDuration}s'>
         <img src='${featuresArray[i].featureIconSRCPath}' alt="cabin-feature_icon"  class="feature-icon"> 
         <h3 class="feature-description" style='animation-duration: ${animationDuration}s'>
         ${featuresArray[i].featureDescription.toUpperCase()}
         </h3>
         <p  class="feature-container-bubble" >
         ${featuresArray[i].featureBubble}
         </p>
      </div>
      `

   }

   animationDuration = 0.8

   for (let i = 0; i < cabinGalleryImages.length; i++) {
      animationDuration += 0.1
      gallery += `
         <img alt="${cabinGalleryImages[i].imgAlt}" src="${cabinGalleryImages[i].cabinImgSRCPath}" style="width: 12.5vw; height: 12.5vw; animation: booking-slide-up 1s ease-in-out; box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"/>
      `
   }

   return aboutSlide.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center;">
         <div style="display: flex; justify-content: space-around; width: 100%;">
            <img alt="cabin-exterior-photo" src="${aboutSlideAndCabinSlideData[counter].cabinPreviewSRCPath}" style="width: 20vw; height: 20vw; border: 1vw solid white; border-radius: 1.5vw; align-self: flex-end; animation-name: slide-up; animation-duration: 1.2s;"/>
            <div style="width: 30vw; display: flex; flex-direction: column; ">
               <h1 style="color: #094067; font-size: 4vw; margin: 0; margin-bottom: 2vw; animation-name: slide-up; animation-duration: 1s;">${aboutSlideAndCabinSlideData[counter].cabinName.toUpperCase()} !</h1>
               <div style="display: grid; grid-template-columns: 14vw 14vw; column-gap: 2vw; grid-template-rows: 6vw 6vw; row-gap: 2vw;">
                  ${features}
               </div>
            </div>
         </div>
         <div class="cabin-gallery" >
            <h3 style="font-size: 2vw; text-align: center; margin: 0;">Gallery</h3>
            <div style="display: flex; justify-content: space-evenly; align-items: center;">
               ${gallery}
            </div>
         </div>
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
   return render()

}

render()