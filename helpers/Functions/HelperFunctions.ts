export const formatNumber = (number: number) => {
    if (isNaN(number)) return number;
    if (number < 9999) return (number / 1000).toFixed(2) + 'k';
    if (number < 1000000) return (number / 1000).toFixed(2) + 'K';
    if (number < 10000000) return (number / 1000000).toFixed(2) + 'M';
    if (number < 1000000000) return (number / 1000000).toFixed(2) + 'M';
    if (number < 1000000000000) return (number / 1000000000).toFixed(2) + 'B';
    return '1T+';
};

export const percentageCalc = (today: number, yesterday: number) => {
    const yesterdayCase = today - yesterday;
    const yesterdayPercent = parseFloat(((yesterdayCase / today) * 100).toFixed(2));
    return yesterdayPercent;
    // return Math.abs(yesterdayPercent);
};

export const numberWithCommas = (number: number | {}) => {
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : number;
};

export const updatedTime = (updatedTime: number) => {
    const date = new Date(updatedTime);
    const minutes = date.getMinutes() % 60;
    const hour = date.getHours();
    //? current time
    const current = Math.abs(+new Date() - +date);
    const timesAgo = Math.round(current / 60000);
    // // console.log("new" + " " + timesAgo);
    // if (timesAgo > 60) {
    // }
    // let time = hour >= 12 ? 'pm' : 'am';
    // minutes < 10 ? (minutes = `0${minutes}`) : minutes;
    // hour > 12 ? (hour -= 12) : hour < 10 ? `0${hour}` : hour;
    // // console.log(`${hour}:${minutes}${time}`);
    // // DOM.updatedTime.innerHTML = `${hour}:${minutes}${time}`;
    return timesAgo;
};
