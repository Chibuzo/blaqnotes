const formatDateSince = date => {
    let seconds = Math.floor((new Date() - new Date(date)) / 1000);

    let interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}

const fixDigit = val => {
    return val < 10 ? `0${val}` : val;
}

const formatDate = date => {
    const _date = new Date(date);

    return `${fixDigit(_date.getDate())}/${fixDigit(_date.getMonth() + 1)}/${_date.getFullYear()}`;
}

// for dates in the format dd/MM/YYYY
const reformatDate = date => {
    const dateParts = date.split("/");
    return `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}`;
}

const postIntro = (post, no_of_letters = 500) => {
    if (post.length <= no_of_letters) return post;
    const intro = post.substr(0, no_of_letters - 1);
    return intro.substr(0, intro.lastIndexOf(' ')) + '...';
}

const formatCurrency = val => {
    return parseInt(val).toLocaleString('en-US', { style: 'decimal' });
}

const isEmpty = obj => {
    for (var key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export { formatDateSince, formatDate, reformatDate, postIntro, formatCurrency, isEmpty };