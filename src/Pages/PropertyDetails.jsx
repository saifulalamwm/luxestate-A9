import React, { useContext } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuAreaChart } from "react-icons/lu";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../firebase/AuthProvider";
import { RiMailSendLine } from "react-icons/ri";
import { BsCaretRightFill } from "react-icons/bs";

const PropertyDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);

  const residential = useLoaderData();

  const resDetails = residential.find((item) => item.id.toString() === id);
  const {
    name,
    category,
    description,
    location,
    image,
    price,
    area,
    status,
    facilities,
  } = resDetails;
  console.log(resDetails);

  return (
    <div className="">
      <div
        className="h-screen"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          // adjust the height as needed
        }}
      >
        <div className="  w-full h-full grid justify-end items-center">
          <div className="card-body bg-white w-96 lg:w-[500px] h-auto mr-5">
            <h2 className="card-title">{name}</h2>
            <div className="flex justify-between">
              <p className="flex gap-2 items-center flex-grow">
                <IoLocationOutline />
                {location}
              </p>
              <p>{category}</p>
            </div>
            <div className=" border-t border-gray-200"></div>
            <div className="flex gap-2 items-center justify-start">
              <p>Location Size</p>
              <LuAreaChart />
              {area}
            </div>
            <div className="">
              {facilities.map((facility, index) => (
                <button
                  key={index}
                  className="text-xs bg-base-200 p-1 rounded-md m-1"
                >
                  {facility}
                </button>
              ))}
            </div>

            <p className="text-xs">{description}</p>
            <div className=" border-t border-gray-200"></div>
            <div className="flex justify-between items-center my-5">
              <div className="">
                <div className="">
                  <p className="text-xl font-semibold text-gray-400 capitalize">
                    {status}{" "}
                  </p>
                </div>
                <div className="text-xl text-gray-500 font-bold">{price}</div>
              </div>
              <div className="card-actions justify-end">
                {/* You can open the modal using document.getElementById('ID').showModal() method */}
                <button
                  className="border-2 rounded-lg py-3 px-4"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Booked Property
                </button>
                <dialog id="my_modal_3" className="modal">
                  <div className="modal-box">
                    <form method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>
                    <h3 className="font-bold text-lg">
                      Hello! {user.displayName}
                    </h3>
                    <p className="py-4">
                      Thank you for booking your property. Our agent will
                      contact very shortly
                    </p>
                  </div>
                </dialog>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="grid lg:grid-cols-2 grid-cols-1 my-20 gap-10 w-11/12 m-auto">
          <div className="">
            <p className="text-5xl font-bold">Why choose homes?</p>
            <p className="text-3xl font-bold text-gray-400 mb-3">
              Because we are the best in the business.
            </p>
            <p>
              Choosing us means partnering with a leader in the real estate
              industry who prioritizes your needs, provides unparalleled
              expertise, and delivers exceptional results. We are committed to
              making your real estate journey smooth, successful, and
              satisfying.
            </p>
          </div>
          <div className="">
            <ul>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" />{" "}
                Extensive industry experience with a proven track record
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" /> Deep
                understanding of local market trends and opportunities.
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" />{" "}
                Personalized service tailored to your unique needs.
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" /> Access
                to exclusive listings and premium properties.
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" /> Expert
                negotiation skills to secure the best deals.
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" />{" "}
                Comprehensive support from search to closing
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" />{" "}
                Transparent and ethical practices you can trust.
              </li>
              <li className="flex items-center  gap-2 my-2">
                <BsCaretRightFill className="text-green-400 text-2xl" />{" "}
                Continuous commitment to customer satisfaction and long-term
                relationships.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PropertyDetails;
