import Town from '../models/town';
import Customer from '../models/customer';

const getAge = (dateString: string) => {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}
 
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const opt_weekday = { weekday: 'long' };

function toTitleCase(str:string):string {
  return str.replace(
      /\w\S*/g,
      function(txt) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}
const getTownByCode = (cityCode: string, towns:Array<Town>) =>{
    for(const town of towns){
        if(town.code === cityCode){
            return town.longLabel[0].toUpperCase() + town.longLabel.substr(1);
        }
    }
}
const getCustomerByCode = (memberCode: string, customers: Array<Customer>) =>{
    for(const customer of customers){
        if(customer.code === memberCode){
            return customer;
        }
    }
}
export default {
    getAge,
    toTitleCase,
    getTownByCode,
    getCustomerByCode
};