import axios from "../apiConnection";

class DevicesApi {
  constructor() {
    this.axios = axios;
  }

  addDevice(device){
    return this.axios.post("/devices", device);
  }

  getDevices() {
    return this.axios.get("/devices");
  }

  deleteDevice(id) {
    return this.axios.delete(`/devices/${id}`);
  }
}

export default new DevicesApi();
