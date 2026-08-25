// Want to join, dev button, committee button
export default function Join() {
  return (
    <div
      className="-mt-48 pt-48 -mb-[20%] 
        bg-linear-to-b from-white to-[#BAEBF8] to-70%"
    >
      <div
        className="mx-8 mt-16 
          flex flex-col items-center gap-16 text-ocean-dark"
      >
        <div className="flex flex-col gap-4 text-center">
          <h2 className="text-4xl font-bold">Want to Join?</h2>
          <p className="max-w-200 self-center text-base text-pretty">
            If you're interested in becoming part of <b>Campus Coders Crew</b>,
            please fill out one of the forms below!
          </p>

          <div
            className="flex max-xs:flex-col justify-center gap-4 xs:gap-8
              *:px-12 *:py-4 *:bg-ocean-light *:rounded-lg 
              *:text-sand-light *:font-bold
              *:transition *:duration-300 *:hover:bg-transparent
              *:hover:outline-2 *:hover:text-ocean-light"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrX09hIxXqnUN2AyDaZUBjm1eXCIGRdzYYHEU0FmUBFsngSQ/viewform?usp=publish-editor">
              Join a Dev Team
            </a>
            <a href="https://go.umd.edu/ccc-committees-interest">
              Join a Committee
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
