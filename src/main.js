"use strict";

class minimalGallery{
    constructor(){
        const galleryContainer = document.createElement("div");

        const buttonContainer = document.createElement("div");
        const scrollContainer = document.createElement("div");
        
        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");

        const prevButtonIcon = document.createElement("span");
        const nextButtonIcon = document.createElement("span");

        galleryContainer.classList.add("gallery-container");
        
        buttonContainer.classList.add("button-container");
        scrollContainer.classList.add("scroll-container");

        prevButton.classList.add(["floating-button","prev-button"]);
        nextButton.classList.add(["floating-button","next-button"]);

        prevButtonIcon.classList.add("material-symbols-outlined");
        nextButtonIcon.classList.add("material-symbols-outlined");
        prevButtonIcon.textContent = "arrow_back_ios";
        nextButtonIcon.textContent = "arrow_forward_ios";


    }

    addGalleryItem(){
        const galleryItem = document.createElement("div");
        
    }
    
    addImage(){

    }

    addVideo(){

    }
};