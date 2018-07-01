function cloneBacon() {
    const baconContainer = document.getElementsByClassName('baconContainer')[0];
    const imgToClone = baconContainer.getElementsByTagName('img')[0];
    const cloned = imgToClone.cloneNode();
    baconContainer.appendChild(cloned);
}