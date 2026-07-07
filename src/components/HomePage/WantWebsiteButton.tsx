import sharkCircle from "@assets/shark-circle.png";


export default function WantWebsiteButton(){
    return(
        <>
            <div
                className="z-0 relative max-w-250 w-full p-8 grid overflow-hidden
                bg-ocean-light rounded-lg text-sand-light"
                >
                <div className="flex flex-col gap-2 items-center">
                    <h3 className="text-xl font-bold">Want a Website?</h3>
                    <span>Please fill out the form below, and we'll reach out!</span>

                    <div
                    className="flex gap-4 text-sm text-sand-light font-bold
                    *:px-4 *:py-2 *:bg-ocean-dark *:rounded-lg *:cursor-pointer
                    *:transition-color *:duration-300 *:ease-out
                    *:hover:text-ocean-dark *:hover:bg-sand-light"
                    >
                    <a href="https://go.umd.edu/CCC-website-request">Request Form</a>
                    </div>
                </div>

                <img
                    className="-z-1 absolute w-4/5 place-self-center animate-slow-spin"
                    src={sharkCircle}
                />
            </div>
        </>
    )
}