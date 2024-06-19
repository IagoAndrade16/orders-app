import { c as create_ssr_component, b as subscribe, e as escape } from "./ssr.js";
import { U as Utils } from "./Utils.js";
import { c as cartStore } from "./cart.store.js";
import "./client.js";
const OrderResumeComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartStore, $$unsubscribe_cartStore;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => $cartStore = value);
  let { handleNextAction } = $$props;
  let { continueButtonDisabled = false } = $$props;
  let { continueButtonLoadingText = "" } = $$props;
  if ($$props.handleNextAction === void 0 && $$bindings.handleNextAction && handleNextAction !== void 0)
    $$bindings.handleNextAction(handleNextAction);
  if ($$props.continueButtonDisabled === void 0 && $$bindings.continueButtonDisabled && continueButtonDisabled !== void 0)
    $$bindings.continueButtonDisabled(continueButtonDisabled);
  if ($$props.continueButtonLoadingText === void 0 && $$bindings.continueButtonLoadingText && continueButtonLoadingText !== void 0)
    $$bindings.continueButtonLoadingText(continueButtonLoadingText);
  $$unsubscribe_cartStore();
  return `<div class="col-12 col-lg-3 order-resume"><div class="card shadow border-0"><div class="card-body"><h5 class="card-title text-center" data-svelte-h="svelte-wypae2">Resumo do pedido</h5> <hr> <p data-svelte-h="svelte-19zipjc">Detalhes do pedido:</p> <div class="d-flex justify-content-between"><p data-svelte-h="svelte-de6bw2">Total</p> <p class="text-bold">${escape(Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + product.price * product.quantity, 0)))}</p></div> <div class="d-flex justify-content-between"><p data-svelte-h="svelte-1q69m6m">Descontos</p> <p class="text-bold text-success">${escape(Utils.formatNumberToBrl(0))}</p></div> <div class="d-flex justify-content-between"><p data-svelte-h="svelte-1fup1j4">Valor final:</p> <p class="text-bold">${escape(Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + product.price * product.quantity, 0)))}</p></div> <hr> <div><button class="btn btn-outline-secondary w-100 mb-2" data-svelte-h="svelte-fsf0va">Adicionar mais produtos</button> <button class="${"btn btn-dark w-100 " + escape($cartStore.length > 0 ? "" : "disabled", true) + " " + escape(continueButtonDisabled ? "disabled" : "", true)}">${escape(continueButtonDisabled ? continueButtonLoadingText : "Continuar")}</button></div></div></div></div>`;
});
export {
  OrderResumeComponent as O
};
