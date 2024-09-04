import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../Component/Banner";
import Offer from "../Component/Offer/Offer";
import { RiMailSendLine } from "react-icons/ri";

const Home = () => {
  const houses = useLoaderData();

  return (
    <div>
      <Banner />
      <Offer />
      <section>
        <div className="bg-blue-950 grid justify-center items-center gap-5 py-20">
          <div className="text-center text-white w-3/4  grid justify-center m-auto gap-3">
            <div className=" m-auto">
              <RiMailSendLine className="text-7xl -rotate-45" />
            </div>
            <p>
              Join our mailing to get weekly updates on our exclusive deals.
            </p>
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
            <button className="btn bg-green-500 ml-3 w-32">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
