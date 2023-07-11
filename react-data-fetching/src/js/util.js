function getDateDetails(daysBack) {
    const date = new Date();
    date.setDate(date.getDate() - daysBack);
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let day = date.getDate();
    if (day < 10) day = '0' + day;

    const formattedDate = `
        ${['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()]}
        ${date.getDate()}
        ${['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'][date.getMonth()]}
        ${date.getFullYear()}
    `.replace(/[ \n]+/g, ' ').slice(1, -1);

    const shortDate = `
        ${date.getDate()}
        ${['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'][date.getMonth()]}
    `.replace(/[ \n]+/g, ' ').slice(1, -1);

    return {
        year,
        month,
        day,
        formattedDate,
        shortDate
    }
}

function getApiData(daysBack) {
    const from = getDateDetails(daysBack);
    const to = getDateDetails(daysBack - 1);

    const dateFrom = `${from.year}-${from.month}-${from.day}T00:00Z`;
    const dateTo = `${to.year}-${to.month}-${to.day}T00:00Z`;

    return fetch(`https://api.carbonintensity.org.uk/intensity/${dateFrom}/${dateTo}`)
    .then(response => {
        return response.json();
    })
    .then(({ data }) => {
        return data;
    });
}

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

export {
    getDateDetails,
    getApiData,
    showElement,
    hideElement
};