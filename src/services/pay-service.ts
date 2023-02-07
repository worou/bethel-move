import axios from "axios";

const mtn = async (data:any) => {
  return await axios.post("https://www.bethel-move.api.jw-solutions.fr/api/payments/request-to-pay",data, {
    headers: {
      Authorization: 'Bearer ' + localStorage.getItem('token')
    }
  }).then((res:any) => res);
};


const PayService = {
  mtn,
};
export default PayService;
