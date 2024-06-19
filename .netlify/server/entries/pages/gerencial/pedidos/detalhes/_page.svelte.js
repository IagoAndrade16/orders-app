import { c as create_ssr_component, b as subscribe, v as validate_component } from "../../../../../chunks/ssr.js";
import { p as page } from "../../../../../chunks/stores.js";
import { B as BodyMargin } from "../../../../../chunks/BodyMargin.js";
import "buffer";
import "../../../../../chunks/client.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { u as userStore } from "../../../../../chunks/user.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $page.url.searchParams.get("id");
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(BodyMargin, "BodyMargin").$$render($$result, {}, {}, {
      default: () => {
        return `${``}`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
