import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import { B as BodyMargin } from "../../../../../chunks/BodyMargin.js";
import { I as InputComponent } from "../../../../../chunks/InputComponent.js";
import "buffer";
import { u as userStore } from "../../../../../chunks/user.store.js";
import "../../../../../chunks/client.js";
import "../../../../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  let values = {
    name: "",
    description: "",
    imageUrl: "",
    price: 0
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(BodyMargin, "BodyMargin").$$render($$result, {}, {}, {
      default: () => {
        return `<section class="vh-70 gradient-custom"><div class="container h-100"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-12 col-md-8 col-lg-6 col-xl-5"><div class="card text-white"><div class="card-body p-5"><h2 class="mb-5 text-black text-center" data-svelte-h="svelte-r755le">Editar Produto</h2> ${validate_component(InputComponent, "InputComponent").$$render(
          $$result,
          {
            id: "name",
            label: "Nome do produto",
            placeholder: "Nome do produto",
            containerClasses: "text-black",
            required: true,
            value: values.name
          },
          {
            value: ($$value) => {
              values.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} <div class="d-block"><label for="description" class="text-black" data-svelte-h="svelte-1snhw6w">Descrição
                      <span class="text-danger">*</span></label> <textarea name="description" id="description" class="form-control">${escape("")}</textarea> </div> <br> ${validate_component(InputComponent, "InputComponent").$$render(
          $$result,
          {
            id: "imageUrl",
            label: "URL da imagem do produto",
            placeholder: "URL da imagem",
            containerClasses: "text-black",
            required: true,
            value: values.imageUrl
          },
          {
            value: ($$value) => {
              values.imageUrl = $$value;
              $$settled = false;
            }
          },
          {}
        )} <br> ${validate_component(InputComponent, "InputComponent").$$render(
          $$result,
          {
            id: "price",
            label: "Preço do produto (R$)",
            placeholder: "Preço do produto (R$)",
            containerClasses: "text-black",
            required: true,
            value: values.price
          },
          {
            value: ($$value) => {
              values.price = $$value;
              $$settled = false;
            }
          },
          {}
        )} <center><button class="btn btn-primary mt-2 ">${escape("Atualizar")}</button></center> <br></div></div></div></div></div></section>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Page as default
};
