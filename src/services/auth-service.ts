import axios from "axios";
import http from "./http-common";

export default class AuthService {
  static authenticate(): Promise<any> {
    const credentials = {
      "clientId": "sm-gateway-id",
      "clientSecret": "81fd3d82-bbe1-4280-a362-5c08601d665e"
    };
    return fetch('http://vmi512964.contaboserver.net:21003/api/keycloak/gettoken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
      .then(data => data.access_token)
      .then(data => { localStorage.setItem('token', JSON.stringify(data)) })
      .catch(error => console.error(error))
  }

  static checkToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  static login = async (data: any): Promise<any> => {
    return await http.post("login", data);
  }

  static register = async (data: any): Promise<any> => {
    return await http.post("register", data);
  }

  static logout = async (): Promise<any> => {
    return await http.post("logout",
      {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      }
    );
  }

  static getUser = async (token?: string): Promise<any> => {
    return JSON.parse(localStorage.getItem(token));
  }
  static setUser = async (user: any): Promise<any> => {
    console.log(JSON.stringify(user.jwt));
    localStorage.setItem("token", JSON.stringify(user));
  }
  static removeUser = async (): Promise<any> => {
    localStorage.removeItem("token");
  }

  static profile = async (): Promise<any> => {
    return await http.get("profile");
  }

  static profile2 = async (): Promise<any> => {
    return await axios.get("https://www.bethel-move.api.jw-solutions.fr/api/profile", {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token')
      }
    }).then((response) => response)
      .catch(err => err);
  };
}

