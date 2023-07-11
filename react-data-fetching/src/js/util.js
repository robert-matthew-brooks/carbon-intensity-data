function showElement(id) {
    const el = document.getElementById(id);
    el.classList.remove('hide');
    void el.offsetWidth;
    el.classList.add('show');
}

function hideElement(id) {
    const el = document.getElementById(id);
    el.classList.remove('show');
    el.classList.add('hide');
}

function getFromToDate(daysBack) {
    const fromDate = new Date();
    fromDate.setDate(fromDate.getDate() - daysBack);
    const fromYear = fromDate.getFullYear();
    let fromMonth = fromDate.getMonth() + 1;
    if (fromMonth < 10) fromMonth = '0' + fromMonth;
    let fromDay = fromDate.getDate();
    if (fromDay < 10) fromDay = '0' + fromDay;

    const toDate = new Date();
    toDate.setDate(toDate.getDate() - daysBack + 1);
    const toYear = toDate.getFullYear();
    let toMonth = toDate.getMonth() + 1;
    if (toMonth < 10) toMonth = '0' + toMonth;
    let toDay = toDate.getDate();
    if (toDay < 10) toDay = '0' + toDay;

    return {
        from: {
            year: fromYear,
            month: fromMonth,
            day: fromDay,
            formattedDate: `
                ${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][fromDate.getDay()]}
                ${fromDate.getDate()}
                ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][fromDate.getMonth()]}
                ${fromDate.getFullYear()}
            `
        },
        to: {
            year: toYear,
            month: toMonth,
            day: toDay
        }
    }
}

export {
    showElement,
    hideElement,
    getFromToDate
};