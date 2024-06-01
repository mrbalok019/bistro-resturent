import { IoTrashBin } from "react-icons/io5";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import UseCart from "../../OurShop/UseCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../Axios/UseAxiosSecure";

const Cart = () => {
  const [cart,refetch] = UseCart();
  const totalPrice = cart.reduce(
    (total, item) => total + item.cartFoodPrice,
    0
  );
  const axiosSecure = UseAxiosSecure();
  const cartDeleteHandler = (id)=>{
    Swal.fire({
        title: "Are you sure about deleting this item?",
        showCancelButton: true,
        confirmButtonText: "Yes, Delete it.",
    }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/cart/${id}`)
               .then(data => {
                if(data.data.deletedCount >0)
                    {
                        refetch();
                        Swal.fire({
                        text: "item deleted successfully",
                        icon: 'success',
                        })
                    }

                    
                });
        }
    });
};
  return (
    <div>
      <SectionTitle
        header="WANNA ADD MORE?"
        subHeader="---my cart---"
      ></SectionTitle>

      <div className="w-sm lg:w-full bg-white p-12">
        <div className="flex flex-col lg:flex-row gap-28 mb-10">
          <h1 className="text-2xl font-semibold">
            Total Orders: {cart.length}
          </h1>
          <h1 className="text-2xl font-semibold">
            Total Price: $ {totalPrice}
          </h1>
          <button className="btn btn-info"> Pay</button>
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
                  <th>Item Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item ,index ) => (
                  <tr key={item.id}>
                  
                    <th>
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>  
                    <td>
                        <h1> {index=index+1} </h1>
                    </td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={item.cartFoodImage} alt="food image" />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-bold">{item.cartFoodName}</div>
                    </td>
                    <td>
                      <div className="text-sm ">
                           $ {item.cartFoodPrice}
                          </div>
                    </td>
                   
                    <td>
                      <button onClick={()=>{cartDeleteHandler(item._id)}} className="btn btn-ghost btn-xs text-2xl text-red-600">
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
  );
};

export default Cart;
