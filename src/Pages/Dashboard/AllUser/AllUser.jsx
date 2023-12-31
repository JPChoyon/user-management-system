import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../Hooks/useAxios";
import { MdDeleteOutline } from "react-icons/md";
import { GrUserAdmin } from "react-icons/gr";
import Swal from "sweetalert2";
import { ImCross } from "react-icons/im";

const AllUser = () => {
  const axiosSecure = useAxios();
  const { data: user = [], refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleHr = (id) => {
    axiosSecure.patch(`/users/hr/${id}`).then((res) => {
      console.log(res);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          icon: "success",
          title: "success",
          text: "Now this persons are HR",
        });
      }
    });
  };
  const handleDeleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div className="w-full">
      <div className="uppercase text-3xl flex justify-evenly font-bold">
        <h1>total Users : {user.length}</h1>
      </div>
      <div className="w-full">
        <div className="overflow-x-auto mx-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Email</th>
                <th>Bank Account</th>
                <th>verify</th>
                <th>Role</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>
            {/* body  */}
            <tbody>
              {user.map((user, index) => (
                <tr key={user._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>

                  <td>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user.email}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user.bank}</div>
                    </div>
                  </td>
                  <td>
                    <div>
                      <div className="font-bold text-red-600">
                        <ImCross />
                      </div>
                    </div>
                  </td>
                  <td>
                    {user.selectedRole === "admin" ||
                    user.selectedRole === "hr" ? (
                      <>
                        <button className="btn bg-yellow-500 text-white  hover:text-black">
                          {user.selectedRole}
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => handleHr(user._id)}
                          className="btn bg-yellow-500 text-white  hover:text-black"
                        >
                          <GrUserAdmin />
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    <div>
                      <div className="font-bold">{user.salary}</div>
                    </div>
                  </td>
                  <th>
                    <button
                      onClick={() => handleDeleteUser(user._id)}
                      className="btn bg-red-500 text-white text-3xl hover:text-black"
                    >
                      <MdDeleteOutline />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUser;
