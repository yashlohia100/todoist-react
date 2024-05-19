import { FaHeart } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="flex items-center justify-center gap-1 bg-stone-300 text-stone-700 dark:bg-slate-800 dark:text-slate-400">
      <p>Made with</p>

      <span className="text-red-400 hover:text-red-500">
        <FaHeart />
      </span>

      <p>by Yash</p>
    </footer>
  );
}

export default Footer;
