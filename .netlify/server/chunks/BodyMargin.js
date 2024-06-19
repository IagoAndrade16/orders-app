import { c as create_ssr_component } from "./ssr.js";
const BodyMargin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  BodyMargin as B
};
