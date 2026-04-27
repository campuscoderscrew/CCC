import React from "react";

// want to join, dev button, committee button
export default function Join() {
  return (
    <div id="join-us"  
      className="px-4 flex flex-col items-center 
        text-base text-center text-ocean-dark"
    >
      <h2 className="text-2xl font-bold">Want to Join?</h2>
      <span className="mt-4 mb-2">
        If you're interested in becoming part of Campus Coders Crew, please fill
        out the form(s) below!
      </span>
      <div
        className="flex gap-4 text-sm text-sand-light font-bold
        *:px-4 *:py-2 *:bg-ocean-dark *:rounded-lg *:cursor-pointer
        *:transition-color *:duration-300 *:ease-out
        *:hover:text-ocean-dark *:hover:bg-sand-light"
      >
        <a href="https://go.umd.edu/ccc-developer-interest">Be a Developer</a>
        <a href="https://go.umd.edu/ccc-committees-interest">
          Join a Committee
        </a>
      </div>
    </div>
  );
}
