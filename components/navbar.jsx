import ModeToggle from './theme-switcher';

const Navbar = () => {
  return (
    <div className=' p-1 flex justify-between border-b '>
      <h1 className=' text-2xl '>Subscribe</h1>
      <ModeToggle />
    </div>
  );
};

export default Navbar;
