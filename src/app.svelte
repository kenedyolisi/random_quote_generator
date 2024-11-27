<script lang="ts">
  import { random, shuffleArr } from "./utils/index.svelte";
  import quotesData from "/src/data/quotes.yaml";

  let quotes: Array<[string, string]> = [];

  for (const author in quotesData) {
    for (const quote of quotesData[author]) {
      quotes.push([author, quote]);
    }
  }

  let color = $state(
    `hsl(${random(0, 360)} ${random(0, 100)}%, ${random(0, 100)}%)`,
  );
  let quote = $state(quotes[random(0, quotes.length - 1)]);

  function handleClick() {
    (color = `hsl(${random(0, 360)} ${random(0, 100)}%, ${random(0, 100)}%)`),
      (quotes = shuffleArr(quotes));
    quote = quotes[random(0, quotes.length - 1)];
  }
</script>

<div
  class="flex flex-col gap-6 justify-center items-center h-screen px-5 transition-colors duration-1000"
  style={`background-color: ${color}`}
>
  <h1 class="text-5xl font-bold">Random Quote Generator</h1>
  <div
    class="w-full sm:w-4/5 md:w-3/5 max-w-4xl p-10 mx-5 bg-white rounded-md"
    id="quote-box"
  >
    <div
      class="flex flex-col transition-colors duration-[600ms]"
      style={`color: ${color}`}
    >
      <div class="inline-flex gap-1">
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width={30}
          >
            <path
              fill="currentColor"
              d="M6.848 2.47a1 1 0 0 1-.318 1.378A7.284 7.284 0 0 0 3.75 7.01 3 3 0 1 1 1 10v-.027a3.521 3.521 0 0 1 .01-.232c.009-.15.027-.36.062-.618.07-.513.207-1.22.484-2.014.552-1.59 1.67-3.555 3.914-4.957a1 1 0 0 1 1.378.318m7 0a1 1 0 0 1-.318 1.378 7.283 7.283 0 0 0-2.78 3.162A3 3 0 1 1 8 10v-.027a3.521 3.521 0 0 1 .01-.232c.009-.15.027-.36.062-.618.07-.513.207-1.22.484-2.014.552-1.59 1.67-3.555 3.914-4.957a1 1 0 0 1 1.378.318"
            />
          </svg>
        </span>

        <blockquote id="text">
          <p class="text-3xl">{quote[1]}</p>
        </blockquote>
      </div>

      <p class="self-end my-3 text-xl" id="author">
        — {quote[0]}
      </p>
    </div>
    <div class="m-2 flex justify-between items-center gap-1">
      <div class="inline-flex gap-3">
        <a
          class="h-10 p-2 outline-offset-3 text-white rounded-md transition-colors duration-500"
          style={`background-color: ${color}`}
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="25"
            fill="currentColor"
          >
            <path
              d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"
            />
          </svg>
          <span class="sr-only">Share on facebook</span>
        </a>
        <a
          class="size-10 p-2 text-white rounded-md transition-colors duration-500"
          id="tweet-quote"
          style={`background-color: ${color}`}
          href={`https://twitter.com/intent/tweet?text="${quote[1]}" —${quote[0]}&hashtags=quotes`}
          title="Share on twitter"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            width="25"
            fill="currentColor"
          >
            <path
              d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
            />
          </svg>
          <span class="sr-only">Share on twitter</span>
        </a>
      </div>
      <button
        class="h-10 px-3 outline-offset-3 text-white text-xl rounded-md transition-colors duration-500 active:scale-95"
        id="new-quote"
        style={`background-color: ${color}`}
        type="button"
        onclick={handleClick}
      >
        New quote
      </button>
    </div>
  </div>
</div>
