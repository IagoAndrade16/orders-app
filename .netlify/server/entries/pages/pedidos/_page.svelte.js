import { c as create_ssr_component, b as subscribe, e as escape, a as add_attribute, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { O as OrderCard, a as Order } from "../../../chunks/Order.js";
import "buffer";
import { u as userStore } from "../../../chunks/user.store.js";
import { M as Masks } from "../../../chunks/Masks.js";
import { S as SearchIcon } from "../../../chunks/SearchIcon.js";
import * as yup from "yup";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let orders = [];
  let emailToSearch = "";
  yup.object().shape({
    email: yup.string().required("Digite um email válido")
  });
  $$unsubscribe_userStore();
  return `<div class="container mt-5 mb-3"><div class="row"><h1>${escape($userStore ? "Meus Pedidos" : "Encontrar pedido")}</h1></div></div> ${!$userStore ? `<div class="container"><div class="row"><div class="col-12 col-md-4"><div class="input-group mb-3"><input type="text" class="form-control" placeholder="Digite um email para buscar um pedido" aria-label="Digite um email para buscar um pedido" aria-describedby="button-addon2"${add_attribute("value", emailToSearch, 0)}> <button class="btn btn-outline-dark" type="button" id="button-addon2">${validate_component(SearchIcon, "SearchIcon").$$render($$result, { size: "18", class: "mb-1" }, {}, {})}
          Buscar</button></div> <span class="text-danger">${escape("")}</span></div></div></div>` : ``} <div class="container"><p>${escape(orders.length)} pedidos encontrados.</p> <div class="row" style="min-height: 43vh;">${orders.length > 0 ? `${each(orders, (order) => {
    return `<div class="col-12 col-md-6">${validate_component(OrderCard, "OrderCard").$$render(
      $$result,
      {
        createdAt: order.createdAt,
        id: order.id,
        status: order.status,
        total: Order.calcTotalPrice(order),
        products: order.products,
        userName: order?.userName,
        userEmail: order?.userEmail,
        userPhone: Masks.braziliamPhoneNumber(order?.userPhone)
      },
      {},
      {}
    )} </div>`;
  })}` : ``}</div></div>`;
});
export {
  Page as default
};
