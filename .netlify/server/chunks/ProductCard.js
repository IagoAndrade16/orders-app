import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, v as validate_component } from "./ssr.js";
import { g as goto } from "./client.js";
import { U as Utils } from "./Utils.js";
import { P as ProductQuantityComponent, T as Trash2Icon } from "./ProductQuantityComponent.js";
import "./SvelteToast.svelte_svelte_type_style_lang.js";
import { c as cartStore } from "./cart.store.js";
const Edit2Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-edit-2 " + escape(customClass, true)}"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`;
});
const css = {
  code: ".card-img-top.svelte-189bh9x.svelte-189bh9x{max-height:11rem;object-fit:cover}.view-product.svelte-189bh9x.svelte-189bh9x{width:100%}.card.svelte-189bh9x.svelte-189bh9x:hover{opacity:0.8;transition:0.3s}.card.svelte-189bh9x.svelte-189bh9x{opacity:1;transition:0.5s}.card.svelte-189bh9x>.svelte-189bh9x{cursor:pointer}",
  map: '{"version":3,"file":"ProductCard.svelte","sources":["ProductCard.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { Engine } from \\"$lib/core/Engine\\";\\nimport { Utils } from \\"$lib/utils/Utils\\";\\nimport { Edit2Icon, Trash2Icon } from \\"svelte-feather-icons\\";\\nimport { goto } from \\"$app/navigation\\";\\nimport ProductQuantityComponent from \\"./ProductQuantityComponent.svelte\\";\\nimport { ToastService } from \\"$lib/services/ToastService\\";\\nimport { cartStore } from \\"$lib/stores/cart.store\\";\\nexport let imgSrc;\\nexport let title;\\nexport let price;\\nexport let productId;\\nexport let buttonAdditionalClasses = \\"\\";\\nexport let isAdmin = false;\\nexport let buttonColor = \\"dark\\";\\nexport let showAddToCartButton = false;\\nexport let createdAt;\\nexport let updatedAt;\\nexport let description;\\nexport let handleDeleteProduct;\\nexport let goToRecommendedProduct = async () => {\\n  await goto(`/produto?id=${productId}`);\\n};\\nlet quantity = 1;\\nconst handleAddProductToCart = () => {\\n  const productAlreadyInCart = $cartStore.find((productInCart) => productInCart.id === productId);\\n  if (productAlreadyInCart) {\\n    ToastService.show({ message: \\"Este produto j\\\\xE1 existe no seu carrinho de compras.\\", type: \\"info\\" });\\n    return;\\n  }\\n  ToastService.show({ message: \\"Produto adicionado ao carrinho.\\", type: \\"success\\" });\\n  $cartStore = [{\\n    id: productId,\\n    deleted: false,\\n    deletedAt: null,\\n    description,\\n    imageUrl: imgSrc,\\n    name: title,\\n    price,\\n    updatedAt,\\n    createdAt,\\n    userId: \\"\\",\\n    quantity\\n  }, ...$cartStore];\\n};\\n<\/script>\\n\\n<!-- svelte-ignore a11y-click-events-have-key-events -->\\n<!-- svelte-ignore a11y-no-static-element-interactions -->\\n<!-- svelte-ignore a11y-missing-attribute -->\\n<a class=\\"card my-2 shadow text-decoration-none\\">\\n  <img src=\\"{imgSrc}\\" class=\\"card-img-top\\" alt=\\"Product Card\\">\\n  <div class=\\"card-body text-decoration-none text-center\\">\\n    <h4 class=\\"card-title text-center\\">{title}</h4>\\n    <span class=\\"text-center\\">{Utils.formatNumberToBrl(price)}</span>\\n    {#if showAddToCartButton}\\n      <ProductQuantityComponent bind:quantity={quantity} />\\n    {/if}\\n    \\n  </div>\\n  {#if isAdmin}\\n  <div class=\\"d-flex\\">\\n    <button on:click={() => Engine.navigateTo(`/gerencial/produtos/editar?id=${productId}`)} class=\\"btn btn-warning text-white {buttonAdditionalClasses} view-product rounded-0\\">\\n      Editar produto\\n      <Edit2Icon size=16 />\\n    </button>\\n    \\n    <button on:click={() => handleDeleteProduct(productId)} class=\\"btn btn-danger {buttonAdditionalClasses} view-product rounded-0\\">\\n      Excluir\\n      <Trash2Icon size=16 />\\n    </button>\\n  </div>\\n  {/if}\\n    <button on:click={goToRecommendedProduct} class=\\"btn btn-{buttonColor} {buttonAdditionalClasses} view-product rounded-0\\">Ver produto</button>\\n    <button on:click={handleAddProductToCart} class=\\"btn btn-outline-success view-product rounded-0\\">Adicionar ao carrinho</button>\\n</a>\\n\\n<style>\\n  .card-img-top {\\n    max-height: 11rem;\\n    object-fit: cover;\\n  }\\n\\n  .view-product {\\n    width: 100%;\\n  }\\n\\n  .card:hover {\\n\\t\\topacity: 0.8;\\n\\t\\ttransition: 0.3s;\\n\\t}\\n\\n\\t.card {\\n\\t\\topacity: 1;\\n\\t\\ttransition: 0.5s;\\n\\t}\\n\\n\\t.card > * {\\n\\t\\tcursor: pointer;\\n\\t}\\n</style>"],"names":[],"mappings":"AA6EE,2CAAc,CACZ,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,KACd,CAEA,2CAAc,CACZ,KAAK,CAAE,IACT,CAEA,mCAAK,MAAO,CACZ,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,IACb,CAEA,mCAAM,CACL,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IACb,CAEA,oBAAK,CAAG,eAAE,CACT,MAAM,CAAE,OACT"}'
};
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_cartStore;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => value);
  let { imgSrc } = $$props;
  let { title } = $$props;
  let { price } = $$props;
  let { productId } = $$props;
  let { buttonAdditionalClasses = "" } = $$props;
  let { isAdmin = false } = $$props;
  let { buttonColor = "dark" } = $$props;
  let { showAddToCartButton = false } = $$props;
  let { createdAt } = $$props;
  let { updatedAt } = $$props;
  let { description } = $$props;
  let { handleDeleteProduct } = $$props;
  let { goToRecommendedProduct = async () => {
    await goto();
  } } = $$props;
  let quantity = 1;
  if ($$props.imgSrc === void 0 && $$bindings.imgSrc && imgSrc !== void 0)
    $$bindings.imgSrc(imgSrc);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.price === void 0 && $$bindings.price && price !== void 0)
    $$bindings.price(price);
  if ($$props.productId === void 0 && $$bindings.productId && productId !== void 0)
    $$bindings.productId(productId);
  if ($$props.buttonAdditionalClasses === void 0 && $$bindings.buttonAdditionalClasses && buttonAdditionalClasses !== void 0)
    $$bindings.buttonAdditionalClasses(buttonAdditionalClasses);
  if ($$props.isAdmin === void 0 && $$bindings.isAdmin && isAdmin !== void 0)
    $$bindings.isAdmin(isAdmin);
  if ($$props.buttonColor === void 0 && $$bindings.buttonColor && buttonColor !== void 0)
    $$bindings.buttonColor(buttonColor);
  if ($$props.showAddToCartButton === void 0 && $$bindings.showAddToCartButton && showAddToCartButton !== void 0)
    $$bindings.showAddToCartButton(showAddToCartButton);
  if ($$props.createdAt === void 0 && $$bindings.createdAt && createdAt !== void 0)
    $$bindings.createdAt(createdAt);
  if ($$props.updatedAt === void 0 && $$bindings.updatedAt && updatedAt !== void 0)
    $$bindings.updatedAt(updatedAt);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0)
    $$bindings.description(description);
  if ($$props.handleDeleteProduct === void 0 && $$bindings.handleDeleteProduct && handleDeleteProduct !== void 0)
    $$bindings.handleDeleteProduct(handleDeleteProduct);
  if ($$props.goToRecommendedProduct === void 0 && $$bindings.goToRecommendedProduct && goToRecommendedProduct !== void 0)
    $$bindings.goToRecommendedProduct(goToRecommendedProduct);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `   <a class="card my-2 shadow text-decoration-none svelte-189bh9x"><img${add_attribute("src", imgSrc, 0)} class="card-img-top svelte-189bh9x" alt="Product Card"> <div class="card-body text-decoration-none text-center svelte-189bh9x"><h4 class="card-title text-center">${escape(title)}</h4> <span class="text-center">${escape(Utils.formatNumberToBrl(price))}</span> ${showAddToCartButton ? `${validate_component(ProductQuantityComponent, "ProductQuantityComponent").$$render(
      $$result,
      { quantity },
      {
        quantity: ($$value) => {
          quantity = $$value;
          $$settled = false;
        }
      },
      {}
    )}` : ``}</div> ${isAdmin ? `<div class="d-flex svelte-189bh9x"><button class="${"btn btn-warning text-white " + escape(buttonAdditionalClasses, true) + " view-product rounded-0 svelte-189bh9x"}">Editar produto
      ${validate_component(Edit2Icon, "Edit2Icon").$$render($$result, { size: "16" }, {}, {})}</button> <button class="${"btn btn-danger " + escape(buttonAdditionalClasses, true) + " view-product rounded-0 svelte-189bh9x"}">Excluir
      ${validate_component(Trash2Icon, "Trash2Icon").$$render($$result, { size: "16" }, {}, {})}</button></div>` : ``} <button class="${"btn btn-" + escape(buttonColor, true) + " " + escape(buttonAdditionalClasses, true) + " view-product rounded-0 svelte-189bh9x"}">Ver produto</button> <button class="btn btn-outline-success view-product rounded-0 svelte-189bh9x" data-svelte-h="svelte-1h0pmgo">Adicionar ao carrinho</button> </a>`;
  } while (!$$settled);
  $$unsubscribe_cartStore();
  return $$rendered;
});
export {
  ProductCard as P
};
