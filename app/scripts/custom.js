function cloneBacon() {
    const baconContainer = document.querySelector('.baconContainer');
    const imgToClone = baconContainer.querySelector('img');
    const cloned = imgToClone.cloneNode();
    baconContainer.appendChild(cloned);
}