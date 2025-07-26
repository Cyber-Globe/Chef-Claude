import chefLogo from "./IMAGES/download.png";

function Header() {
  return (
    <header className="header">
      <img src={chefLogo} alt="header logo" />
      <p>Chef Claude</p>
    </header>
  );
}
export default Header;
