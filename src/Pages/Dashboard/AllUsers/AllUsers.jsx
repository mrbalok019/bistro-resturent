import { IoPeople, IoTrashBin } from "react-icons/io5";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import UseCart from "../../OurShop/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Axios/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
    const {refetch,data:users =[]} = useQuery({

        queryKey: ['users'],
        queryFn:  async()=>{
            const res = await axiosSecure.get(`/users`);
            return res.data;
        }
    
       })

  const axiosSecure = UseAxiosSecure();
  const userDeleteHandler = (id) => {
    Swal.fire({
      title: "Are you sure about deleting this user?",
      showCancelButton: true,
      confirmButtonText: "Yes, Delete it.",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${id}`).then((data) => {
          if (data.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              text: "user deleted successfully",
              icon: "success",
            });
          }
        });
      }
    });
  };


  return (
    <div>
      <div>
        <SectionTitle
          header="Manage All Users"
          subHeader="---How many?---"
        ></SectionTitle>

        <div className="w-sm lg:w-full bg-white p-12">
          <div className="flex flex-col lg:flex-row gap-28 mb-10">
            <h1 className="text-2xl font-semibold text-left">
              Total Users: {users.length}
            </h1>
           
            
          </div>
          <div>
            <div className="overflow-x-auto">
              <table className="table rounded-xl">
                {/* head */}
                <thead className="bg-orange-300 text-xl font-semibold">
                  <tr>
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Roll</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((item, index) => (
                    <tr key={item.id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>
                        <h1> {(index = index + 1)} </h1>
                      </td>
                      <td>
                         <div className="font-bold">{item.name}</div>
                      </td>
                      <td>
                        <div className="font-bold">{item.email}</div>
                      </td>
                      <td>
                        <div className="text-sm ">
                            <IoPeople></IoPeople>
                        </div>
                      </td>

                      <td>
                        <button
                          onClick={() => {
                            userDeleteHandler(item._id);
                          }}
                          className="btn btn-ghost btn-xs text-2xl text-red-600"
                        >
                          <IoTrashBin />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {/* row 1 */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
