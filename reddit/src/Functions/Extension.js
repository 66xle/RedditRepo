



function timeAgo(epochSeconds) {
    const now = new Date();
    const epochDate = new Date(epochSeconds * 1000); // Convert seconds to milliseconds

    const diffInMs = now - epochDate;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    const diffInMonths = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 30));
    const diffInYears = Math.floor(diffInMs / (1000 * 60 * 60 * 24 * 365));

    if (diffInYears > 0) {
        return `${diffInYears} ${diffInYears === 1 ? 'year' : 'years'} ago`;
    } else if (diffInMonths > 0) {
        return `${diffInMonths} ${diffInMonths === 1 ? 'month' : 'months'} ago`;
    } else if (diffInDays > 0) {
        return `${diffInDays} ${diffInDays === 1 ? 'day' : 'days'} ago`;
    } else if (diffInHours > 0) {
        return `${diffInHours} ${diffInHours === 1 ? 'hour' : 'hours'} ago`;
    } else {
        return `${diffInMinutes} ${diffInMinutes === 1 ? 'minute' : 'minutes'} ago`;
    }
}


export default timeAgo;