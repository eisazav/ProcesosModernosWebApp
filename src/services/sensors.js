import axios from "../apiConnection";

class SensorsApi {
  constructor() {
    this.axios = axios;
  }

  addSensor(device){
    return this.axios.post("/sensors", device);
  }

  getSensors() {
    return this.axios.get("/sensors");
  }

  deleteSensor(id) {
    return this.axios.delete(`/sensors/${id}`);
  }
}

export default new SensorsApi();
