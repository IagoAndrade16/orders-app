import { c as create_ssr_component, e as escape, v as validate_component, d as each } from "./ssr.js";
import "./client.js";
import "buffer";
import { U as Utils } from "./Utils.js";
import { O as OrderStatus } from "./Masks.js";
const OrderStatusComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { status } = $$props;
  const getStatusBadgeColor = (newStatus) => {
    console.log(newStatus, status);
    ({
      [OrderStatus.DELIVERY_ROUTE]: "text-bg-info",
      [OrderStatus.FINISHED]: "text-bg-success",
      [OrderStatus.PREPARE_LIST]: "text-bg-info"
    });
  };
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.getStatusBadgeColor === void 0 && $$bindings.getStatusBadgeColor && getStatusBadgeColor !== void 0)
    $$bindings.getStatusBadgeColor(getStatusBadgeColor);
  return `<p class="card-text">Status:
  <span class="${"badge text-white " + escape(
    status === OrderStatus.FINISHED ? "text-bg-success" : "text-bg-info",
    true
  )}">${escape(status)}</span></p>`;
});
const OrderCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  let { status } = $$props;
  let { createdAt } = $$props;
  let { total } = $$props;
  let { products } = $$props;
  let { userName = null } = $$props;
  let { userEmail = null } = $$props;
  let { userPhone = null } = $$props;
  let { isAdmin = false } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.status === void 0 && $$bindings.status && status !== void 0)
    $$bindings.status(status);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  if ($$props.total === void 0 && $$bindings.total && total !== void 0)
    $$bindings.total(total);
  if ($$props.products === void 0 && $$bindings.products && products !== void 0)
    $$bindings.products(products);
  if ($$props.userName === void 0 && $$bindings.userName && userName !== void 0)
    $$bindings.userName(userName);
  if ($$props.userEmail === void 0 && $$bindings.userEmail && userEmail !== void 0)
    $$bindings.userEmail(userEmail);
  if ($$props.userPhone === void 0 && $$bindings.userPhone && userPhone !== void 0)
    $$bindings.userPhone(userPhone);
  if ($$props.isAdmin === void 0 && $$bindings.isAdmin && isAdmin !== void 0)
    $$bindings.isAdmin(isAdmin);
  return `<div class="card mb-2"><div class="card-body"><h5 class="card-title">Pedido #${escape(id)}</h5> ${validate_component(OrderStatusComponent, "OrderStatusComponent").$$render($$result, { status }, {}, {})} <p class="card-text">Data: ${escape(createdAt)}</p> <p class="card-text">Nome no pedido: ${escape(userName ?? "Não informado")}</p> <p class="card-text">Email do cliente: ${escape(userEmail ?? "Não informado")}</p> <p class="card-text">Telefone: ${escape(userPhone ?? "Não informado")}</p> <p class="card-text">Valor: ${escape(Utils.formatNumberToBrl(total))}</p> ${isAdmin ? `<button class="btn btn-outline-dark" data-svelte-h="svelte-1hd5j85">Visualizar pedido completo</button>` : `<div class="" data-bs-toggle="collapse" data-bs-target="${"#faqItem-" + escape(id, true)}" aria-expanded="false" aria-controls="${"faqItem-" + escape(id, true)}"><div class="btn btn-outline-dark" data-svelte-h="svelte-8hrihn"><div>Ver detalhes</div></div> <div class="collapse row gap-2 p-3" id="${"faqItem-" + escape(id, true)}">${each(products, (product) => {
    return `<div class="col-12 col-lg-3 p-3 border shadow mt-3 d-flex"> <div><span><b>${escape(product.quantity)} x ${escape(product.name)} </b></span> <br> <span>Valor: ${escape(Utils.formatNumberToBrl(product.price * product.quantity))}</span></div> <hr> </div>`;
  })}</div></div>`}</div></div>`;
});
class Order {
  constructor(id, userName, userPhone, userAddress, userEmail, products, createdAt, updatedAt, paymentMethod) {
    this.id = id;
    this.userName = userName;
    this.userPhone = userPhone;
    this.userAddress = userAddress;
    this.userEmail = userEmail;
    this.products = products;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.paymentMethod = paymentMethod;
  }
  static calcTotalPrice(order) {
    return order.products.reduce((acc, product) => acc + product.price * product.quantity, 0);
  }
}
export {
  OrderCard as O,
  Order as a
};
