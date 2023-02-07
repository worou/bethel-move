import http from "./http-common";
export default class RideService {

      //  static async getCars() {
      //   // const dataStr = localStorage.getItem('token');
      //   // const token = JSON.parse(`${dataStr}`);
      //   const token = JSON.parse(localStorage.getItem('token')|| '{}');
      //   return await fetch('https://www.bethel-move.api.jw-solutions.fr/api/v1/find-ride',
      //   {
      //       method: 'GET',
      //       headers: new Headers({
      //       'Content-Type':  'application/json',
      //       Authorization: `Bearer ${token}`
      //    }),
      //   })
      //     .then(response => response.json())
      //     .then(res => console.log(res));
      // }

      static findByCriteria = async(data:any): Promise<any> => {
        return await http.post("v1/find-ride", data);
      }
    }
