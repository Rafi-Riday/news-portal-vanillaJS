const sortBoolianBtn = (activeBtn, btnClass) => {
    const boolianBtnList = document.getElementsByClassName(btnClass);
    for (const boolianBtn of boolianBtnList) {
        boolianBtn.classList.add('btn-outline');
    }
    activeBtn.classList.remove('btn-outline');
}

// const months = [{ name: 'March', serial: 3, }, { name: 'Jan', serial: 1, }, { name: 'Feb', serial: 2, }, { name: 'Dec', serial: 12, }];
// // sort small to large number
// months.sort((a, b) => a.serial - b.serial);
// // sort large to small number
// months.sort((a, b) => b.serial - a.serial);

const sortNewsByLatest = (dataArray) => {
    return dataArray.sort((a, b) => (new Date(b.author.published_date).getTime()) - (new Date(a.author.published_date).getTime()));
}

