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
            featureBubble: "Exellent option for families",
         },
         {
            featureIconSRCPath: "images/icons/children_icon.png",
            featureDescription: "10 - 15",
            featureBubble: "Number of Children",
         },
         {
            featureIconSRCPath: "images/icons/checkmark_icon.png",
            featureDescription: "Great for Groups",
            featureBubble: "Exellent option for groups",
         },
      ],
      cabinAboutParagraph: "",
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



const counter = 1;
const aboutSlide = document.querySelector("#about-slide");

// About slide & cabin rendering function

const render = () => {
   if (counter === 0) {

      console.log("render")

      aboutSlide.innerHTML = `<div style="display: flex; flex-direction: column; justify-content: start; align-items: center; padding: 0vw 5vw;" >
            <h1 style="font-size: 5vw; color: #094067; " class="about-slide-header">${aboutSlideAndCabinSlideData[counter].companyName}</h1>
            <h3 style="font-size: 1.5vw; text-align: center; color: #5f6c7b;" class="about-slide-paragraph">${aboutSlideAndCabinSlideData[counter].aboutParagraph}</h3>
         </div>
      `
      // aboutSlide.innerHTML = "<h1> test </h1>";
   }

   const featuresArray = aboutSlideAndCabinSlideData[counter].cabinFeatures

   let features = "";
   for (let i = 0; i < featuresArray.length; i++) {

      features += `
            <div  class="feature-container">
               <img src='${featuresArray[i].featureIconSRCPath}' alt="checkmark_icon"  class="feature-icon"> 
               <h3  class="feature-description">
                  ${featuresArray[i].featureDescription}
               </h3>
               <p  class="feature-container-bubble" >
               ${featuresArray[i].featureBubble}
               </p>
            </div>
         `
   }

   aboutSlide.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="display: flex; justify-content: space-around; width: 100%;">
               <img alt="cabin-photo" src="${aboutSlideAndCabinSlideData[counter].cabinPreviewSRCPath}" style="width: 20vw; height: 20vw; border: 1vw solid white; border-radius: 1.5vw; align-self: flex-end;"/>
               <div style="width: 30vw; display: flex; flex-direction: column; ">
                  <h1 style="color: #094067; font-size: 4vw; margin: 0; margin-bottom: 2vw; ">${aboutSlideAndCabinSlideData[counter].cabinName.toUpperCase()} !</h1>
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

render()