import TeleService from "./TeleService.js";

class TeleController {
  async create(req, res) {
    try {
      const tele = await TeleService.create(req.body);
      console.log(tele);
      res.json(
        (parseFloat(tele.min)||0)
         + (parseFloat(tele.sms) ||0)
         + (parseFloat(tele.gb) ||0)
         + (parseFloat(tele.facebook)||0)
         + (parseFloat(tele.instagram)||0)
         + (parseFloat(tele.vk)||0)
         + (parseFloat(tele.pinterest)||0)
         + (parseFloat(tele.linkedin)||0)
         + (parseFloat(tele.whatsapp)||0)
         + (parseFloat(tele.telegram)||0)
         + (parseFloat(tele.message)||0)
         + (parseFloat(tele.mail)||0)
         + (parseFloat(tele.inbox)||0)
         + " р/месяц");
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new TeleController();
