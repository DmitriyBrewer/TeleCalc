import Tele from "./Tele.js";

class TeleService {
  async create(tele, picture) {
    const createdTele = await Tele.create(tele);
    return createdTele;
  }
}

export default new TeleService();
