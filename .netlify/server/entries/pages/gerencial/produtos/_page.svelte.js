import { c as create_ssr_component, a as add_attribute, e as escape, b as subscribe, v as validate_component, d as each } from "../../../../chunks/ssr.js";
import { B as BodyMargin } from "../../../../chunks/BodyMargin.js";
import { P as ProductsService } from "../../../../chunks/ProductsService.js";
import { P as ProductCard } from "../../../../chunks/ProductCard.js";
import "../../../../chunks/client.js";
import { u as userStore } from "../../../../chunks/user.store.js";
import { t as toast } from "../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import Swal from "sweetalert2";
const PlusIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-plus " + escape(customClass, true)}"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>`;
});
class ToastService {
  static show = (config) => {
    const toastBackgrounds = {
      success: "#4caf50",
      error: "#f44336",
      info: "#2196f3",
      warning: "#ff9800"
    };
    toast.push(config.message, {
      theme: {
        "--toastBackground": toastBackgrounds[config.type],
        "--toastColor": "#fff",
        "--toastBarBackground": toastBackgrounds[config.type]
      },
      duration: config.duration ?? 1500
    });
  };
}
class DialogService {
  static async dialog(config) {
    return Swal.fire(config);
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let filteredProducts = [];
  let searchValue = void 0;
  const handleDeleteProduct = async (productId) => {
    const { isConfirmed: confirmDelete } = await DialogService.dialog({
      title: "Deseja realmente excluir este produto?",
      showDenyButton: true,
      confirmButtonText: "Excluir",
      denyButtonText: `Não deletar`,
      cancelButtonText: `Cancelar`
    });
    if (!confirmDelete)
      return;
    const token = $userStore?.token;
    const response = await ProductsService.deleteProduct({ productId, userId: $userStore.id }, token);
    if (response.status === "SUCCESS") {
      ToastService.show({
        message: "Produto excluído com sucesso",
        type: "info",
        duration: 3e3
      });
      filteredProducts = filteredProducts.filter((product) => product.id !== productId);
    } else {
      ToastService.show({
        message: "Erro ao excluir produto",
        type: "error",
        duration: 3e3
      });
    }
  };
  $$unsubscribe_userStore();
  return `${validate_component(BodyMargin, "BodyMargin").$$render($$result, {}, {}, {
    default: () => {
      return `<div class="row" data-svelte-h="svelte-1vjjiqa"><div class="col-12 col-md-4 mb-2"><h1>Produtos</h1> <p>Aqui você pode ver os produtos cadastrados.</p></div></div> <div class="row d-flex justify-content-between"><div class="col-12 col-md-4 mb-2"><input type="text" class="form-control mb-2" placeholder="Pesquise um produto pelo nome" aria-label="Pesquise um produto pelo nome" aria-describedby="button-addon2"${add_attribute("value", searchValue, 0)}> <span>Produtos encontrados: ${escape(filteredProducts.length)} produtos</span></div> <div class="col-12 col-md-2 mb-2"> <a href="/gerencial/produtos/adicionar" class="btn btn-outline-success w-100 float-md-end">Criar produto
        ${validate_component(PlusIcon, "PlusIcon").$$render($$result, { size: "16" }, {}, {})}</a></div></div> <div class="row">${each(filteredProducts, (product) => {
        return `<div class="col-sm-6 col-md-6 col-lg-3">${validate_component(ProductCard, "ProductCard").$$render(
          $$result,
          {
            imgSrc: product.imageUrl,
            title: product.name,
            price: product.price,
            productId: product.id,
            isAdmin: true,
            handleDeleteProduct
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
