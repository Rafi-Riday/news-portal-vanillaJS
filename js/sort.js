const sortBoolian = (activeBtn) => {
    const boolianBtnList = document.getElementsByClassName('boolian-btn');
    for (const boolianBtn of boolianBtnList) {
        boolianBtn.classList.add('btn-outline');
    }
    activeBtn.classList.remove('btn-outline');
}
