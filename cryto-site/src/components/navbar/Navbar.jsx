import koinX from "../../assets/koinx.svg";
import hamburger from "../../assets/hamburger.svg";
import Button from "../common/Button";
function Navbar() {
  return (
    <nav className="flex h-16 items-center justify-between border border-gray-300 p-mobile-x shadow-lg md:h-20 md:p-desktop-x ">
      {" "}
      <img src={koinX} className="black h-50px" />
      <div className="hidden items-center gap-11 md:flex ">
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
          <Button text="Get Started" />
        </div>
      </div>
      {/* hamburger */}
      <div className="md:hidden">
        <img src={hamburger} alt="hamburger" className="w-6 md:hidden" />
      </div>
    </nav>
  );
}

export default Navbar;
