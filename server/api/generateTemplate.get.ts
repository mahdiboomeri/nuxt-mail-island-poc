import type { NuxtIslandResponse } from "nuxt/dist/core/runtime/nitro/renderer";
import { hash } from "ohash";

function _fetchComponent(name: string, context: Object = {}, props?: Object) {
  const hashId = hash([name, props, context]);
  return $fetch<NuxtIslandResponse>(`/__nuxt_island/${name}:${hashId}`, {
    params: {
      ...context,
      props: props ? JSON.stringify(props) : undefined,
    },
  });
}

export default defineEventHandler(async (event) => {
  const query = getQuery(event) as {
    name: string;
    propsName: string;
  };
  const component = await _fetchComponent(
    query.name,
    {},
    { name: query.propsName }
  );

  // TODO: figure out a way to access styles
  return component.html;
});
