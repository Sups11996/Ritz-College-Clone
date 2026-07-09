type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const NavButton = ({ children, className = "", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`px-2 py-1 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 ${className}`}
    >
      {children}
    </button>
  );
};

export default NavButton;
