import { c as create_ssr_component, a as add_attribute, e as escape } from "./ssr.js";
const InputComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { value } = $$props;
  let { label = "" } = $$props;
  let { classes = null } = $$props;
  let { id } = $$props;
  let { placeholder } = $$props;
  let { required = false } = $$props;
  let { containerClasses = null } = $$props;
  let { error = null } = $$props;
  let { onInput = () => {
  } } = $$props;
  let { smallText = null } = $$props;
  if ($$props.value === void 0 && $$bindings.value && value !== void 0)
    $$bindings.value(value);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.classes === void 0 && $$bindings.classes && classes !== void 0)
    $$bindings.classes(classes);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.placeholder === void 0 && $$bindings.placeholder && placeholder !== void 0)
    $$bindings.placeholder(placeholder);
  if ($$props.required === void 0 && $$bindings.required && required !== void 0)
    $$bindings.required(required);
  if ($$props.containerClasses === void 0 && $$bindings.containerClasses && containerClasses !== void 0)
    $$bindings.containerClasses(containerClasses);
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  if ($$props.onInput === void 0 && $$bindings.onInput && onInput !== void 0)
    $$bindings.onInput(onInput);
  if ($$props.smallText === void 0 && $$bindings.smallText && smallText !== void 0)
    $$bindings.smallText(smallText);
  return `<div${add_attribute("class", containerClasses, 0)}><label for="city" class="form-label">${escape(label)} <small class="text-muted">${escape(smallText ?? "")}</small></label> <span class="${escape(required ? "" : "d-none", true) + " text-danger"}">*</span> <input type="text" class="${"form-control " + escape(classes, true)}"${add_attribute("id", id, 0)}${add_attribute("placeholder", placeholder, 0)}${add_attribute("value", value, 0)}> <span class="text-danger">${escape(error ?? "")}</span></div>`;
});
export {
  InputComponent as I
};
