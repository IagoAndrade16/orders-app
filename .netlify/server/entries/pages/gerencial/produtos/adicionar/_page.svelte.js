import { c as create_ssr_component, b as subscribe, v as validate_component, e as escape } from "../../../../../chunks/ssr.js";
import "../../../../../chunks/client.js";
import { B as BodyMargin } from "../../../../../chunks/BodyMargin.js";
import { I as InputComponent } from "../../../../../chunks/InputComponent.js";
import { u as userStore } from "../../../../../chunks/user.store.js";
import "buffer";
import "sweetalert2";
import * as yup from "yup";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => value);
  let values = {
    name: "",
    description: "",
    imageUrl: "",
    price: 0
  };
  yup.object().shape({
    name: yup.string().required("Nome do produto é obrigatório"),
    description: yup.string().required("Descrição do produto é obrigatória"),
    imageUrl: yup.string().required("URL da imagem do produto é obrigatória"),
    price: yup.number().required("Preço do produto é obrigatório")
  });
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(BodyMargin, "BodyMargin").$$render($$result, {}, {}, {
      default: () => {
        return `<section class="vh-70 gradient-custom"><div class="container h-100"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-12 col-md-8 col-lg-6 col-xl-5"><div class="card text-white"><div class="card-body p-5"><h2 class="mb-5 text-black" data-svelte-h="svelte-av5sh5">Cadastrar novo produto</h2> ${validate_component(InputComponent, "InputComponent").$$render(
          $$result,
          {
            id: "name",
            label: "Nome do produto",
            placeholder: "Nome do produto",
            containerClasses: "text-black",
            required: true,
            error: "",
            value: values.name
          },
          {
            value: ($$value) => {
              values.name = $$value;
              $$settled = false;
            }
          },
          {}
        )} <br> <div class="d-block"><label for="description" class="text-black" data-svelte-h="svelte-2v0awo">Descrição
                  <span class="text-danger">*</span></label> <textarea name="description" id="description" class="form-control">${escape("")}</textarea> <span class="text-danger">${escape("")}</span></div> <br> ${validate_component(InputComponent, "InputComponent").$$render(
          $$result,
          {
            id: "imageUrl",
            label: "URL da imagem do produto",
            placeholder: "URL da imagem",
            containerClasses: "text-black",
            required: true,
            error: "",
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
            error: "",
            value: values.price
          },
          {
            value: ($$value) => {
              values.price = $$value;
              $$settled = false;
            }
          },
          {}
        )} <br> <button class="${"btn btn-primary w-100 " + escape("", true)}">${escape("Cadastrar")}</button></div></div></div></div></div></section>`;
      }
    })}`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  return $$rendered;
});
export {
  Page as default
};
