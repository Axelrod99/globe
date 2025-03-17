import React, { useEffect, useState } from "react";
import AxiosInstance from "../../api/axios";

const UsersArray = () => {
  const [parentUsers, setParentUser] = useState([] as any);

  const getUsers = async () => {
    try {
      const res = await AxiosInstance.get(`/user/all`);
      setParentUser(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  console.log(parentUsers);

  return (
    <div className="px-[20px] sm:px-[40px] mt-5 flex flex-col gap-6">
      <p className="text-[24px] font-semibold krona-one">Registered Users</p>

      <div className="flex flex-col gap-2">
        {parentUsers.map((items: any) => (
          <p className="flex gap-2">
            - <span className="text-[20px] Axiforma">{items.email}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default UsersArray;
