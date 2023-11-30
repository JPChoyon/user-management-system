import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";

const Payment = () => {
  const axiosPublic = useAxiosPublic();
  const { data: payment = [] } = useQuery({
    queryKey: ["payment"],
    queryFn: async () => {
      const res = await axiosPublic.get("/payment");
      return res.data;
    },
  });
  return (
    <div>
      <div className="overflow-x-auto mx-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Amount</th>
              <th>Transition Id</th>
              <th>Pay With</th>
              <th>Date</th>
            </tr>
          </thead>
          {/* body  */}
          <tbody>
            {payment.map((payment, index) => (
              <tr key={payment._id}>
                <th>
                  <label>{index + 1}</label>
                </th>

                <td>
                  <div>
                    <div className="font-bold">{payment.amount}$</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{payment.transactionId}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{payment.payWith}</div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{payment.date}</div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payment;
