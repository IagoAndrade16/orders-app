import { c as create_ssr_component, b as subscribe, v as validate_component, h as set_store_value } from "../../../../chunks/ssr.js";
import { I as InputComponent } from "../../../../chunks/InputComponent.js";
import { O as OrderResumeComponent } from "../../../../chunks/OrderResumeComponent.js";
import { E as Engine } from "../../../../chunks/Engine.js";
import { M as Masks, a as OrdersService } from "../../../../chunks/Masks.js";
import { c as cartStore } from "../../../../chunks/cart.store.js";
import Swal from "sweetalert2";
import * as yup from "yup";
class Validations {
  static isBrazilianPhone(phone) {
    return /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/.test(phone);
  }
  static isValidZipCode(zipCode) {
    return /^\d{5}-\d{3}$/.test(zipCode);
  }
  static isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  static async validateYupSchema(schema, data) {
    try {
      await schema.validate(data, { abortEarly: false });
      return null;
    } catch (err) {
      return err.inner.reduce((acc, err2) => {
        return { ...acc, [err2.path]: err2.message };
      }, {});
    }
  }
}
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $cartStore, $$unsubscribe_cartStore;
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => $cartStore = value);
  let errors = null;
  let submitFormButtonDisabled = false;
  let loadingText = "Finalizando pedido...";
  const values = {
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    zipCode: "",
    neighborhood: "",
    street: "",
    number: "",
    complement: "",
    email: "",
    paymentMethod: "pix"
  };
  const formSchema = yup.object().shape({
    firstName: yup.string().min(3, "O campo nome deve conter no mínimo 3 caracteres").required("O campo nome é obrigatório"),
    lastName: yup.string().min(3, "O campo sobrenome deve conter no mínimo 3 caracteres").required("O campo sobrenome é obrigatório"),
    phone: yup.string().required().test("phone", "Telefone inválido", (value) => Validations.isBrazilianPhone(value)),
    city: yup.string().min(3, "O campo cidade deve conter no mínimo 3 caracteres").required("O campo cidade é obrigatório"),
    zipCode: yup.string().required().test("zipCode", "CEP inválido", (value) => Validations.isValidZipCode(value)),
    neighborhood: yup.string().min(3, "O campo bairro deve conter no mínimo 3 caracteres").required("O campo bairro é obrigatório"),
    street: yup.string().min(3, "O campo rua deve conter no mínimo 3 caracteres").required("O campo rua é obrigatório"),
    number: yup.string().min(1, "O campo número deve conter no mínimo 1 caracter").required("O campo número é obrigatório"),
    email: yup.string().email("O e-mail digitado é inválido").nullable().default(null),
    complement: yup.string()
  });
  const handleCreateOrder = async () => {
    errors = null;
    errors = await Validations.validateYupSchema(formSchema, values);
    if (errors)
      return;
    submitFormButtonDisabled = true;
    const res = await OrdersService.create({
      city: values.city,
      complement: values.complement,
      firstName: values.firstName,
      lastName: values.lastName,
      neighborhood: values.neighborhood,
      number: values.number,
      phone: values.phone,
      street: values.street,
      email: values.email,
      zipCode: values.zipCode,
      products: $cartStore.map((product) => ({
        productId: product.id,
        quantityOfProduct: product.quantity
      })),
      paymentMethod: values.paymentMethod
    });
    if (res) {
      set_store_value(cartStore, $cartStore = [], $cartStore);
      Engine.navigateTo(`/pedidos/finalizado?id=${res.orderId}`);
    } else {
      submitFormButtonDisabled = false;
      Swal.fire({
        title: "Ooops!",
        text: "Não foi possível completar seu pedido, tente novamente mais tarde.",
        icon: "error"
      });
    }
  };
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="container mt-5"><div class="row" data-svelte-h="svelte-1954hsc"><div class="col-12"><h4 class="text-center text-lg-start">Endereço de entrega</h4></div></div> <div class="row mt-3 d-none d-lg-block" data-svelte-h="svelte-77v9bt"><div class="col-12"><nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb"><ol class="breadcrumb"><li class="breadcrumb-item active">Início</li> <li class="breadcrumb-item active" aria-current="page">Pedidos</li> <li class="breadcrumb-item" aria-current="page">Endereço de entrega</li></ol></nav></div></div> <div class="row mt-2 gap-2"><div class="col-12 col-lg-8 card shadow border-0 p-5"><form class="row needs-validation" novalidate>${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "first-name",
        label: "Nome",
        classes: values.firstName.length > 3 ? "is-valid" : "",
        placeholder: "Digite seu nome",
        required: true,
        containerClasses: "col-md-4 mb-3",
        error: errors ? errors.firstName : "",
        value: values.firstName
      },
      {
        value: ($$value) => {
          values.firstName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "last-name",
        label: "Sobrenome",
        classes: values.lastName.length > 3 ? "is-valid" : "",
        placeholder: "Digite seu sobrenome",
        required: true,
        containerClasses: "col-md-4 mb-3",
        error: errors ? errors.lastName : "",
        value: values.lastName
      },
      {
        value: ($$value) => {
          values.lastName = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "phone",
        label: "Telefone",
        classes: Validations.isBrazilianPhone(values.phone) ? "is-valid" : "",
        placeholder: "Ex: (00) 00000-0000",
        required: true,
        containerClasses: "col-md-4 mb-3",
        error: errors ? errors.phone : "",
        onInput: (e) => e.target.value = Masks.braziliamPhoneNumber(e.target.value),
        value: values.phone
      },
      {
        value: ($$value) => {
          values.phone = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "email",
        label: "E-mail",
        smallText: "(utilizado para acompanhamento do pedido)",
        classes: Validations.isValidEmail(values.email) ? "is-valid" : "",
        placeholder: "Digite seu e-mail",
        containerClasses: "col-md-6 mb-3",
        error: errors ? errors.email : "",
        value: values.email
      },
      {
        value: ($$value) => {
          values.email = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "city",
        label: "Cidade",
        classes: values.city.length > 3 ? "is-valid" : "",
        placeholder: "Ex: Bananal",
        required: true,
        containerClasses: "col-md-6 mb-3",
        error: errors ? errors.city : "",
        value: values.city
      },
      {
        value: ($$value) => {
          values.city = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "zip-code",
        label: "CEP",
        classes: values.zipCode.length === 9 ? "is-valid" : "",
        placeholder: "00000-000",
        required: true,
        containerClasses: "col-md-3 mb-3",
        error: errors ? errors.zipCode : "",
        onInput: (e) => e.target.value = Masks.zipCode(e.target.value),
        value: values.zipCode
      },
      {
        value: ($$value) => {
          values.zipCode = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "neighborhood",
        label: "Bairro",
        classes: values.neighborhood.length > 3 ? "is-valid" : "",
        placeholder: "Ex: Retiro",
        required: true,
        containerClasses: "col-md-3 mb-3",
        error: errors ? errors.neighborhood : "",
        value: values.neighborhood
      },
      {
        value: ($$value) => {
          values.neighborhood = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "street",
        label: "Rua",
        classes: values.street.length > 3 ? "is-valid" : "",
        placeholder: "Ex: Rua 2",
        required: true,
        containerClasses: "col-md-3 mb-3",
        error: errors ? errors.street : "",
        value: values.street
      },
      {
        value: ($$value) => {
          values.street = $$value;
          $$settled = false;
        }
      },
      {}
    )} ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "number",
        label: "Número",
        classes: values.number.length > 1 ? "is-valid" : "",
        placeholder: "Ex: 3201",
        required: true,
        containerClasses: "col-md-3 mb-3",
        error: errors ? errors.number : "",
        value: values.number
      },
      {
        value: ($$value) => {
          values.number = $$value;
          $$settled = false;
        }
      },
      {}
    )} <div class="col-12 col-md-4 my-2"><label for="payment-method" class="mb-2" data-svelte-h="svelte-yoxu9f">Forma de pagamento:</label> <select name="payment-method" id="payment-method" class="form-control"><option value="credit-card" data-svelte-h="svelte-1qvczos">Cartão de crédito (pagamento na hora da entrega)</option><option value="debit-card" data-svelte-h="svelte-1nwm68u">Cartão de débito (pagamento na hora da entrega)</option><option value="cash" data-svelte-h="svelte-1fzsl4s">Dinheiro (pagamento na hora da entrega)</option><option selected value="pix" data-svelte-h="svelte-nep22f">Pix</option></select></div> ${validate_component(InputComponent, "InputComponent").$$render(
      $$result,
      {
        id: "complement",
        classes: "col-md-6 mb-3",
        label: "Complemento",
        placeholder: "Ex: Rua sem saída",
        value: values.complement
      },
      {
        value: ($$value) => {
          values.complement = $$value;
          $$settled = false;
        }
      },
      {}
    )}</form></div> ${validate_component(OrderResumeComponent, "OrderResumeComponent").$$render(
      $$result,
      {
        handleNextAction: handleCreateOrder,
        continueButtonDisabled: submitFormButtonDisabled,
        continueButtonLoadingText: loadingText
      },
      {
        continueButtonDisabled: ($$value) => {
          submitFormButtonDisabled = $$value;
          $$settled = false;
        },
        continueButtonLoadingText: ($$value) => {
          loadingText = $$value;
          $$settled = false;
        }
      },
      {}
    )}</div></div>`;
  } while (!$$settled);
  $$unsubscribe_cartStore();
  return $$rendered;
});
export {
  Page as default
};
