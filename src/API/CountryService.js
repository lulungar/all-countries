import axios from "axios";

export default class CountryService {
  static async getAll() {
    const responce = await axios.get("https://restcountries.com/v3.1/all");
    return responce;
  }
  static async getByName(name) {
    const responce = await axios.get(
      `https://restcountries.com/v3.1/name/${name}`
    );
    return responce;
  }
}
