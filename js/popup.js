const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupClose = document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content'),
        popupData = {
            count: -445,
            speed: 3,
            startPos: -445,
            endPos: 0
        };

    const showPopup = () => {

        popupData.startPos > popupData.endPos ?
            popupData.count -= popupData.speed :
            popupData.count += popupData.speed;
        popupContent.style.transform = `translateY(${popupData.count}px)`;

        if (popupData.startPos > popupData.endPos ?
            popupData.count > popupData.endPos :
            popupData.count < popupData.endPos) {
            requestAnimationFrame(showPopup);
        }
    };

    popupBtn.forEach(elem => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            if (screen.width > 768) {
                popupData.count = popupData.startPos;
                requestAnimationFrame(showPopup);
            }
        });
    });

    popupClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });
};

togglePopUp();