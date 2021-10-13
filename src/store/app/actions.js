import Axios from "axios";
const endPoint = "https://api.breastcancer.ir/evaluate";

export function evaluate({}, { body, callback }) {
  Axios.post(endPoint, body)
    .then(res => {
      callback(true, res.data.data);
    })
    .catch(err => {
      callback(false, err.message);
    });
}
