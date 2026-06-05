import NavBar from "../components/Navbar"
import Contact from "../components/HomePage/Contact"
import Footer from "../components/HomePage/Footer"
import circle_img from "../assets/circle.png"
import four_sharks from "@assets/four_sharks.png";
import Teams from "../components/Teams";
import Committees from "../components/Committees";


export default function Crew(){
    return(
        <>
            <NavBar/>
        
            {/* header */}
            <section style={{
                background: 'linear-gradient(hsl(190, 85%, 80%), hsl(195, 80%, 95%) 70%)',
                paddingTop: 'calc(5rem + 30px)',
                paddingBottom: 'calc(15rem + 30px)',
                width: '100%'
            }}>
                <h1 className="text-4xl font-bold text-center font-sans">Our Crew</h1>
            </section>

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
                
                <img
                    className="-z-1 absolute object-fit place-self-center animate-slow-spin"
                    src={four_sharks}
                />
            </div>

            {/* page contents */}
            <div id="about" style={{
                backgroundColor: 'hsl(204, 90%, 25%)',
                color: 'hsl(47, 80%, 95%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '2rem 2rem 0.5rem'
            }}>
                <h1 className="text-[3vw] font-bold">Spring 2026</h1>
                <h1 className="text-[#CBF0F9] text-[3vw] font-bold">Executive Board</h1>

                <div className="flex flex-row items-center justify-center w-[80vw] mt-5">
                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <img src={circle_img} alt="Tony" className="w-[10vw] mx-4 mb-2"/>
                        <p className="text-[1.5vw] text-center text-[#E2D8B5]">President</p>
                        <p className="text-[1.5vw] text-center">Brennen Le</p>
                    </div>

                    <div className="flex flex-col items-center w-[15vw] p-2 m-4">
                        <img src={circle_img} alt="Tony" className="w-[10vw] mx-4 mb-2"/>
                        <p className="text-[1.5vw] text-center text-[#E2D8B5]">Treasurer</p>
                        <p className="text-[1.5vw] text-center">Franco Molinari</p>
                    </div>
                </div>

                <h1 className="text-[3vw] font-bold mt-5">Teams</h1>
                
                <div>
                    <Teams />
                    <Committees />
                </div>
                
            </div>


            {/* curved divider */}
            <svg style={{ width: '100%', height: '2rem' }} width="600" height="30" viewBox="0 0 600 30" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <rect width="100%" height="100%" fill="hsl(204, 90%, 25%)" />
                <path d="M600 2.96986V11.6009V29.9976H0V11.6009C42.8364 11.4173 135.33 22.1338 290.592 9.98004C445.855 -2.1737 554.44 -1.51879 600 2.96986Z" fill="#085A91" />
                <path d="M600 14.1388V24.293V29.9975H0V24.293C42.8364 24.077 135.33 36.6846 290.592 22.3861C445.855 8.08758 554.44 8.85806 600 14.1388Z" fill="hsl(195, 80%, 95%)" />
            </svg>

            <div className="py-4 space-y-8 bg-linear-to-b from-sky-light to-sky-dark">
                
                <Contact />
                <Footer />
                
            </div>
        </>
    )
}