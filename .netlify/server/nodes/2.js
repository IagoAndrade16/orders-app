import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.KTxGvVUY.js","_app/immutable/chunks/scheduler.3MUWL8w9.js","_app/immutable/chunks/index.Zbaz7vx_.js","_app/immutable/chunks/each.BJYA0Yae.js","_app/immutable/chunks/ProductCard.DKGfoHzJ.js","_app/immutable/chunks/Engine.B7EIR_e4.js","_app/immutable/chunks/entry.Ckz1BFuy.js","_app/immutable/chunks/Utils.Cx0N4HxG.js","_app/immutable/chunks/ProductQuantityComponent.DS_Eh84W.js","_app/immutable/chunks/ToastService.5z9TAOmL.js","_app/immutable/chunks/SvelteToast.svelte_svelte_type_style_lang.Cg2Cic_0.js","_app/immutable/chunks/cart.store.BI9b5lc6.js","_app/immutable/chunks/Store.BrsfyzIC.js","_app/immutable/chunks/ProductsService.BdnFdkDX.js","_app/immutable/chunks/OrdersApi.C40ZWB5t.js"];
export const stylesheets = ["_app/immutable/assets/2.B96YzceB.css","_app/immutable/assets/ProductCard.BreadfXm.css","_app/immutable/assets/SvelteToast.DbLvtVfH.css"];
export const fonts = [];
