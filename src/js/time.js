function formatTimestamp(timestamp) {
    const date = new Date(timestamp);

    // Extract the local hours, minutes, and whether it's AM or PM
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Format minutes to be two digits
    const formattedMinutes = minutes.toString().padStart(2, '0');

    // Extract the day, month, and year
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear().toString().slice(-2); // Get last two digits of the year

    return `${hours}:${formattedMinutes}${ampm} ${month}/${day}/${year}`;
}

export default formatTimestamp