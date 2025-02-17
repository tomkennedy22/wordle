import WordleLogo from "/wordle-logo.svg";

const Hero = () => {
  return (
    <div className="flex-1 hidden lg:flex p-12 justify-center items-center flex-col">
      <img src={WordleLogo} alt="Logo" className="w-32" />
      <h2 className="text-2xl font-semibold text-zinc-200">Play Wordle - Unlimited</h2>
      <p className="text-sm text-zinc-400 text-center mt-4 py-3 px-4 border-2 border-dashed rounded-lg border-zinc-700">
        Love the Game?{" "}
        <a href="https://buymeacoffee.com/azlibdar" target="_blank" rel="noopener noreferrer" className="text-sky-400 font-medium">
          Buy me a coffee -&gt;
        </a>
      </p>
    </div>
  );
};

export default Hero;
