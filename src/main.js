"use strict";

export default class minimalGallery{
    constructor(){
        this.galleryContainer = document.createElement("div");   
        this.galleryContainer.classList.add("gallery-container");

        try{
            this.scrollContainer = new scrollContainer();
        }
        catch(e){
            throw e.name + " - scrollContainer class is undefined.";
        }
        this.galleryContainer.appendChild(this.scrollContainer.getElement());
    }



    getElement(){
        return this.galleryContainer;
    }

    addGalleryItem(){
        const galleryItem = document.createElement("div");
        galleryItem.classList.add("gallery-item");

        try {
            this.scrollContainer.addItem(galleryItem);
        } catch (e) {
            if(e.name == "ReferenceError") throw "ReferenceError - Scroll Container not been created.";
            else throw "UnexpectedError - Gallery Item couldn't be added in scroll container.";
        }
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
        this.contentContainer = document.createElement("div");  
        this.pageIndicator = document.createElement("div");      

        buttonContainer.classList.add("button-container");
        this.elem.classList.add("scroll-container");
        this.contentContainer.classList.add("content-container");
        this.pageIndicator.classList.add("page-indicator");

        prevButton.classList.add("floating-button","prev-button");
        nextButton.classList.add("floating-button","next-button");

        prevButtonIcon.classList.add("material-symbols-outlined");
        nextButtonIcon.classList.add("material-symbols-outlined");
        prevButtonIcon.textContent = "arrow_back_ios";
        nextButtonIcon.textContent = "arrow_forward_ios";


        this.elem.appendChild(buttonContainer);
        this.elem.appendChild(this.contentContainer);
        this.elem.appendChild(this.pageIndicator);

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

    addItem(item){
        if (typeof(item) != 'object') throw "TypeError - only Object type is allowed."
        this.contentContainer.appendChild(item);
        
        const dot = document.createElement("span");
        dot.classList.add("dot");

        this.pageIndicator.appendChild(dot);
    }

    removeItem(){

    }

    prev(){
        this.contentContainer.scrollBy(-this.getElement().clientWidth,0);
    }

    next(){
        this.contentContainer.scrollBy(this.getElement().clientWidth,0);
    }
};