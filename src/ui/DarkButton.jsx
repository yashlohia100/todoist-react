import { MdOutlineDarkMode } from 'react-icons/md';
import { MdOutlineLightMode } from 'react-icons/md';

function DarkButton({ isDark, setIsDark }) {
  return (
    // <span className="absolute right-8 top-16 text-4xl transition">
    // <span className="text-3xl transition">
    <button
      onClick={() => setIsDark((curIsDark) => !curIsDark)}
      className="text-2xl"
      // className="absolute right-8 top-16 text-3xl transition"
    >
      {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
    </button>
    // </span>
  );
}

export default DarkButton;
