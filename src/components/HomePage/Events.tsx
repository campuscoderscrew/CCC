// Event google calendar
export default function Events() {
  // Do not format string across multiple lines. Google API does not recognize
  // split string.
  const calendarLink = `https://calendar.google.com/calendar/embed?src=a0b185ca42bd1505d33e1843cdd0ddfc2464e5668087ad5999abd39d04c0fac0%40group.calendar.google.com&ctz=America%2FNew_York`;

  return (
    <>
      <div id="events"  
        className="p-8 flex flex-col gap-4 items-center bg-sand-dark 
        text-base text-ocean-dark "
      >
        <h2 className="text-2xl font-bold">Upcoming Events</h2>
        <span className="max-w-200">
          We hold general body meetings every week, development teams standups,
          and committee meetings every week. Feel free to drop in for a meeting
          (please email us for meeting links) or reach out to us!
        </span>
        <iframe
          className="size-full max-w-200 h-150 rounded-lg"
          src={calendarLink}
        ></iframe>
      </div>

      <svg
        className="bg-sand-light"
        viewBox="0 0 600 30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="fill-[#F9F3DC]"
          d="M0 27.0282V18.3972V0.0004673H600V18.3972C557.164 18.5807 464.67 
          7.86426 309.408 20.018C154.145 32.1717 45.56 31.5168 0 27.0282Z"
        />
        <path
        
          className="fill-sand-dark"
          d="M0 15.8592V5.70506V0.00053215H600V5.70506C557.164 5.92103 464.67 
          -6.68657 309.408 7.61195C154.145 21.9105 45.56 21.14 0 15.8592Z"
          
        />
      </svg>
    </>
  );
}
