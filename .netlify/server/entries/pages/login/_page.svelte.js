import { c as create_ssr_component, b as subscribe, a as add_attribute, v as validate_component, h as set_store_value } from "../../../chunks/ssr.js";
import { E as Engine } from "../../../chunks/Engine.js";
import { U as UsersService, C as CreateUserButton } from "../../../chunks/UsersService.js";
import { u as userStore } from "../../../chunks/user.store.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  let values = {};
  let spinner = false;
  let disabled = false;
  let loadingText;
  let errorToAuthUser = false;
  let errorsForm = 0;
  let divErrorEmail = false;
  let divErrorPassword = false;
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
    divErrorPassword = false;
  };
  const handleAuthUser = async () => {
    errorsForm = 0;
    errorToAuthUser = false;
    const { email } = values;
    const { password } = values;
    verifyInputEmail(email);
    verifyInputPassword(password);
    if (errorsForm > 0)
      return;
    spinner = true;
    loadingText = "Entrando";
    disabled = true;
    const response = await UsersService.authUser({ email, password });
    if (response.status === "SUCCESS") {
      set_store_value(userStore, $userStore = response.data ?? null, $userStore);
      Engine.navigateTo("/");
    }
    if (response.status !== "SUCCESS") {
      spinner = false;
      disabled = false;
      loadingText = "";
      errorToAuthUser = true;
    }
  };
  $$unsubscribe_userStore();
  return `<section class="vh-70 gradient-custom"><div class="container h-100"><div class="row d-flex justify-content-center align-items-center h-100"><div class="col-12 col-md-8 col-lg-6 col-xl-5"><div class="card bg-dark text-white"><div class="card-body p-5 text-center"><div class="mb-md-5 mt-md-4 pb-5"><h2 class="mb-2" data-svelte-h="svelte-1fxpo53">Entrar</h2> <p class="text-white-50 mb-5" data-svelte-h="svelte-j1a67">Insira seu email e senha para continuar</p> <div data-mdb-input-init class="form-outline form-white mb-4"><input type="email" id="typeEmailX" placeholder="Email" class="form-control"${add_attribute("value", values.email, 0)}> ${divErrorEmail ? `<div class="text-danger" data-svelte-h="svelte-q0ow02">Coloque um email válido!</div>` : ``}</div> <div data-mdb-input-init class="form-outline form-white mb-4"><input type="password" id="typePasswordX" placeholder="Senha" class="form-control"${add_attribute("value", values.password, 0)}> ${divErrorPassword ? `<div class="text-danger" data-svelte-h="svelte-1ayryx8">Coloque uma senha válida!</div>` : ``}</div>  ${errorToAuthUser ? `<div class="mb-1 text-danger" data-svelte-h="svelte-1s2sezs">Emai ou senha incorretos, tente novamente!</div>` : ``} ${validate_component(CreateUserButton, "CreateUserButton").$$render(
    $$result,
    {
      textButton: "Login",
      disabled,
      onClick: handleAuthUser,
      spinner,
      loadingText
    },
    {},
    {}
  )} <div data-svelte-h="svelte-148tsbk"><p class="mt-3">Não tem uma conta? <a href="/criar-conta" class="text-white-50 text-decoration-none">Crie uma</a></p></div></div> <br> <br></div></div></div></div></div></section>`;
});
export {
  Page as default
};
