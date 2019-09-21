try {
    let updated = new Date(document.lastModified);
    let options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    let dateUpdated = updated.toLocaleDateString("en-US", options);
    document.getElementById("lastUpdated").textContent = dateUpdated;
} catch (e) {
    alert("Error with code or your browser does not support Locale.")
}

try {
    let currentDate = new Date;
    let options = {
        year: 'numeric'
    };
    let copyrightYear = currentDate.toLocaleDateString("en-US", options);
    document.getElementById("copyrightYear").textContent = copyrightYear;
} catch (e) {
    alert("Error with code or your browser does not support Locale.")
}