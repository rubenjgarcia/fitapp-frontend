import wildCardSearch from "@/utils/wildCardSearch";
import { uniqueId } from "lodash";
import type { Server } from "miragejs";

export default function planFakeApi(server: Server, apiPrefix: string) {
  server.post(`${apiPrefix}/plans/search`, (schema, { requestBody }) => {
    const { sort, search } = JSON.parse(requestBody);
    let data = schema.db.plans;
    if (sort === "asc") {
      data = data.sort((a, b) => (a.name > b.name ? 1 : -1));
    }
    if (sort === "desc") {
      data = data.sort((a, b) => (a.name > b.name ? -1 : 1));
    }

    if (search) {
      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
      data = wildCardSearch(data, search) as any;
    }

    return data;
  });

  server.post(`${apiPrefix}/plans`, (schema, { requestBody }) => {
    const data = JSON.parse(requestBody);
    data.createdOn = new Date();
    data._id = uniqueId("plan-");
    schema.db.plans.insert(data);

    return data;
  });
}
