export default class DataService {
   
      //  static token: any= JSON.parse(localStorage.getItem('token')|| '{}');
        static baseUrl: string = 'https://www.bethel-move.api.jw-solutions.fr/';
      //  static async getRides() {
      //   // const dataStr = localStorage.getItem('token');
      //   // const token = JSON.parse(`${dataStr}`);
      //   return await fetch(`${this.baseUrl}carmanager/api/rides`,
      //   {
      //       method: 'GET',
      //       headers: new Headers({
      //       'Content-Type':  'application/json',
      //       Authorization: `Bearer ${this.token}`
      //    }),
      //   })
      //     .then(response => response.json())
      //     .catch(error => console.error(error))
      // }

        static async findByCriteria(search:any): Promise<any>{
              return await fetch(`https://www.bethel-move.api.jw-solutions.fr/api/find-ride`, {
               method: 'POST',
              //  headers: {
              //    'Content-Type': 'application/json',
              //    Authorization: `Bearer ${this.token}`
              //  },
               body: JSON.stringify(search)
             })
               .then(data => data.json())
               .catch(error => console.error(error))
             }

            static async findAllTowns(): Promise<any>{
              return await fetch(`${this.baseUrl}/v1/towns`, {
               method: 'GET',
               headers: {
                 'Content-Type': 'application/json',
               }
             })
               .then(data => data.json())
               .catch(error => console.error(error))
             }

      //     static async findAllCustomers() {
      //       return await fetch(`${this.baseUrl}bookingmanager/api/customers`, {
      //         method: 'GET',
      //         headers: {
      //           'Content-Type': 'application/json',
      //           Authorization: `Bearer ${this.token}`
      //         }
      //       })
      //       .then(res => res.json())
      //       .catch(reqErr => console.error(reqErr))
          
      //     }
           
         }
     
     
    

