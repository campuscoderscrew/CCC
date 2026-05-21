import logo from '@assets/logo.png'
import sailboat from '@assets/sailboat.svg'

// Tagline, title, description, sailboat, who are we + logo
export default function Hero() {
    return (
        <section style={{
            background: 'linear-gradient(hsl(190, 85%, 80%), hsl(195, 80%, 95%) 70%)',
            paddingTop: 'calc(3rem + 30px)',
            paddingBottom: 0,
            width: '100%'
        }}>

            {/* text */}
            <div className="min-[600px]:px-8 px-4" style={{ position: 'relative', maxWidth: '1060px', margin: 'auto', zIndex: 2, color: 'hsl(204, 98%, 15%)' }}>
                <label style={{ textTransform: 'capitalize', fontWeight: 'bold' }}>By Students, For Students</label>
                <h1 style={{ fontSize: '3rem', fontWeight: 'bolder', margin: 0 }}>
                    Campus <span style={{ paddingBottom: '.5rem', display: 'inline-block', whiteSpace: 'nowrap' }}>Coders Crew</span>
                </h1>
                <p style={{ paddingBottom: '2rem', width: 'min(450px, 100%)', minWidth: '320px' }}>
                    Empowering students to collaborate, innovate, and grow. Join our community of developers and build websites for various campus groups.
                </p>
            </div>

            {/* sailboat + waves */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-210px', position: 'relative', zIndex: 1 }}>
                <img src={sailboat} alt="sailboat" style={{
                    height: '300px',
                    aspectRatio: '36 / 42',
                    alignSelf: 'flex-end',
                    marginRight: '3.5rem',
                    marginBottom: '-20px',
                    zIndex: 0,
                    animation: 'sailboat-wave 5s ease-in-out infinite',
                    transformOrigin: '20% 20%'
                }} />
                <svg className="waves" style={{
                    color: 'hsl(204, 90%, 25%)',
                    position: 'relative',
                    width: '100%',
                    height: '60px',
                    marginTop: '-24px',
                    marginBottom: '-8px'
                }}
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 35 150 17"
                    preserveAspectRatio="none"
                    shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-3 88-3s 58 3 88 3 58-3 88-3 58 3 88 3 v44h-352z" />
                    </defs>
                    <g className="wave-parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(6, 89, 145, 0.6)" />
                        <use xlinkHref="#gentle-wave" x="48" y=".5" fill="rgba(6, 89, 145, 0.4)" />
                        <use xlinkHref="#gentle-wave" x="48" y="1" fill="rgba(6, 89, 145, 0.2)" />
                        <use xlinkHref="#gentle-wave" x="48" y="1.5" fill="hsl(204, 90%, 25%)" />
                    </g>
                </svg>
            </div>

            {/* who are we */}
            <section id="about" style={{
                backgroundColor: 'hsl(204, 90%, 25%)',
                color: 'hsl(47, 80%, 95%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem 2rem 0.5rem'
            }}>
                <img src={logo} alt="Campus Coders Crew Logo" style={{ height: '64px', width: '64px' }} />
                <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', padding: '0.5rem 0' }}>Who are we?</h2>
                <p style={{ textAlign: 'center', maxWidth: '780px', padding: '0.5rem 0' }}>
                    We are a group of students interested in hands on experience in software engineering.
                    Our club takes students out of the typical classroom setting and into a community of thinkers, builders, and dreamers.
                </p>

                {/* goals */}
                <div style={{ margin: '1rem 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                    <div style={{ width: '8rem', margin: '1rem 0.5rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="hsl(190, 85%, 80%)">
                            <path d="M17 22q-.425 0-.712-.288T16 21v-1.25q-.975-.325-1.75-.987t-1.225-1.588q-.2-.375 0-.75t.6-.55q.35-.15.7.025t.55.525q.4.725 1.1 1.15T17.5 18h3q.625 0 1.063.438T22 19.5V21q0 .425-.288.713T21 22zm2-5q-.825 0-1.412-.587T17 15t.588-1.412T19 13t1.413.588T21 15t-.587 1.413T19 17M3 11q-.425 0-.712-.288T2 10V8.5q0-.625.438-1.062T3.5 7h3q.825 0 1.525-.425t1.1-1.15q.2-.35.55-.562t.725-.088q.425.125.65.475t.075.725Q10.7 7 9.875 7.7T8 8.75V10q0 .425-.288.713T7 11zm2-5q-.825 0-1.412-.587T3 4t.588-1.412T5 2t1.413.588T7 4t-.587 1.413T5 6m5 8q-.425 0-.712-.288T9 13q0-3.35 2.325-5.675T17 5q.425 0 .713.287T18 6t-.288.713T17 7q-2.5 0-4.25 1.75T11 13q0 .425-.288.713T10 14m4 0q-.425 0-.712-.288T13 13q0-1.65 1.175-2.825T17 9q.425 0 .713.288T18 10t-.288.713T17 11q-.825 0-1.412.588T15 13q0 .425-.288.713T14 14"/>
                        </svg>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Learning</h3>
                    </div>
                    <div style={{ width: '8rem', margin: '1rem 0.5rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="hsl(190, 85%, 80%)">
                            <path d="M3 21h2v-6H3zm9.46 1l-2.93-.64l-2.93-.69a.73.73 0 0 1-.43-.26a.7.7 0 0 1-.17-.47v-4a.77.77 0 0 1 .17-.47a.8.8 0 0 1 .43-.26l4.78-.59l4.79-.6l.15.56l.15.55a.93.93 0 0 1-.15.52a.9.9 0 0 1-.4.37l-2 .5l-2 .5l1.62.66l1.63.65l2.27-.64l2.21-.69a.78.78 0 0 1 .58.08a.73.73 0 0 1 .36.46l.19.77l.2.76a.77.77 0 0 1-.08.56a.78.78 0 0 1-.46.35l-3.63 1l-3.63 1a1.4 1.4 0 0 1-.36 0a1.1 1.1 0 0 1-.36.02M9 4L7 6L5 8l2 2l2 2l.7-.7l.7-.7l-1.3-1.3L7.8 8l1.3-1.3l1.3-1.3l-.7-.7zm6 0l-.7.7l-.7.7l1.3 1.3L16.2 8l-1.3 1.3l-1.3 1.3l.7.7l.7.7l2-2l2-2l-2-2z"/>
                        </svg>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Service</h3>
                    </div>
                    <div style={{ width: '8rem', margin: '1rem 0.5rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="hsl(190, 85%, 80%)">
                            <path d="M8 11.75V7.5q0-.625.438-1.062T9.5 6t1.063.438T11 7.5v4.25q0 .625-.437 1.063T9.5 13.25t-1.062-.437T8 11.75m5-.225V3.5q0-.625.438-1.062T14.5 2t1.063.438T16 3.5v8.025q0 .75-.462 1.125t-1.038.375t-1.037-.375T13 11.525m-10 3.45V11.5q0-.625.438-1.062T4.5 10t1.063.438T6 11.5v3.475q0 .75-.462 1.125t-1.038.375t-1.037-.375T3 14.975m2.4 6.075q-.65 0-.913-.612T4.7 19.35l4.1-4.1q.275-.275.663-.3t.687.25L13 17.65l5.6-5.6H18q-.425 0-.712-.288T17 11.05t.288-.712t.712-.288h3q.425 0 .713.288t.287.712v3q0 .425-.288.713T21 15.05t-.712-.288T20 14.05v-.6l-6.25 6.25q-.275.275-.663.3t-.687-.25L9.55 17.3L6.1 20.75q-.125.125-.312.213t-.388.087"/>
                        </svg>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', marginTop: '1rem' }}>Opportunity</h3>
                    </div>
                </div>
            </section>

            {/* curved divider */}
            <svg style={{ width: '100%', height: '2rem' }} width="600" height="30" viewBox="0 0 600 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="hsl(204, 90%, 25%)" />
                <path d="M600 2.96986V11.6009V29.9976H0V11.6009C42.8364 11.4173 135.33 22.1338 290.592 9.98004C445.855 -2.1737 554.44 -1.51879 600 2.96986Z" fill="#085A91" />
                <path d="M600 14.1388V24.293V29.9975H0V24.293C42.8364 24.077 135.33 36.6846 290.592 22.3861C445.855 8.08758 554.44 8.85806 600 14.1388Z" fill="#F5EED6" />
            </svg>

        </section>
    )
}