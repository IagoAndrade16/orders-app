import { c as create_ssr_component, a as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
import { U as UsersService, C as CreateUserButton } from "../../../chunks/UsersService.js";
import { E as Engine } from "../../../chunks/Engine.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let values = {};
  let divErrorName = false;
  let divErrorEmail = false;
  let divErrorPassword = false;
  let divErrorPasswordLength = false;
  let errorsForm = 0;
  let loadingText;
  let disabled = false;
  let spinner = false;
  let errorToCreateUser = false;
  const verifyInputName = (name) => {
    if (!name) {
      divErrorName = true;
      errorsForm += 1;
      return;
    }
    divErrorName = false;
  };
  const verifyInputEmail = (email) => {
    if (!email) {
      divErrorEmail = true;
      errorsForm += 1;
      return;
    }
    divErrorEmail = false;
  };
  const verifyInputPassword = (password) => {
    if (!password) {
      divErrorPassword = true;
      errorsForm += 1;
      return;
    }
    if (password.length < 8) {
      divErrorPasswordLength = true;
      divErrorPassword = false;
      errorsForm += 1;
      return;
    }
    divErrorPassword = false;
    divErrorPasswordLength = false;
  };
  const handleCreateUser = async () => {
    errorsForm = 0;
    errorToCreateUser = false;
    const { email } = values;
    const { name } = values;
    const { password } = values;
    verifyInputName(name);
    verifyInputEmail(email);
    verifyInputPassword(password);
    if (errorsForm > 0)
      return;
    loadingText = "Criando";
    disabled = true;
    spinner = true;
    const response = await UsersService.post({ name, email, password });
    if (response.status === "SUCCESS") {
      Engine.navigateTo("/login");
    }
    if (response.status !== "SUCCESS") {
      loadingText = "";
      disabled = false;
      spinner = false;
      errorToCreateUser = true;
    }
  };
  return `<section class="vh-70 gradient-custom"><div class="container h-100"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-12 col-md-8 col-lg-6 col-xl-5"><div class="card bg-dark text-white"><div class="card-body p-5 text-center"><div class="mb-md-5 mt-md-4 pb-5"><h2 class="mb-5" data-svelte-h="svelte-1mwpsm">Criar conta</h2> <div data-mdb-input-init class="form-outline form-white mb-4"><input type="text" id="name" placeholder="Nome completo" class="form-control"${add_attribute("value", values.name, 0)}> ${divErrorName ? `<div class="text-danger" data-svelte-h="svelte-k7ukax">Coloque um nome válido!</div>` : ``}</div> <div data-mdb-input-init class="form-outline form-white mb-4"><input type="email" id="email" placeholder="Email" class="form-control"${add_attribute("value", values.email, 0)}> ${divErrorEmail ? `<div class="text-danger" data-svelte-h="svelte-q0ow02">Coloque um email válido!</div>` : ``}</div> <div data-mdb-input-init class="form-outline form-white mb-3"><input type="password" id="password" placeholder="Senha" class="form-control"${add_attribute("value", values.password, 0)}> ${divErrorPassword ? `<div class="text-danger" data-svelte-h="svelte-1ayryx8">Coloque uma senha válida!</div>` : ``} ${divErrorPasswordLength ? `<div class="text-danger" data-svelte-h="svelte-15twi89">A senha deve ter no mínimo 8 caracteres!</div>` : ``}</div> ${errorToCreateUser ? `<div class="mb-2 text-danger" data-svelte-h="svelte-yv59fw">Já existe uma conta com esse email, por favor tente outro.</div>` : ``} ${validate_component(CreateUserButton, "CreateUserButton").$$render(
    $$result,
    {
      loadingText,
      disabled,
      onClick: handleCreateUser,
      spinner,
      textButton: "Criar Conta"
    },
    {},
    {}
  )}</div> <div data-svelte-h="svelte-gn9l0w"><p class="mb-0">Já tem uma conta? <a href="/login" class="text-white-50 text-decoration-none">Entrar</a></p></div></div></div></div></div></div></section>`;
});
export {
  Page as default
};
