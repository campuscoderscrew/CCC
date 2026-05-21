
// Blue Wave background
export default function Wave() {
    return (
        <section style={{
            background: 'linear-gradient(hsl(190, 85%, 80%), hsl(195, 80%, 95%) 70%)',
            paddingTop: 'calc(3rem + 30px)',
            paddingBottom: 0,
            width: '100%'
        }}>


            {/* waves */}
            <div style={{ display: 'flex', flexDirection: 'column', marginTop: '-210px', position: 'relative', zIndex: 1 }}>
                
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
                <h2 style={{ fontSize: '1.6rem', fontWeight: 'bold', padding: '0.5rem 0' }}>Who are we?</h2>
                <p style={{ textAlign: 'center', maxWidth: '780px', padding: '0.5rem 0' }}>
                    We are a group of students interested in hands on experience in software engineering.
                    Our club takes students out of the typical classroom setting and into a community of thinkers, builders, and dreamers.
                </p>

                
            </section>

            {/* curved divider */}
            <svg style={{ width: '100%', height: '2rem' }} width="600" height="30" viewBox="0 0 600 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="hsl(204, 90%, 25%)" />
                <path d="M600 2.96986V11.6009V29.9976H0V11.6009C42.8364 11.4173 135.33 22.1338 290.592 9.98004C445.855 -2.1737 554.44 -1.51879 600 2.96986Z" fill="#085A91" />
                <path d="M600 14.1388V24.293V29.9975H0V24.293C42.8364 24.077 135.33 36.6846 290.592 22.3861C445.855 8.08758 554.44 8.85806 600 14.1388Z" fill="#FFFFFF" />
            </svg>

        </section>
    )
}