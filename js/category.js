const categoryBtnActivate = (activeBtn) => {
    const categoryBtnList = document.getElementsByClassName('category-btn');
    for (const categoryBtn of categoryBtnList) {
        categoryBtn.classList.remove('btn-info');
    }
    activeBtn.classList.add('btn-info');
    document.title = `Daily-Dose | ${activeBtn.innerText}`;
}
