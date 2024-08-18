function generateCalendar() {
    const calendar = document.getElementById("calendar");
    const date = new Date();
	const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
	const contday = date.getDay();
	

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let calendarTable = `
	<table>
		<tr>
			<th colspan="7">${year}<br/>${months[month]}</th>
		</tr>
		<tr>
			<td>${daysOfWeek[contday]}<br/>${day}</td>
		</tr>
	</table>`;
    calendar.innerHTML = calendarTable;
}

document.addEventListener("DOMContentLoaded", generateCalendar);
