import { c as create_ssr_component, v as validate_component, d as each } from "../../../../chunks/ssr.js";
import { B as BodyMargin } from "../../../../chunks/BodyMargin.js";
import { O as OrderCard, a as Order } from "../../../../chunks/Order.js";
import "buffer";
import { M as Masks } from "../../../../chunks/Masks.js";
import "moment";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let filteredOrders = [];
  return `${validate_component(BodyMargin, "BodyMargin").$$render($$result, {}, {}, {
    default: () => {
      return `<h3 data-svelte-h="svelte-4rbomq">Visualizar pedidos</h3> <p data-svelte-h="svelte-1c5t1m5">Gerencie todos os pedidos feitos até o momento</p> <div class="row"> <div class="col-12 col-md-3 my-3"><label for="search-by-order-status" data-svelte-h="svelte-17mrdf9">Data de criação</label> <select name="search-by-date" class="form-control" id="search-by-date-status"><option value="all" selected data-svelte-h="svelte-15yj1kq">Todo período</option><option value="today" data-svelte-h="svelte-1y0zhy9">Hoje</option><option value="yesterday" data-svelte-h="svelte-19qvkrl">Ontem</option><option value="last-week" data-svelte-h="svelte-fhk6d3">Última semana</option><option value="this-month" data-svelte-h="svelte-hgl217">Esse mês</option></select></div></div> <div class="row">${each(filteredOrders, (order) => {
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
            userPhone: Masks.braziliamPhoneNumber(order?.userPhone),
            isAdmin: true
          },
          {},
          {}
        )} </div>`;
      })}</div>`;
    }
  })}`;
});
export {
  Page as default
};
