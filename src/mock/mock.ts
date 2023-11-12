import { createServer } from "miragejs";
import appConfig from "@/configs/app.config";

import { signInUserData } from "./data/authData";
import { plans } from "./data/planData";
import { exercises } from "./data/exerciseData";

import { authFakeApi, planFakeApi, exerciseFakeApi } from "./fakeApi";

const { apiPrefix } = appConfig;

export function mockServer({ environment = "test" }) {
  return createServer({
    environment,
    seeds(server) {
      server.db.loadData({
        signInUserData,
        plans,
        exercises,
      });
    },
    routes() {
      this.urlPrefix = "";
      this.namespace = "";
      this.passthrough((request) => {
        const isExternal = request.url.startsWith("http");
        return isExternal;
      });
      this.passthrough();

      authFakeApi(this, apiPrefix);
      planFakeApi(this, apiPrefix);
      exerciseFakeApi(this, apiPrefix);
    },
  });
}
