export default function generateCalendarLink({name, date, location, desc, href}){
    const dateFormat = (dateStr) => {
      // Parse the date string
      let date = new Date(dateStr);
  
      // Add one hour to the date
      date.setHours(date.getHours());
  
      // Format the date for the Google Calendar link
      // YYYYMMDDTHHMMSSZ format, ensuring leading zeros where needed
      const pad = (num) => num.toString().padStart(2, '0');
      const formattedDate = `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
  
      return formattedDate;
  };
  

    let calLink = "https://www.google.com/calendar/render?action=TEMPLATE"

    calLink += "&text=" + encodeURIComponent(name)
    calLink += "&dates=" + dateFormat(date?.from)
    calLink += "/" + dateFormat(date?.to)
    calLink +=
      "&details=" + encodeURIComponent(desc + " \nPodrobnosti o závodu najdete na: " + "www.sskslatina.cz" + href)
    calLink += "&location=" + encodeURIComponent(location?.name + ", " + location?.adress + "\n Mapa: " + location?.url)

    return calLink
  }