import koinX from "../../assets/koinx.svg";
import hamburger from "../../assets/hamburger.svg";
import Button from "../common/Button";
function Navbar() {
  return (
    <nav className="sm:desktop-x border-{#D2D2E2} shadow-nav-desktop sm:shadow-nav-mobile p-mobile-x flex h-16 items-center justify-between border-b sm:h-20">
      <img src={koinX} className="black h-50px" />

      <div className=" hidden items-center gap-11 sm:flex ">
        {/* Navigation Links */}
        <div className="flex justify-center gap-8 font-semibold">
          <a href="#" className="text-{#0F1629}  h-fit ">
            Crypto Taxes
          </a>
          <a href="#" className="text-{#0F1629} h-fit">
            Free Tools
          </a>
          <a href="#" className="text-{#0F1629} h-fit">
            Resource Center
          </a>
        </div>
        {/* Button */}
        <div className="flex items-center gap-8">
          <Button text="Sign In" />
        </div>
      </div>
      {/* hamburger */}
      <div className="sm:hidden">
        <img src={hamburger} alt="hamburger" className="w-6 sm:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
