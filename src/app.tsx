import { useState } from "react";
import data from "/src/data/quotes.yaml";

export default function App() {
  const [color, setColor] = useState(
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  );

  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function handleClick() {
    setColor(`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
  }

  return (
    <div
      className="flex justify-center items-center h-screen"
      style={{ backgroundColor: color }}
    >
      <div className="p-10 bg-white rounded-md">
        <div className="flex flex-col" style={{ color: color }}>
          <div className="inline-flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
            </svg>
            <blockquote>
              <p className="text-2xl">
                The Only way to do work is to love what you do.
              </p>
            </blockquote>
          </div>

          <p className="self-end text-xl">— Steve Jobs</p>
        </div>
        <div className="m-2 flex justify-between items-center">
          <div className="inline-flex gap-3">
            <a
              className="w-fit h-fit p-2 text-white rounded-md"
              style={{ backgroundColor: color }}
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
              </svg>
            </a>
            <a
              className="w-fit h-fit p-2 text-white rounded-md"
              style={{ backgroundColor: color }}
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="16"
                height="16"
                fill="currentColor"
              >
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
              </svg>
            </a>
          </div>
          <button
            className="p-3 text-white rounded-md"
            style={{ backgroundColor: color }}
            type="button"
            onClick={() => {
              handleClick();
            }}
          >
            New quote
          </button>
        </div>
      </div>
    </div>
  );
}
