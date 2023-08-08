type AboutData = {
   companyName: string;
   aboutParagraph: string;
}

type CabinFeature = {
   accessoryIconSRCPath: string;
   accessoryName: string;
}

type CabinData = {
  cabinName: "pūkeko" | "kererū" | "kākāpo";
  cabinPreviewSRCPath: string;
  cabinFeatures: CabinFeature[];
  cabinAboutParagraph: string;
};

const aboutSlideAndCabinSlideData: (AboutData | CabinData)[] = [
  {
    companyName: "Maunga Club",
    aboutParagraph:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
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
  {
    cabinName: "pūkeko",
    cabinPreviewSRCPath: "images/pukeko/chalet_exterior.jpg",
    cabinFeatures: [],
    cabinAboutParagraph: "",
  },
];

export default aboutSlideAndCabinSlideData;