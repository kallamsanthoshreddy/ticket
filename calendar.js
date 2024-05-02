document.addEventListener('DOMContentLoaded', function () {
    const calendarContainer = document.getElementById('calendar');

    // Get today's date
    const today = new Date();

    // Render calendar
    renderCalendar(today);

    function renderCalendar(date) {
        const year = date.getFullYear();
        const month = date.getMonth();

        // Get the first day of the month
        const firstDayOfMonth = new Date(year, month, 1);

        // Get the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Start building the HTML for the calendar
        let html = '<table>';

        // Month and Year header
        html += '<caption>' + monthNames[month] + ' ' + year + '</caption>';

        // Table headings (days of the week)
        html += '<thead><tr>';
        for (let i = 0; i < 7; i++) {
            html += '<th>' + dayNames[i] + '</th>';
        }
        html += '</tr></thead>';

        // Table body
        html += '<tbody><tr>';

        // Fill in the days
        let dayCount = 1;
        for (let i = 0; i < 42; i++) {
            const currentDay = new Date(year, month, dayCount);
            if (i === firstDayOfMonth.getDay()) {
                html += '<td>' + dayCount + '</td>';
                dayCount++;
            } else if (dayCount > 1 && dayCount <= daysInMonth) {
                html += '<td>' + dayCount + '</td>';
                dayCount++;
            } else {
                html += '<td></td>';
            }

            if (i % 7 === 6 && i < 41) {
                html += '</tr><tr>';
            }
        }

        html += '</tr></tbody>';
        html += '</table>';

        // Append the calendar HTML to the container
        calendarContainer.innerHTML = html;
    }

    // Arrays for month and day names
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
});
