import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type }) {
  const base =
    'tracking-wide font-semibold text-sm inline-block rounded-full bg-yellow-400 uppercase text-stone-800 transition-colors duration-300 hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:bg-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed';
  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',

    secondary:
      'tracking-wide text-sm font-semibold inline-block rounded-full uppercase text-stone-400 transition-colors duration-300 border border-stone-300 hover:bg-stone-300 focus:outline-none focus:ring px-4 py-2.5 md:px-6 md:py-3.5 focus:ring-stone-200 focus:ring-offset-2 focus:bg-stone-3 00 disabled:cursor-not-allowed hover:text-stone-800 focus:text-stone-800 focus:bg-stone-300',
  };
  if (to) {
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );
  }
  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
