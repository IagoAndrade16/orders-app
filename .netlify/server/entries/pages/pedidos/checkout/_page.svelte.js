import { c as create_ssr_component, b as subscribe, d as each, v as validate_component, a as add_attribute, e as escape } from "../../../../chunks/ssr.js";
import { O as OrderResumeComponent } from "../../../../chunks/OrderResumeComponent.js";
import { P as ProductQuantityComponent, T as Trash2Icon } from "../../../../chunks/ProductQuantityComponent.js";
import { E as Engine } from "../../../../chunks/Engine.js";
import { c as cartStore } from "../../../../chunks/cart.store.js";
import { U as Utils } from "../../../../chunks/Utils.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartStore, $$unsubscribe_cartStore;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => $cartStore = value);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container mt-5"><div class="row" data-svelte-h="svelte-1tpzmhk"><div class="col-12"><h4 class="text-center text-lg-start">Carrinho</h4></div></div> <div class="row mt-3 d-none d-lg-block" data-svelte-h="svelte-k0e8qn"><div class="col-12"><nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item active">Início</li> <li class="breadcrumb-item active" aria-current="page">Pedidos</li> <li class="breadcrumb-item" aria-current="page">Carrinho</li></ol></nav></div></div> <div class="row mt-5 gap-2"><div class="col-12 col-lg-8">${$cartStore.length > 0 ? `${each($cartStore, (product, index) => {
      return `<div class="card mb-5 shadow border-0"><div class="row"><div class="col-12 col-md-4 col-lg-4"><img${add_attribute("src", product.imageUrl, 0)} class="img-fluid img-thumbnail rounded-start" alt="" height="45"></div> <div class="col-12 col-md-5 col-lg-5 border border-top-0 border-bottom-0 border-start-0"><div class="card-body"><center><h5 class="card-title">${escape(product.name)}</h5> <br> <p data-svelte-h="svelte-1nxjetg">Quantidade:</p> ${validate_component(ProductQuantityComponent, "ProductQuantityComponent").$$render(
        $$result,
        { quantity: product.quantity },
        {
          quantity: ($$value) => {
            product.quantity = $$value;
            $$settled = false;
          }
        },
        {}
      )}</center> </div></div> <div class="col-12 col-md-3 col-lg-3"><div class="card-body text-center"><h5 class="card-title text-center">${escape(Utils.formatNumberToBrl(product.price))}</h5> <p class="badge text-bg-success" data-svelte-h="svelte-9t2kap">Frete grátis</p> <br> <button class="btn btn-outline-danger btn-sm rounded w-100">Remover
                  ${validate_component(Trash2Icon, "Trash2Icon").$$render($$result, { size: "20", class: "mb-1" }, {}, {})}</button> </div> </div></div> </div>`;
    })}` : `<p data-svelte-h="svelte-qmw98p">Seu carrinho está vazio.</p>`}</div> ${$cartStore.length > 0 ? `${validate_component(OrderResumeComponent, "OrderResumeComponent").$$render(
      $$result,
      {
        handleNextAction: () => Engine.navigateTo("/pedidos/endereco")
      },
      {},
      {}
    )}` : ``}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_cartStore();
  return $$rendered;
});
export {
  Page as default
};
