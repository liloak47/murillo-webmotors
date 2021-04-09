import api from "./api";
export default {
  async getMark() {
    try {
      const { data } = await api.get("/Make");
      return Promise.resolve(data);
    } catch {
      return Promise.reject("");
    }
  },

  async getModel(id) {
    try {
      const { data } = await api.get(`Model?MakeID=${id}`);
      return Promise.resolve(data);
    } catch {
      return Promise.reject("");
    }
  },

  async getVersion(id) {
    try {
      const { data } = await api.get(`Version?ModelID=${id}`);
      return Promise.resolve(data);
    } catch {
      return Promise.reject("");
    }
  },
};
