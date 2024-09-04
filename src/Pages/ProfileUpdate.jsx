import { useContext } from "react";
import { AuthContext } from "../firebase/AuthProvider";

const ProfileUpdate = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      <div className="flex">
        <div className="w-60 bg-slate-400 h-screen">
          <div className="my-5 p-2">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="profile"
                className="w-full rounded-full"
              />
            ) : (
              <img
                className="rounded-full"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            )}
          </div>
          <div className="px-2">
            <p>Name : {user?.displayName}</p>
            <p>Email : {user?.email}</p>
          </div>
          <div className="divider"></div>
        </div>
        <div className="">
          <p className="text-3xl">Details section</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdate;
