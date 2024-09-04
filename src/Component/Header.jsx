import { FaMapLocationDot } from "react-icons/fa6";
import { FiPhoneCall } from "react-icons/fi";

const Header = () => {
  return (
    <div className="flex items-center gap-5 justify-end  px-5">
      <div className="flex items-center gap-2 justify-end">
        <FaMapLocationDot />
        <p>501 Brickell, Miami, FL 33131, USA</p>
      </div>
      <div className="flex items-center gap-2 justify-end">
        <FiPhoneCall />
        <p>+88 01787 657895</p>
      </div>
    </div>
  );
};

export default Header;
