const slides = document.querySelectorAll(`.slide`);

function removeClass() {
    slides.forEach((slide) => {
        slide.classList.remove(`active`);
    });
}

function changerBgBody(color) {
    document.body.style.cssText = `
        background-color: ${color};
        transition: background 500ms ease-in;
    `;
}

slides.forEach((slide) => {
    slide.addEventListener(`click`, (e) => {

        switch (slide.getAttribute(`data-car`)) {
            case `ferrari`:
                changerBgBody(`#8E0103`);
                break;
            case `lamborghini`:
                changerBgBody(`#E86D02`);
                break;
            case `camaro`:
                changerBgBody(`#313E54`);
                break;
            case `aston`:
                changerBgBody(`#7E5B50`);
                break;
            case `tesla`:
                changerBgBody(`#580206`);
                break;
            default:
                changerBgBody(`#111`);
        }

        removeClass();
    
        slide.classList.add(`active`);
    });
});

function changeBody() {
    slides.forEach((slide) => {
        if (slide.className === `slide active`) {
            switch (slide.getAttribute(`data-car`)) {
                case `ferrari`:
                    changerBgBody(`#8E0103`);
                    break;
                case `lamborghini`:
                    changerBgBody(`#E86D02`);
                    break;
                case `camaro`:
                    changerBgBody(`#313E54`);
                    break;
                case `aston`:
                    changerBgBody(`#7E5B50`);
                    break;
                case `tesla`:
                    changerBgBody(`#580206`);
                    break;
                default:
                    changerBgBody(`#111`);
            }
        }
    });
}

changeBody();