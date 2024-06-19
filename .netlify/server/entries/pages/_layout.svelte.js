import { n as noop, c as create_ssr_component, a as add_attribute, e as escape, v as validate_component, b as subscribe, d as each, f as assign, i as identity, o as onDestroy, m as missing_component, g as null_to_empty } from "../../chunks/ssr.js";
import "../../chunks/client.js";
import { u as userStore } from "../../chunks/user.store.js";
import { c as cartStore } from "../../chunks/cart.store.js";
import { U as Utils } from "../../chunks/Utils.js";
import { S as ShoppingCartIcon } from "../../chunks/ShoppingCartIcon.js";
import { P as ProductQuantityComponent, T as Trash2Icon } from "../../chunks/ProductQuantityComponent.js";
import { t as toast } from "../../chunks/SvelteToast.svelte_svelte_type_style_lang.js";
import { w as writable } from "../../chunks/index.js";
const is_client = typeof window !== "undefined";
let now = is_client ? () => window.performance.now() : () => Date.now();
let raf = is_client ? (cb) => requestAnimationFrame(cb) : noop;
const tasks = /* @__PURE__ */ new Set();
function run_tasks(now2) {
  tasks.forEach((task) => {
    if (!task.c(now2)) {
      tasks.delete(task);
      task.f();
    }
  });
  if (tasks.size !== 0)
    raf(run_tasks);
}
function loop(callback) {
  let task;
  if (tasks.size === 0)
    raf(run_tasks);
  return {
    promise: new Promise((fulfill) => {
      tasks.add(task = { c: callback, f: fulfill });
    }),
    abort() {
      tasks.delete(task);
    }
  };
}
const InstagramIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
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
  return `<svg xmlns="http://www.w3.org/2000/svg"${add_attribute("width", size, 0)}${add_attribute("height", size, 0)} fill="none" viewBox="0 0 24 24" stroke="currentColor"${add_attribute("stroke-width", strokeWidth, 0)} stroke-linecap="round" stroke-linejoin="round" class="${"feather feather-instagram " + escape(customClass, true)}"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const now2 = /* @__PURE__ */ new Date();
  return `<footer class="footer bg-black mt-5 text-white py-3"><div class="container"><div class="row d-flex justify-content-center text-center" data-svelte-h="svelte-qdjoci"><div class="col-sm-12 col-md-8">Acompanhe nas redes sociais:</div></div> <div class="row d-flex justify-content-center text-center"><div class="col-sm-12 col-md-8 d-flex justify-content-center text-center mt-1"><a href="https://www.instagram.com/peppeforneria/" target="_blank">${validate_component(InstagramIcon, "InstagramIcon").$$render($$result, {}, {}, {})}</a></div></div> <div class="row d-flex justify-content-center text-center mt-3"><div class="col-12"><p>© ${escape(now2.getFullYear())}, Peppe Forneria. Todos os direitos reservados</p></div></div></div></footer> `;
});
const css$2 = {
  code: "li.svelte-6ufwhe{list-style-type:none}",
  map: `{"version":3,"file":"Navbar.svelte","sources":["Navbar.svelte"],"sourcesContent":["<script>\\n\\timport { goto } from \\"$app/navigation\\";\\n\\timport { User } from \\"$lib/entities/User\\";\\n\\timport { cartStore } from \\"$lib/stores/cart.store\\";\\n\\timport { userStore } from \\"$lib/stores/user.store\\";\\n\\timport { Utils } from \\"$lib/utils/Utils\\";\\n\\timport { onMount } from \\"svelte\\";\\n\\timport { ShoppingCartIcon, Trash2Icon } from \\"svelte-feather-icons\\";\\n\\timport ProductQuantityComponent from \\"../ProductQuantityComponent.svelte\\";\\n\\n  async function goToFinishOrder() {\\n    const closeCanvasButton = document.getElementById('close-offcanvas');\\n    closeCanvasButton?.click();\\n    await goto('/pedidos/checkout');\\n    // location.reload();\\n\\n  }\\n\\n  onMount(() => {\\n    const closeCanvasButton = document.getElementById('close-offcanvas');\\n    closeCanvasButton?.click();\\n  })\\n\\n<\/script>\\n<nav class=\\"navbar navbar-expand-lg\\">\\n  <div class=\\"container\\">\\n    <a class=\\"navbar-brand\\" href=\\"/\\">\\n\\t\\t\\t<img src=\\"/favicon.jpeg\\" height=\\"90\\" alt=\\"Peppe Forneria logo\\">\\n      <span class=\\"d-none d-lg-inline-flex\\" style=\\"font-size: 1rem;\\">Peppe Forneria</span>\\n\\t\\t</a>\\n    <button id=\\"navbar-button-toggle\\" class=\\"navbar-toggler\\" type=\\"button\\" data-bs-toggle=\\"collapse\\" data-bs-target=\\"#navbarSupportedContent\\" aria-controls=\\"navbarSupportedContent\\" aria-expanded=\\"false\\" aria-label=\\"Toggle navigation\\">\\n      <span class=\\"navbar-toggler-icon\\"></span>\\n    </button>\\n    <div class=\\"collapse navbar-collapse text-center\\" id=\\"navbarSupportedContent\\">\\n      <ul class=\\"navbar-nav mx-auto mb-2 mb-lg-0\\">\\n        <li class=\\"nav-item me-lg-4\\">\\n          <a class=\\"nav-link active\\" aria-current=\\"page\\" href=\\"/\\">Home</a>\\n        </li>\\n        <li class=\\"nav-item me-lg-4\\">\\n          <a class=\\"nav-link\\" href=\\"/produtos\\">Ver produtos</a>\\n        </li>\\n\\n\\t\\t\\t\\t<li class=\\"nav-item me-lg-4\\">\\n          <a class=\\"nav-link\\" href=\\"/#perguntas-frequentes\\">Perguntas Frequentes</a>\\n        </li>\\n\\n        {#if !$userStore}\\n          <li class=\\"nav-item me-lg-4\\">\\n            <a class=\\"nav-link\\" href=\\"/pedidos\\">Encontrar pedido</a>\\n          </li>\\n        {/if}\\n      </ul>\\n      <div class=\\"d-flex justify-content-center text-center\\" role=\\"search\\">\\n        {#if $userStore}\\n\\n          {#if $userStore.isOwner}\\n            <li class=\\"nav-item dropdown text-decoration-none\\">\\n              <!-- svelte-ignore a11y-invalid-attribute -->\\n              <a class=\\"nav-link dropdown-toggle\\" href=\\"#\\" role=\\"button\\" data-bs-toggle=\\"dropdown\\" aria-expanded=\\"false\\">\\n                Área gerencial\\n              </a>\\n              <ul class=\\"dropdown-menu\\">\\n                <li><a class=\\"dropdown-item\\" href=\\"/gerencial/pedidos\\">Visualizar pedidos</a></li>\\n                <li><a class=\\"dropdown-item\\" href=\\"/gerencial/produtos\\">Gerenciar produtos</a></li>\\n                <li><a class=\\"dropdown-item\\" href=\\"/gerencial/produtos/relatorio\\">Relatório de produtos</a></li>\\n              </ul>\\n            </li>\\n            &nbsp &nbsp\\n          {:else}\\n            <a href=\\"/pedidos\\" class=\\"text-decoration-none text-black\\">\\n              Meus pedidos &nbsp &nbsp\\n            </a>\\n          {/if}\\n          &nbsp\\n        {:else}\\n          <a href=\\"/criar-conta\\" class=\\"text-decoration-none text-black\\">\\n            Cadastrar\\n          </a>\\n          &nbsp\\n        {/if}\\n      </div>\\n\\n      <div class=\\"mt-1\\">\\n        <!-- svelte-ignore a11y-invalid-attribute -->\\n        {#if $userStore}\\n          <a href=\\"#\\" class=\\"text-black text-decoration-none\\" on:click={User.logout}>\\n            Sair\\n            <svg xmlns=\\"http://www.w3.org/2000/svg\\" width=\\"20\\" height=\\"20\\" fill=\\"black\\" class=\\"bi bi-box-arrow-right\\" viewBox=\\"0 0 20 20\\">\\n              <path fill-rule=\\"evenodd\\" d=\\"M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z\\"/>\\n              <path fill-rule=\\"evenodd\\" d=\\"M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z\\"/>\\n            </svg>\\n          </a>\\n        {/if}\\n\\n\\n        <button id=\\"toggle-navbar-button\\" class=\\"btn position-relative\\" type=\\"button\\" data-bs-toggle=\\"offcanvas\\" data-bs-target=\\"#offcanvasRight\\" aria-controls=\\"offcanvasRight\\">\\n          <ShoppingCartIcon size=18/>\\n          <span class=\\"position-absolute translate-middle badge rounded-pill bg-danger\\" style=\\"top: 22%; left: 100%;\\">\\n            {$cartStore.length}\\n            <span class=\\"visually-hidden\\">unread messages</span>\\n          </span>\\n        </button>\\n      </div>\\n    </div>\\n  </div>\\n</nav>\\n\\n\\n<div class=\\"offcanvas offcanvas-end\\" tabindex=\\"-1\\" id=\\"offcanvasRight\\" aria-labelledby=\\"offcanvasRightLabel\\">\\n  <div class=\\"offcanvas-header\\">\\n    <h5 class=\\"offcanvas-title\\" id=\\"offcanvasRightLabel\\">Meu carrinho</h5>\\n    <button id=\\"close-offcanvas\\" type=\\"button\\" class=\\"btn-close\\" data-bs-dismiss=\\"offcanvas\\" aria-label=\\"Close\\"></button>\\n  </div>\\n  {#if $cartStore.length === 0}\\n    <div class=\\"offcanvas-body\\">\\n      <p class=\\"text-center text-black\\">Seu carrinho está vazio.</p>\\n    </div>\\n  {:else}\\n    <div class=\\"offcanvas-body\\">\\n      {#each $cartStore as product, index}\\n        <div class=\\"d-flex justify-content-between p-1\\">\\n          <div class=\\"d-flex\\">\\n            <!-- svelte-ignore a11y-img-redundant-alt -->\\n            <img src={product.imageUrl} alt=\\"product-image\\" class=\\"img-fluid img-thumbnail\\" width=\\"50\\" height=\\"50\\">\\n            <div class=\\"d-flex flex-column ms-2\\">\\n              <span>{product.name}</span>\\n              <span>{Utils.formatNumberToBrl(product.price * $cartStore[index].quantity)}</span>\\n            </div>\\n          </div>\\n          <div class=\\"d-flex\\">\\n            <ProductQuantityComponent bind:quantity={$cartStore[index].quantity} >  \\n              &nbsp\\n              <button class=\\"btn btn-outline-danger\\" on:click={() => $cartStore = $cartStore.filter((_, i) => i !== index)}>\\n                <Trash2Icon size=18 />\\n              </button>\\n            </ProductQuantityComponent>\\n          </div>\\n        </div>\\n\\n        <hr>\\n      {/each}\\n\\n      <div class=\\"d-flex justify-content-between\\">\\n        <span>Total</span>\\n        <span>{Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + product.price * product.quantity, 0))}</span>\\n      </div>\\n  \\n      <div class=\\"d-flex\\">\\n        <button class=\\"btn btn-outline-dark w-100 rounded-0 my-2\\" on:click={goToFinishOrder}>Finalizar pedido</button>\\n      </div>\\n    </div>\\n  {/if}\\n</div>\\n\\n\\n<style>\\n  li {\\n    list-style-type: none;\\n  }\\n</style>"],"names":[],"mappings":"AA4JE,gBAAG,CACD,eAAe,CAAE,IACnB"}`
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $userStore, $$unsubscribe_userStore;
  let $cartStore, $$unsubscribe_cartStore;
  $$unsubscribe_userStore = subscribe(userStore, (value) => $userStore = value);
  $$unsubscribe_cartStore = subscribe(cartStore, (value) => $cartStore = value);
  $$result.css.add(css$2);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<nav class="navbar navbar-expand-lg"><div class="container"><a class="navbar-brand" href="/" data-svelte-h="svelte-aupg5u"><img src="/favicon.jpeg" height="90" alt="Peppe Forneria logo"> <span class="d-none d-lg-inline-flex" style="font-size: 1rem;">Peppe Forneria</span></a> <button id="navbar-button-toggle" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" data-svelte-h="svelte-531cpy"><span class="navbar-toggler-icon"></span></button> <div class="collapse navbar-collapse text-center" id="navbarSupportedContent"><ul class="navbar-nav mx-auto mb-2 mb-lg-0"><li class="nav-item me-lg-4 svelte-6ufwhe" data-svelte-h="svelte-xsx6bc"><a class="nav-link active" aria-current="page" href="/">Home</a></li> <li class="nav-item me-lg-4 svelte-6ufwhe" data-svelte-h="svelte-13rxfxt"><a class="nav-link" href="/produtos">Ver produtos</a></li> <li class="nav-item me-lg-4 svelte-6ufwhe" data-svelte-h="svelte-yt5ac"><a class="nav-link" href="/#perguntas-frequentes">Perguntas Frequentes</a></li> ${!$userStore ? `<li class="nav-item me-lg-4 svelte-6ufwhe" data-svelte-h="svelte-1uv1ky9"><a class="nav-link" href="/pedidos">Encontrar pedido</a></li>` : ``}</ul> <div class="d-flex justify-content-center text-center" role="search">${$userStore ? `${$userStore.isOwner ? `<li class="nav-item dropdown text-decoration-none svelte-6ufwhe" data-svelte-h="svelte-18mjjum"> <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Área gerencial</a> <ul class="dropdown-menu"><li class="svelte-6ufwhe"><a class="dropdown-item" href="/gerencial/pedidos">Visualizar pedidos</a></li> <li class="svelte-6ufwhe"><a class="dropdown-item" href="/gerencial/produtos">Gerenciar produtos</a></li> <li class="svelte-6ufwhe"><a class="dropdown-item" href="/gerencial/produtos/relatorio">Relatório de produtos</a></li></ul></li>
               ` : `<a href="/pedidos" class="text-decoration-none text-black" data-svelte-h="svelte-60pbg8">Meus pedidos    </a>`}
           ` : `<a href="/criar-conta" class="text-decoration-none text-black" data-svelte-h="svelte-sqv19w">Cadastrar</a>
           `}</div> <div class="mt-1"> ${$userStore ? `<a href="#" class="text-black text-decoration-none" data-svelte-h="svelte-1l6fox4">Sair
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"></path><path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"></path></svg></a>` : ``} <button id="toggle-navbar-button" class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">${validate_component(ShoppingCartIcon, "ShoppingCartIcon").$$render($$result, { size: "18" }, {}, {})} <span class="position-absolute translate-middle badge rounded-pill bg-danger" style="top: 22%; left: 100%;">${escape($cartStore.length)} <span class="visually-hidden" data-svelte-h="svelte-1sc87us">unread messages</span></span></button></div></div></div></nav> <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"><div class="offcanvas-header" data-svelte-h="svelte-4oa3x8"><h5 class="offcanvas-title" id="offcanvasRightLabel">Meu carrinho</h5> <button id="close-offcanvas" type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button></div> ${$cartStore.length === 0 ? `<div class="offcanvas-body" data-svelte-h="svelte-ahdjd6"><p class="text-center text-black">Seu carrinho está vazio.</p></div>` : `<div class="offcanvas-body">${each($cartStore, (product, index) => {
      return `<div class="d-flex justify-content-between p-1"><div class="d-flex"> <img${add_attribute("src", product.imageUrl, 0)} alt="product-image" class="img-fluid img-thumbnail" width="50" height="50"> <div class="d-flex flex-column ms-2"><span>${escape(product.name)}</span> <span>${escape(Utils.formatNumberToBrl(product.price * $cartStore[index].quantity))}</span> </div></div> <div class="d-flex">${validate_component(ProductQuantityComponent, "ProductQuantityComponent").$$render(
        $$result,
        { quantity: $cartStore[index].quantity },
        {
          quantity: ($$value) => {
            $cartStore[index].quantity = $$value;
            $$settled = false;
          }
        },
        {
          default: () => {
            return ` 
              <button class="btn btn-outline-danger">${validate_component(Trash2Icon, "Trash2Icon").$$render($$result, { size: "18" }, {}, {})}</button> `;
          }
        }
      )} </div></div> <hr>`;
    })} <div class="d-flex justify-content-between"><span data-svelte-h="svelte-2fqrek">Total</span> <span>${escape(Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + product.price * product.quantity, 0)))}</span></div> <div class="d-flex"><button class="btn btn-outline-dark w-100 rounded-0 my-2" data-svelte-h="svelte-y6y2mk">Finalizar pedido</button></div></div>`} </div>`;
  } while (!$$settled);
  $$unsubscribe_userStore();
  $$unsubscribe_cartStore();
  return $$rendered;
});
function is_date(obj) {
  return Object.prototype.toString.call(obj) === "[object Date]";
}
function get_interpolator(a, b) {
  if (a === b || a !== a)
    return () => a;
  const type = typeof a;
  if (type !== typeof b || Array.isArray(a) !== Array.isArray(b)) {
    throw new Error("Cannot interpolate values of different type");
  }
  if (Array.isArray(a)) {
    const arr = b.map((bi, i) => {
      return get_interpolator(a[i], bi);
    });
    return (t) => arr.map((fn) => fn(t));
  }
  if (type === "object") {
    if (!a || !b)
      throw new Error("Object cannot be null");
    if (is_date(a) && is_date(b)) {
      a = a.getTime();
      b = b.getTime();
      const delta = b - a;
      return (t) => new Date(a + t * delta);
    }
    const keys = Object.keys(b);
    const interpolators = {};
    keys.forEach((key) => {
      interpolators[key] = get_interpolator(a[key], b[key]);
    });
    return (t) => {
      const result = {};
      keys.forEach((key) => {
        result[key] = interpolators[key](t);
      });
      return result;
    };
  }
  if (type === "number") {
    const delta = b - a;
    return (t) => a + t * delta;
  }
  throw new Error(`Cannot interpolate ${type} values`);
}
function tweened(value, defaults = {}) {
  const store = writable(value);
  let task;
  let target_value = value;
  function set(new_value, opts) {
    if (value == null) {
      store.set(value = new_value);
      return Promise.resolve();
    }
    target_value = new_value;
    let previous_task = task;
    let started = false;
    let {
      delay = 0,
      duration = 400,
      easing = identity,
      interpolate = get_interpolator
    } = assign(assign({}, defaults), opts);
    if (duration === 0) {
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      store.set(value = target_value);
      return Promise.resolve();
    }
    const start = now() + delay;
    let fn;
    task = loop((now2) => {
      if (now2 < start)
        return true;
      if (!started) {
        fn = interpolate(value, new_value);
        if (typeof duration === "function")
          duration = duration(value, new_value);
        started = true;
      }
      if (previous_task) {
        previous_task.abort();
        previous_task = null;
      }
      const elapsed = now2 - start;
      if (elapsed > /** @type {number} */
      duration) {
        store.set(value = new_value);
        return false;
      }
      store.set(value = fn(easing(elapsed / duration)));
      return true;
    });
    return task.promise;
  }
  return {
    set,
    update: (fn, opts) => set(fn(target_value, value), opts),
    subscribe: store.subscribe
  };
}
const css$1 = {
  code: "._toastItem.svelte-95rq8t{width:var(--toastWidth, 16rem);height:var(--toastHeight, auto);min-height:var(--toastMinHeight, 3.5rem);margin:var(--toastMargin, 0 0 0.5rem 0);padding:var(--toastPadding, 0);background:var(--toastBackground, rgba(66, 66, 66, 0.9));color:var(--toastColor, #fff);box-shadow:var(\n    --toastBoxShadow,\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\n    0 2px 4px -1px rgba(0, 0, 0, 0.06)\n  );border:var(--toastBorder, none);border-radius:var(--toastBorderRadius, 0.125rem);position:relative;display:flex;flex-direction:row;align-items:center;overflow:hidden;will-change:transform, opacity;-webkit-tap-highlight-color:transparent}._toastMsg.svelte-95rq8t{padding:var(--toastMsgPadding, 0.75rem 0.5rem);flex:1 1 0%}.pe.svelte-95rq8t,._toastMsg.svelte-95rq8t a{pointer-events:auto}._toastBtn.svelte-95rq8t{width:var(--toastBtnWidth, 2rem);height:var(--toastBtnHeight, 100%);cursor:pointer;outline:none}._toastBtn.svelte-95rq8t::after{content:var(--toastBtnContent, '✕');font:var(--toastBtnFont, 1rem sans-serif);display:flex;align-items:center;justify-content:center}._toastBar.svelte-95rq8t{top:var(--toastBarTop, auto);right:var(--toastBarRight, auto);bottom:var(--toastBarBottom, 0);left:var(--toastBarLeft, 0);height:var(--toastBarHeight, 6px);width:var(--toastBarWidth, 100%);position:absolute;display:block;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;background:transparent;pointer-events:none}._toastBar.svelte-95rq8t::-webkit-progress-bar{background:transparent}._toastBar.svelte-95rq8t::-webkit-progress-value{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}._toastBar.svelte-95rq8t::-moz-progress-bar{background:var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)))}",
  map: `{"version":3,"file":"ToastItem.svelte","sources":["ToastItem.svelte"],"sourcesContent":["<script>\\nimport { onMount, onDestroy } from 'svelte'\\nimport { tweened } from 'svelte/motion'\\nimport { linear } from 'svelte/easing'\\nimport { toast } from './stores.js'\\n\\n/** @type {import('./stores.js').SvelteToastOptions} */\\nexport let item\\n\\n/** @type {any} */\\nlet next = item.initial\\nlet prev = next\\nlet paused = false\\nlet cprops = {}\\n/** @type {any} */\\nlet unlisten\\n\\nconst progress = tweened(item.initial, { duration: item.duration, easing: linear })\\n\\nfunction close() {\\n  toast.pop(item.id)\\n}\\n\\nfunction autoclose() {\\n  if ($progress === 1 || $progress === 0) close()\\n}\\n\\nfunction pause() {\\n  if (!paused && $progress !== next) {\\n    progress.set($progress, { duration: 0 })\\n    paused = true\\n  }\\n}\\n\\nfunction resume() {\\n  if (paused) {\\n    const d = /** @type {any} */ (item.duration)\\n    const duration = d - d * (($progress - prev) / (next - prev))\\n    progress.set(next, { duration }).then(autoclose)\\n    paused = false\\n  }\\n}\\n\\n/** @param {any} prop */\\nfunction check(prop, kind = 'undefined') {\\n  return typeof prop === kind\\n}\\n\\nfunction listen(d = document) {\\n  if (check(d.hidden)) return\\n  const handler = () => (d.hidden ? pause() : resume())\\n  const name = 'visibilitychange'\\n  d.addEventListener(name, handler)\\n  unlisten = () => d.removeEventListener(name, handler)\\n  handler()\\n}\\n\\n$: if (next !== item.next) {\\n  next = item.next\\n  prev = $progress\\n  paused = false\\n  progress.set(next).then(autoclose)\\n}\\n\\n$: if (item.component) {\\n  const { props = {}, sendIdTo } = item.component\\n  cprops = { ...props, ...(sendIdTo && { [sendIdTo]: item.id }) }\\n}\\n\\n// \`progress\` has been renamed to \`next\`; shim included for backward compatibility, to remove in next major\\n$: if (!check(item.progress)) {\\n  item.next = item.progress\\n}\\n\\nonMount(listen)\\n\\nonDestroy(() => {\\n  if (check(item.onpop, 'function')) {\\n    // @ts-ignore\\n    item.onpop(item.id)\\n  }\\n  unlisten && unlisten()\\n})\\n<\/script>\\n\\n<div\\n  role=\\"status\\"\\n  class=\\"_toastItem\\"\\n  class:pe={item.pausable}\\n  on:mouseenter={() => {\\n    if (item.pausable) pause()\\n  }}\\n  on:mouseleave={resume}\\n>\\n  <div class=\\"_toastMsg\\" class:pe={item.component}>\\n    {#if item.component}\\n      <svelte:component this={item.component.src} {...cprops} />\\n    {:else}\\n      {@html item.msg}\\n    {/if}\\n  </div>\\n  {#if item.dismissable}\\n    <div\\n      class=\\"_toastBtn pe\\"\\n      role=\\"button\\"\\n      tabindex=\\"0\\"\\n      on:click={close}\\n      on:keydown={(e) => {\\n        if (e instanceof KeyboardEvent && ['Enter', ' '].includes(e.key)) close()\\n      }}\\n    />\\n  {/if}\\n  <progress class=\\"_toastBar\\" value={$progress} />\\n</div>\\n\\n<style>\\n._toastItem {\\n  width: var(--toastWidth, 16rem);\\n  height: var(--toastHeight, auto);\\n  min-height: var(--toastMinHeight, 3.5rem);\\n  margin: var(--toastMargin, 0 0 0.5rem 0);\\n  padding: var(--toastPadding, 0);\\n  background: var(--toastBackground, rgba(66, 66, 66, 0.9));\\n  color: var(--toastColor, #fff);\\n  box-shadow: var(\\n    --toastBoxShadow,\\n    0 4px 6px -1px rgba(0, 0, 0, 0.1),\\n    0 2px 4px -1px rgba(0, 0, 0, 0.06)\\n  );\\n  border: var(--toastBorder, none);\\n  border-radius: var(--toastBorderRadius, 0.125rem);\\n  position: relative;\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  overflow: hidden;\\n  will-change: transform, opacity;\\n  -webkit-tap-highlight-color: transparent;\\n}\\n._toastMsg {\\n  padding: var(--toastMsgPadding, 0.75rem 0.5rem);\\n  flex: 1 1 0%;\\n}\\n.pe,\\n._toastMsg :global(a) {\\n  pointer-events: auto;\\n}\\n._toastBtn {\\n  width: var(--toastBtnWidth, 2rem);\\n  height: var(--toastBtnHeight, 100%);\\n  cursor: pointer;\\n  outline: none;\\n}\\n._toastBtn::after {\\n  content: var(--toastBtnContent, '✕');\\n  font: var(--toastBtnFont, 1rem sans-serif);\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n._toastBar {\\n  top: var(--toastBarTop, auto);\\n  right: var(--toastBarRight, auto);\\n  bottom: var(--toastBarBottom, 0);\\n  left: var(--toastBarLeft, 0);\\n  height: var(--toastBarHeight, 6px);\\n  width: var(--toastBarWidth, 100%);\\n  position: absolute;\\n  display: block;\\n  -webkit-appearance: none;\\n  -moz-appearance: none;\\n  appearance: none;\\n  border: none;\\n  background: transparent;\\n  pointer-events: none;\\n}\\n._toastBar::-webkit-progress-bar {\\n  background: transparent;\\n}\\n/* \`--toastProgressBackground\` renamed to \`--toastBarBackground\`; override included for backward compatibility */\\n._toastBar::-webkit-progress-value {\\n  background: var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)));\\n}\\n._toastBar::-moz-progress-bar {\\n  background: var(--toastProgressBackground, var(--toastBarBackground, rgba(33, 150, 243, 0.75)));\\n}</style>\\n"],"names":[],"mappings":"AAoHA,yBAAY,CACV,KAAK,CAAE,IAAI,YAAY,CAAC,MAAM,CAAC,CAC/B,MAAM,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAChC,UAAU,CAAE,IAAI,gBAAgB,CAAC,OAAO,CAAC,CACzC,MAAM,CAAE,IAAI,aAAa,CAAC,aAAa,CAAC,CACxC,OAAO,CAAE,IAAI,cAAc,CAAC,EAAE,CAAC,CAC/B,UAAU,CAAE,IAAI,iBAAiB,CAAC,sBAAsB,CAAC,CACzD,KAAK,CAAE,IAAI,YAAY,CAAC,KAAK,CAAC,CAC9B,UAAU,CAAE;AACd,IAAI,gBAAgB,CAAC;AACrB;AACA;AACA,EAAE,CAAC,CACD,MAAM,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAChC,aAAa,CAAE,IAAI,mBAAmB,CAAC,SAAS,CAAC,CACjD,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,GAAG,CACnB,WAAW,CAAE,MAAM,CACnB,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,SAAS,CAAC,CAAC,OAAO,CAC/B,2BAA2B,CAAE,WAC/B,CACA,wBAAW,CACT,OAAO,CAAE,IAAI,iBAAiB,CAAC,eAAe,CAAC,CAC/C,IAAI,CAAE,CAAC,CAAC,CAAC,CAAC,EACZ,CACA,iBAAG,CACH,wBAAU,CAAS,CAAG,CACpB,cAAc,CAAE,IAClB,CACA,wBAAW,CACT,KAAK,CAAE,IAAI,eAAe,CAAC,KAAK,CAAC,CACjC,MAAM,CAAE,IAAI,gBAAgB,CAAC,KAAK,CAAC,CACnC,MAAM,CAAE,OAAO,CACf,OAAO,CAAE,IACX,CACA,wBAAU,OAAQ,CAChB,OAAO,CAAE,IAAI,iBAAiB,CAAC,IAAI,CAAC,CACpC,IAAI,CAAE,IAAI,cAAc,CAAC,gBAAgB,CAAC,CAC1C,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CACA,wBAAW,CACT,GAAG,CAAE,IAAI,aAAa,CAAC,KAAK,CAAC,CAC7B,KAAK,CAAE,IAAI,eAAe,CAAC,KAAK,CAAC,CACjC,MAAM,CAAE,IAAI,gBAAgB,CAAC,EAAE,CAAC,CAChC,IAAI,CAAE,IAAI,cAAc,CAAC,EAAE,CAAC,CAC5B,MAAM,CAAE,IAAI,gBAAgB,CAAC,IAAI,CAAC,CAClC,KAAK,CAAE,IAAI,eAAe,CAAC,KAAK,CAAC,CACjC,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,KAAK,CACd,kBAAkB,CAAE,IAAI,CACxB,eAAe,CAAE,IAAI,CACrB,UAAU,CAAE,IAAI,CAChB,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,WAAW,CACvB,cAAc,CAAE,IAClB,CACA,wBAAU,sBAAuB,CAC/B,UAAU,CAAE,WACd,CAEA,wBAAU,wBAAyB,CACjC,UAAU,CAAE,IAAI,yBAAyB,CAAC,oDAAoD,CAChG,CACA,wBAAU,mBAAoB,CAC5B,UAAU,CAAE,IAAI,yBAAyB,CAAC,oDAAoD,CAChG"}`
};
function check(prop, kind = "undefined") {
  return typeof prop === kind;
}
const ToastItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $progress, $$unsubscribe_progress;
  let { item } = $$props;
  let next = item.initial;
  let cprops = {};
  const progress = tweened(item.initial, { duration: item.duration, easing: identity });
  $$unsubscribe_progress = subscribe(progress, (value) => $progress = value);
  function close() {
    toast.pop(item.id);
  }
  function autoclose() {
    if ($progress === 1 || $progress === 0)
      close();
  }
  onDestroy(() => {
    if (check(item.onpop, "function")) {
      item.onpop(item.id);
    }
  });
  if ($$props.item === void 0 && $$bindings.item && item !== void 0)
    $$bindings.item(item);
  $$result.css.add(css$1);
  {
    if (!check(item.progress)) {
      item.next = item.progress;
    }
  }
  {
    if (next !== item.next) {
      next = item.next;
      progress.set(next).then(autoclose);
    }
  }
  {
    if (item.component) {
      const { props = {}, sendIdTo } = item.component;
      cprops = {
        ...props,
        ...sendIdTo && { [sendIdTo]: item.id }
      };
    }
  }
  $$unsubscribe_progress();
  return `<div role="status" class="${["_toastItem svelte-95rq8t", item.pausable ? "pe" : ""].join(" ").trim()}"><div class="${["_toastMsg svelte-95rq8t", item.component ? "pe" : ""].join(" ").trim()}">${item.component ? `${validate_component(item.component.src || missing_component, "svelte:component").$$render($$result, Object.assign({}, cprops), {}, {})}` : `<!-- HTML_TAG_START -->${item.msg}<!-- HTML_TAG_END -->`}</div> ${item.dismissable ? `<div class="_toastBtn pe svelte-95rq8t" role="button" tabindex="0"></div>` : ``} <progress class="_toastBar svelte-95rq8t"${add_attribute("value", $progress, 0)}></progress> </div>`;
});
const css = {
  code: "._toastContainer.svelte-1u812xz{top:var(--toastContainerTop, 1.5rem);right:var(--toastContainerRight, 2rem);bottom:var(--toastContainerBottom, auto);left:var(--toastContainerLeft, auto);position:fixed;margin:0;padding:0;list-style-type:none;pointer-events:none;z-index:var(--toastContainerZIndex, 9999)}",
  map: `{"version":3,"file":"SvelteToast.svelte","sources":["SvelteToast.svelte"],"sourcesContent":["<script>\\nimport { fade, fly } from 'svelte/transition'\\nimport { flip } from 'svelte/animate'\\nimport { toast } from './stores.js'\\nimport ToastItem from './ToastItem.svelte'\\n\\n/** @type {import('./stores.js').SvelteToastOptions} */\\nexport let options = {}\\n/** @type {(string|'default')} */\\nexport let target = 'default'\\n\\n/** @type {import('./stores.js').SvelteToastOptions[]} */\\nlet items = []\\n\\n/** @param {Object<string,string|number>} [theme] */\\nfunction getCss(theme) {\\n  return theme ? Object.keys(theme).reduce((a, c) => \`\${a}\${c}:\${theme[c]};\`, '') : undefined\\n}\\n\\n$: toast._init(target, options)\\n\\n$: items = $toast.filter((i) => i.target === target)\\n<\/script>\\n\\n<ul class=\\"_toastContainer\\">\\n  {#each items as item (item.id)}\\n    <li\\n      class={item.classes?.join(' ')}\\n      in:fly={item.intro}\\n      out:fade\\n      animate:flip={{ duration: 200 }}\\n      style={getCss(item.theme)}\\n    >\\n      <ToastItem {item} />\\n    </li>\\n  {/each}\\n</ul>\\n\\n<style>\\n._toastContainer {\\n  top: var(--toastContainerTop, 1.5rem);\\n  right: var(--toastContainerRight, 2rem);\\n  bottom: var(--toastContainerBottom, auto);\\n  left: var(--toastContainerLeft, auto);\\n  position: fixed;\\n  margin: 0;\\n  padding: 0;\\n  list-style-type: none;\\n  pointer-events: none;\\n  z-index: var(--toastContainerZIndex, 9999);\\n}</style>\\n"],"names":[],"mappings":"AAuCA,+BAAiB,CACf,GAAG,CAAE,IAAI,mBAAmB,CAAC,OAAO,CAAC,CACrC,KAAK,CAAE,IAAI,qBAAqB,CAAC,KAAK,CAAC,CACvC,MAAM,CAAE,IAAI,sBAAsB,CAAC,KAAK,CAAC,CACzC,IAAI,CAAE,IAAI,oBAAoB,CAAC,KAAK,CAAC,CACrC,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,OAAO,CAAE,CAAC,CACV,eAAe,CAAE,IAAI,CACrB,cAAc,CAAE,IAAI,CACpB,OAAO,CAAE,IAAI,sBAAsB,CAAC,KAAK,CAC3C"}`
};
function getCss(theme) {
  return theme ? Object.keys(theme).reduce((a, c) => `${a}${c}:${theme[c]};`, "") : void 0;
}
const SvelteToast = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $toast, $$unsubscribe_toast;
  $$unsubscribe_toast = subscribe(toast, (value) => $toast = value);
  let { options = {} } = $$props;
  let { target = "default" } = $$props;
  let items = [];
  if ($$props.options === void 0 && $$bindings.options && options !== void 0)
    $$bindings.options(options);
  if ($$props.target === void 0 && $$bindings.target && target !== void 0)
    $$bindings.target(target);
  $$result.css.add(css);
  {
    toast._init(target, options);
  }
  items = $toast.filter((i) => i.target === target);
  $$unsubscribe_toast();
  return `<ul class="_toastContainer svelte-1u812xz">${each(items, (item) => {
    return `<li class="${escape(null_to_empty(item.classes?.join(" ")), true) + " svelte-1u812xz"}"${add_attribute("style", getCss(item.theme), 0)}>${validate_component(ToastItem, "ToastItem").$$render($$result, { item }, {}, {})} </li>`;
  })} </ul>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-14xm0nt_START -->${$$result.title = `<title>Peppe Forneria</title>`, ""}<meta name="Peppe Forneria" content="Peppe Forneria"><!-- HEAD_svelte-14xm0nt_END -->`, ""} ${validate_component(SvelteToast, "SvelteToast").$$render($$result, {}, {}, {})} ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
