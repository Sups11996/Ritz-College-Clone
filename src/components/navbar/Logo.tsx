import logo from "../../assets/logo.png";

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <img src={logo} alt="logo" className={className} />;
};

export default Logo;