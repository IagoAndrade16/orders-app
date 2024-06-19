import { c as create_ssr_component, e as escape } from "./ssr.js";
import { O as OrdersApi } from "./OrdersApi.js";
const CreateUserButton = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { loadingText = null } = $$props;
  let { onClick = null } = $$props;
  let { disabled = true } = $$props;
  let { spinner = false } = $$props;
  let { textButton } = $$props;
  if ($$props.loadingText === void 0 && $$bindings.loadingText && loadingText !== void 0)
    $$bindings.loadingText(loadingText);
  if ($$props.onClick === void 0 && $$bindings.onClick && onClick !== void 0)
    $$bindings.onClick(onClick);
  if ($$props.disabled === void 0 && $$bindings.disabled && disabled !== void 0)
    $$bindings.disabled(disabled);
  if ($$props.spinner === void 0 && $$bindings.spinner && spinner !== void 0)
    $$bindings.spinner(spinner);
  if ($$props.textButton === void 0 && $$bindings.textButton && textButton !== void 0)
    $$bindings.textButton(textButton);
  return `<button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light px-5" type="submit" ${disabled ? "disabled" : ""} style="display: inline-flex; align-items: center;">${escape(loadingText ? loadingText : textButton)} ${spinner ? `<div class="spinner-border text-light ms-4" role="status"></div>` : ``}</button>`;
});
class UsersService {
  static async post(input) {
    const res = await OrdersApi.post(`/users/`, {
      name: input.name,
      password: input.password,
      email: input.email
    });
    if (res.statusCode === 201) {
      return {
        status: "SUCCESS"
      };
    }
    if (res.statusCode === 416) {
      return {
        status: "UNAUTHORIZED"
      };
    }
    return {
      status: "UNKNOWN"
    };
  }
  static async authUser(input) {
    const res = await OrdersApi.get(`/users/auth`, {
      email: input.email,
      password: input.password
    });
    if (res.statusCode === 200) {
      return {
        status: "SUCCESS",
        data: {
          ...res.data.result.user,
          token: res.data.result.auth.token
        }
      };
    }
    if (res.statusCode === 416) {
      return {
        status: "UNAUTHORIZED",
        data: res.data
      };
    }
    return {
      status: "UNKNOWN",
      data: res.data
    };
  }
}
export {
  CreateUserButton as C,
  UsersService as U
};
