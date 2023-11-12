import wildCardSearch from "@/utils/wildCardSearch";
import { uniqueId } from "lodash";
import type { Server } from "miragejs";

export default function exerciseFakeApi(server: Server, apiPrefix: string) {
  server.post(`${apiPrefix}/exercises/search`, (schema, { requestBody }) => {
    const { sort, search } = JSON.parse(requestBody);
    let data = schema.db.exercises;
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

  server.post(`${apiPrefix}/exercises`, (schema, { requestBody }) => {
    const data = JSON.parse(requestBody);
    data._id = uniqueId("exercise-");
    schema.db.exercises.insert(data);

    return data;
  });
}
