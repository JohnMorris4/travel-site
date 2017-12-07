/*jshint esversion: 6  */
import $ from 'jquery';



class Modal {
    constructor() {
        this.modalOpenButton = $(".open-modal");
        this.modal = $(".modal");
        this.closeModalBtn = $(".modal__close");
        this.events();
    }

    events(){
        //click open modal button
        this.modalOpenButton.click(this.openModal.bind(this));
        //pushed the escape key
        $(document).keyup(this.keyPress.bind(this));
        //clicking the close modal button
        this.closeModalBtn.click(this.closeModal.bind(this));
    }
    keyPress(e) {
        if(e.keyCode == 27 ) {
            this.closeModal(); 
        }
    }

    openModal(){
        this.modal.addClass("modal--is-visible");
        return false;
    }
    closeModal(){
        this.modal.removeClass("modal--is-visible");
    }
}

export default Modal;