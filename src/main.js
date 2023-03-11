"use strict";

export default class minimalGallery{
    constructor(){
        this.galleryContainer = document.createElement("div");   

        this.galleryContainer.classList.add("gallery-container");

        this.scrollContainer = new scrollContainer().getElement();

        this.galleryContainer.appendChild(this.scrollContainer);
    }

    getElement(){
        return this.galleryContainer;
    }

    addGalleryItem(){
        const galleryItem = document.createElement("div");

        galleryItem.classList.add("gallery-item");
        
        this.scrollContainer.appendChild(galleryItem);
    }
    
    addImage(){

    }

    addVideo(){

    }
};

class scrollContainer{
    constructor(){
        this.elem = document.createElement("div");

        const prevButton = document.createElement("button");
        const nextButton = document.createElement("button");

        const prevButtonIcon = document.createElement("span");
        const nextButtonIcon = document.createElement("span");

        const buttonContainer = document.createElement("div");

                
        buttonContainer.classList.add("button-container");
        this.elem.classList.add("scroll-container");

        prevButton.classList.add("floating-button","prev-button");
        nextButton.classList.add("floating-button","next-button");

        prevButtonIcon.classList.add("material-symbols-outlined");
        nextButtonIcon.classList.add("material-symbols-outlined");
        prevButtonIcon.textContent = "arrow_back_ios";
        nextButtonIcon.textContent = "arrow_forward_ios";


        this.elem.appendChild(buttonContainer);

        buttonContainer.appendChild(prevButton);
        buttonContainer.appendChild(nextButton);

        prevButton.appendChild(prevButtonIcon);
        nextButton.appendChild(nextButtonIcon);

        prevButton.addEventListener(
            "click",
            ()=>{
                this.prev();
            }
        );
        nextButton.addEventListener(
            "click",
            ()=>{
                this.next();
            }
        );
    }

    getElement(){
        return this.elem;
    }

    prev(){
        this.getElement().scrollBy(-this.getElement().clientWidth,0);
    }

    next(){
        this.getElement().scrollBy(this.getElement().clientWidth,0);
    }
};