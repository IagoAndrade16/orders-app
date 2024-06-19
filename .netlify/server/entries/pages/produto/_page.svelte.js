import { c as create_ssr_component, b as subscribe, a as add_attribute, e as escape, v as validate_component, d as each } from "../../../chunks/ssr.js";
import { p as page } from "../../../chunks/stores.js";
import { P as ProductCard } from "../../../chunks/ProductCard.js";
import { P as ProductsService } from "../../../chunks/ProductsService.js";
import "../../../chunks/client.js";
import { U as Utils } from "../../../chunks/Utils.js";
import { S as ShoppingCartIcon } from "../../../chunks/ShoppingCartIcon.js";
import "../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { c as cartStore } from "../../../chunks/cart.store.js";
import { P as ProductQuantityComponent } from "../../../chunks/ProductQuantityComponent.js";
import "sweetalert2";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cartStore;
  let $page, $$unsubscribe_page;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => value);
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let quantity = 1;
  let products = [];
  let product = null;
  let handleDeleteProduct;
  $page.url.searchParams.get("id");
  const goToRecommendedProduct = async (productIdToFind) => {
    const getProductRes = await ProductsService.get(productIdToFind);
    product = getProductRes.data;
    window.scrollTo(0, 0);
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container my-5 mx-auto"><div class="row"><div class="col-sm-12 col-md-6 col-lg-6"> <img${add_attribute("src", product?.imageUrl, 0)} alt="product-image" class="img-fluid float-end"></div> <div class="col-sm-12 col-md-6 col-lg-5 d-flex flex-column justify-content-center items-center mt-3 mt-md-0"><h3 class="text-center text-lg-start">${escape(product?.name)}</h3> <h5 class="text-danger text-center text-lg-start">${escape(Utils.formatNumberToBrl(product?.price ?? 0))}</h5> <p class="mt-5 text-center text-lg-start" data-svelte-h="svelte-vh2no7">Quantidade:</p> ${validate_component(ProductQuantityComponent, "ProductQuantityComponent").$$render(
      $$result,
      { quantity },
      {
        quantity: ($$value) => {
          quantity = $$value;
          $$settled = false;
        }
      },
      {}
    )} <button class="btn btn-outline-dark rounded-0 my-5">Adicionar ao carrinho
        ${validate_component(ShoppingCartIcon, "ShoppingCartIcon").$$render($$result, { size: "17", class: "mb-1" }, {}, {})}</button>  <div id="product-description my-5"><h4 class="text-dark" data-svelte-h="svelte-2gssbi">Descrição do produto</h4> ${escape(product?.description)}</div></div></div> <div class="row my-5"><h4 class="text-dark mt-5 text-center" data-svelte-h="svelte-k6tgta">Produtos que talvez você goste</h4> ${each(products, (product2) => {
      return `<div class="col-sm-4 col-md-4 col-lg-2 mt-5">${validate_component(ProductCard, "ProductCard").$$render(
        $$result,
        {
          goToRecommendedProduct: () => goToRecommendedProduct(product2.id),
          imgSrc: product2.imgSrc,
          title: product2.title,
          price: product2.price,
          productId: product2.productId,
          handleDeleteProduct,
          createdAt: product2.createdAt,
          updatedAt: product2.updatedAt,
          description: product2.text
        },
        {
          imgSrc: ($$value) => {
            product2.imgSrc = $$value;
            $$settled = false;
          },
          title: ($$value) => {
            product2.title = $$value;
            $$settled = false;
          },
          price: ($$value) => {
            product2.price = $$value;
            $$settled = false;
          },
          productId: ($$value) => {
            product2.productId = $$value;
            $$settled = false;
          },
          handleDeleteProduct: ($$value) => {
            handleDeleteProduct = $$value;
            $$settled = false;
          },
          createdAt: ($$value) => {
            product2.createdAt = $$value;
            $$settled = false;
          },
          updatedAt: ($$value) => {
            product2.updatedAt = $$value;
            $$settled = false;
          },
          description: ($$value) => {
            product2.text = $$value;
            $$settled = false;
          }
        },
        {}
      )} </div>`;
    })}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_cartStore();
  $$unsubscribe_page();
  return $$rendered;
});
export {
  Page as default
};
