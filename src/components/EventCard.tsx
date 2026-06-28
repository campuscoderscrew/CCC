import emailIcon from "../assets/Email.png"
import locationIcon from "../assets/Location.png"

type EventCardProps = {
    date: string
    time: string
    title: string
    tags: string[]
    description: string
    contact: string
    location: string
}
const tagStyles: Record<string, { backgroundColor: string, border: string }> = {
    "Club Meeting":  { backgroundColor: '#FAF7EC', border: '1px solid #E2D8B5' },
    "Open Meeting":  { backgroundColor: '#CBF0F9', border: '1px solid #8BBDC9' },
    "Team Meeting":  { backgroundColor: '#F3F3F3', border: '1px solid #99C5CF' },
}

export default function EventCard({ date, time, title, tags, description, contact, location }: EventCardProps) {

    // opens Google Calendar
    const handleAddToCalendar = () => {
        const year = new Date().getFullYear()
        const [startTimeStr, endTimeStr] = time.split(" - ")

        const parseDateTime = (dateStr: string, timeStr: string) => {
            const naiveDate = new Date(`${dateStr} ${year} ${timeStr}`)
            const tzDate = new Date(naiveDate.toLocaleString("en-US", { timeZone: "America/New_York" }))
            const utcDate = new Date(naiveDate.toLocaleString("en-US", { timeZone: "UTC" }))
            const offset = utcDate.getTime() - tzDate.getTime()
            return new Date(naiveDate.getTime() + offset)
        }

        const start = parseDateTime(date, startTimeStr)
        const end = parseDateTime(date, endTimeStr)

        const formatGCalDate = (d: Date) => {
            return d.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z"
        }

        const params = new URLSearchParams({
            action: "TEMPLATE",
            text: title,
            dates: `${formatGCalDate(start)}/${formatGCalDate(end)}`,
            details: `${description}\n\nContact: ${contact}`,
            location: location,
        })

        window.open(`https://calendar.google.com/calendar/render?${params.toString()}`, "_blank")
    }

    return (
        <div style={{
            backgroundColor: '#FFFFFD',
            borderRadius: '18px',
            boxShadow: '0px 0px 13px #EAEAEA',
            padding: '2rem',
            width: '320px',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
        }}>
            {/* date */}
            <p style={{
                fontFamily: 'IBM Plex Sans, sans-serif',
                fontWeight: 'bold',
                color: 'rgba(1, 50, 83, 0.6)',
                margin: 0,
                fontSize: '1.25rem',
                textAlign: 'center'
            }}> {date} · {time} </p>
            {/* title */}
            <h3 style={{
                fontFamily: 'Instrument Sans, sans-serif',
                fontWeight: 'bold',
                color: '#013253',
                margin: 0,
                fontSize: '1.5rem',
                lineHeight: '1.3'
            }}> {title} </h3>

            {/* tags */}
            <div style={{ display: 'flex', flexDirection: 'row', gap: '0.5rem', flexWrap: 'wrap' }}>
                {tags.map((tag, i) => (
                    <span key={i} style={{
                        ...(tagStyles[tag] ?? { backgroundColor: '#F3F3F3', border: '1px solid #99C5CF' }),
                        borderRadius: '80px',
                        padding: '0.35rem 1rem',
                        fontFamily: 'Kumbh Sans, sans-serif',
                        fontSize: '0.85rem',
                        whiteSpace: 'nowrap',
                    }}> {tag} </span>
                ))}
            </div>
            {/* description */}
            <p style={{
                fontFamily: 'Instrument Sans, sans-serif',
                color: '#013253',
                margin: 0,
                marginTop: '0.5rem',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                paddingBottom: '1rem'
            }}> {description} </p>

            {/* contact + location */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <img src={emailIcon} alt="email" style={{ width: '1.4rem', height: '1.4rem' }} />
                <a href={`mailto:${contact}`} style={{ fontFamily: 'Instrument Sans, sans-serif', color: '#013253', fontSize: '0.9rem', textDecoration: 'none' }}>
                    {contact}
                </a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '-0.5rem' }}>
                <img src={locationIcon} alt="location" style={{ width: '1.4rem', height: '1.4rem' }} />
                <span style={{ fontFamily: 'Instrument Sans, sans-serif', color: '#013253', fontSize: '0.9rem' }}>
                    {location}
                </span>
            </div>

            {/* calendar btn */}
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button onClick={handleAddToCalendar} style={{
                    backgroundColor: '#09578A',
                    color: '#FEFCF2',
                    fontFamily: 'Kumbh Sans, sans-serif',
                    borderRadius: '10px',
                    border: 'none',
                    marginTop: '-0.5rem',
                    padding: '0.6rem 1.5rem',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: 'bold'
                }}> Add to Calendar </button>
            </div>

        </div>
    )
}