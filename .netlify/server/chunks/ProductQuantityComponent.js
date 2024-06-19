import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const Trash2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { size = "24" } = $$props;
  let { strokeWidth = 2 } = $$props;
  let { class: customClass = "" } = $$props;
  if (size !== "100%") {
    size = size.slice(-1) === "x" ? size.slice(0, size.length - 1) + "em" : parseInt(size) + "px";
  }
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.strokeWidth === void 0 && $$bindings.strokeWidth && strokeWidth !== void 0)
    $$bindings.strokeWidth(strokeWidth);
  if ($$props.class === void 0 && $$bindings.class && customClass !== void 0)
    $$bindings.class(customClass);
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-trash-2 " + escape(customClass, true)}"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>`;
});
const ProductQuantityComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { quantity } = $$props;
  if ($$props.quantity === void 0 && $$bindings.quantity && quantity !== void 0)
    $$bindings.quantity(quantity);
  return `<div class="d-flex align-self-center justify-content-center align-self-lg-start"><button class="btn btn-dark" data-svelte-h="svelte-ew6xvt">-</button> <button class="btn btn-light disabled rounded-0" id="quantity-container">${escape(quantity)}</button> <button class="btn btn-dark" data-svelte-h="svelte-14x1ob5">+</button> ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  ProductQuantityComponent as P,
  Trash2Icon as T
};
