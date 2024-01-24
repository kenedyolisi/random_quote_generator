import { useState } from "react";
import data from "/src/data/quotes.yaml";

export default function App() {
  const [color, setColor] = useState(
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`
  );

  const [quote, setQuote] = useState([
    "Aristotle Onassis",
    "It's in our darkest moments that we must focus to see the light.",
  ]);

  const quotes: string[][] = [];

  for (const author in data) {
    for (const quote of data[author]) {
      quotes.push([author, quote]);
    }
  }

  function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function shuffleArr(arr: any[]) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  }

  function handleClick() {
    setColor(`rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
    shuffleArr(quotes);
    setQuote(quotes[0]);
  }

  return (
    <div
      className="flex flex-col gap-6 justify-center items-center h-screen transition-colors duration-1000"
      style={{ backgroundColor: color }}
    >
      <h1 className="text-5xl font-bold">Random Quote Machine</h1>
      <div className="max-w-4xl p-10 mx-5 bg-white rounded-md" id="quote-box">
        <div
          className="flex flex-col transition-colors duration-[600ms]"
          style={{ color: color }}
        >
          <div className="inline-flex gap-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                width="24"
                height="24"
                fill="currentColor"
              >
                <path d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1z" />
              </svg>
            </span>

            <blockquote id="text">
              <p className="text-2xl">{quote[1]}</p>
            </blockquote>
          </div>

          <p className="self-end  my-3 text-xl" id="author">
            — {quote[0]}
          </p>
        </div>
        <div className="m-2 flex justify-between items-center gap-1">
          <div className="inline-flex gap-3">
            <a
              className="w-fit h-fit p-2 text-white rounded-md transition-colors duration-500"
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
              className="w-fit h-fit p-2 text-white rounded-md transition-colors duration-500"
              id="tweet-quote"
              style={{ backgroundColor: color }}
              href="twitter.com/intent/tweet"
              target="_blank"
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
            className="p-2 text-white rounded-md transition-colors duration-500 active:scale-95"
            id="new-quote"
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
