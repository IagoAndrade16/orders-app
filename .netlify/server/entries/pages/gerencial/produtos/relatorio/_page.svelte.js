import { c as create_ssr_component, b as subscribe, v as validate_component, a as add_attribute } from "../../../../../chunks/ssr.js";
import { B as BodyMargin } from "../../../../../chunks/BodyMargin.js";
import "../../../../../chunks/client.js";
import "buffer";
import { u as userStore } from "../../../../../chunks/user.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  let from = "";
  let to = "";
  $$unsubscribe_userStore();
  return `${validate_component(BodyMargin, "BodyMargin").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-1l4nz9a">Relatório de produtos</h3> <small data-svelte-h="svelte-19pcqje">Veja um relatório detalhado de cada produto</small> <div class="row"><div class="mt-3 col-6 col-md-3"><label for="from" data-svelte-h="svelte-8d988h">De</label> <input type="date" class="form-control" id="from"${add_attribute("value", from, 0)}></div> <div class="mt-3 col-6 col-md-3"><label for="to" data-svelte-h="svelte-zbxvy3">Até</label> <input type="date" class="form-control" id="to"${add_attribute("value", to, 0)}></div> <div class="mt-md-3 col-12 col-md-2"><button class="btn btn-outline-dark mt-4 w-100" data-svelte-h="svelte-b7qe12">Buscar</button></div></div> <div class="mt-3 col-2" data-svelte-h="svelte-v8iecr"></div> <table id="products-report-table" class="table table-striped" data-svelte-h="svelte-1d7k4r1"><thead><tr><th scope="col"></th> <th scope="col">Produto</th> <th scope="col">Quantidade vendida no período</th></tr></thead> <tbody></tbody></table>`;
    }
  })}`;
});
export {
  Page as default
};
