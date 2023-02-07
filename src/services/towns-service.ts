import http from "./http-common";
export default class TownService {

  static getTowns = async (): Promise<any> => {
    return await http.get("v1/towns");
  }
}
