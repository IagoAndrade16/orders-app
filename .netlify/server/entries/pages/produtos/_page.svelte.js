import { c as create_ssr_component, b as subscribe, v as validate_component, a as add_attribute, e as escape, d as each } from "../../../chunks/ssr.js";
import { S as SearchIcon } from "../../../chunks/SearchIcon.js";
import { P as ProductCard } from "../../../chunks/ProductCard.js";
import { p as page } from "../../../chunks/stores.js";
import "buffer";
const css = {
  code: ".search-button.svelte-1d1vhlq{width:100%}.active.svelte-1d1vhlq{background-color:#000 !important;color:#fff !important}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { SearchIcon } from \\"svelte-feather-icons\\";\\nimport { onMount } from \\"svelte\\";\\nimport ProductCard from \\"$lib/components/ProductCard.svelte\\";\\nimport { page } from \\"$app/stores\\";\\nimport { ProductsService } from \\"$lib/services/ProductsService\\";\\nlet products = [];\\nlet actualPage = parseInt($page.url.searchParams.get(\\"page\\") || \\"1\\");\\nlet pageSize = 24;\\nlet numberOfPages = 1;\\nlet productsTotal = 0;\\nlet searchValue = void 0;\\nconst handleChangePagination = async (newPage) => {\\n  if (newPage === \\"previous\\") {\\n    actualPage--;\\n    await searchProducts();\\n    return;\\n  }\\n  if (newPage === \\"next\\") {\\n    actualPage++;\\n    await searchProducts();\\n    return;\\n  }\\n  actualPage = parseInt(newPage);\\n  await searchProducts();\\n};\\nconst searchProducts = async () => {\\n  products = [];\\n  const listProductsRes = await ProductsService.list({\\n    page: actualPage,\\n    pageSize,\\n    name: searchValue\\n  });\\n  products = listProductsRes.data.products.map((product) => {\\n    return {\\n      id: product.id,\\n      buttonColor: \\"dark\\",\\n      imgSrc: product.imageUrl,\\n      productId: product.id,\\n      title: product.name,\\n      text: product.description,\\n      price: product.price\\n    };\\n  });\\n  productsTotal = listProductsRes.data.total;\\n  numberOfPages = Math.ceil(listProductsRes.data.total / pageSize);\\n};\\nonMount(async () => {\\n  await searchProducts();\\n});\\n<\/script>\\n\\n<div class=\\"container my-3\\">\\n\\t<div class=\\"row\\">\\n\\t\\t<div class=\\"col-sm-12 col-md-6 col-lg-4\\">\\n\\t\\t\\t<div class=\\"input-group mb-3 col-3\\">\\n\\t\\t\\t\\t<span class=\\"input-group-text\\" id=\\"basic-addon1\\">\\n\\t\\t\\t\\t\\t<SearchIcon size=\\"15\\" />\\n\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t<input\\n\\t\\t\\t\\t\\ttype=\\"text\\"\\n\\t\\t\\t\\t\\tclass=\\"form-control\\"\\n\\t\\t\\t\\t\\tplaceholder=\\"Buscar um produto\\"\\n\\t\\t\\t\\t\\taria-label=\\"search-product\\"\\n\\t\\t\\t\\t\\taria-describedby=\\"basic-addon1\\"\\n          bind:value={searchValue}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t</div>\\n\\n\\t\\t<div class=\\"col-3 col-md-2 col-lg-2\\">\\n\\t\\t\\t<button class=\\"btn btn-dark w-full search-button\\" on:click={searchProducts}>Buscar</button>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<div class=\\"container products-container\\">\\n  <div class=\\"row\\">\\n    <div class=\\"col-12 d-flex justify-content-between\\">\\n      <small>{productsTotal} produtos encontrados</small>\\n      <small>Página {actualPage} de {numberOfPages}</small>\\n\\n    </div>\\n  </div>\\n\\t<div class=\\"row\\">\\n\\t\\t{#each products as product}\\n\\t\\t\\t<div class=\\"col-sm-6 col-md-6 col-lg-3\\">\\n\\t\\t\\t\\t<ProductCard {...product} showAddToCartButton />\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n\\t<div class=\\"row mt-5\\">\\n\\t\\t<div class=\\"col-12 d-flex justify-content-center items-center mx-auto\\">\\n\\t\\t\\t<nav aria-label=\\"Page navigation example\\">\\n\\t\\t\\t\\t<ul class=\\"pagination\\">\\n\\t\\t\\t\\t\\t<li class=\\"page-item\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"page-link text-black {actualPage === 1 ? 'disabled' : ''}\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => handleChangePagination('previous')}>Anterior</button\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{#each Array(numberOfPages) as _, index (index)}\\n\\t\\t\\t\\t\\t\\t<li class=\\"page-item\\">\\n\\t\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\t\\ton:click={() => handleChangePagination(\`\${index + 1}\`)}\\n\\t\\t\\t\\t\\t\\t\\t\\tclass=\\"page-link text-black {index + 1 === actualPage ? 'active' : ''}\\"\\n\\t\\t\\t\\t\\t\\t\\t\\t>{index + 1}</button\\n\\t\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t\\t{/each}\\n\\t\\t\\t\\t\\t<li class=\\"page-item\\">\\n\\t\\t\\t\\t\\t\\t<button\\n\\t\\t\\t\\t\\t\\t\\tclass=\\"page-link text-black {actualPage === numberOfPages ? 'disabled' : ''}\\"\\n\\t\\t\\t\\t\\t\\t\\ton:click={() => handleChangePagination('next')}>Próximo</button\\n\\t\\t\\t\\t\\t\\t>\\n\\t\\t\\t\\t\\t</li>\\n\\t\\t\\t\\t</ul>\\n\\t\\t\\t</nav>\\n\\t\\t</div>\\n\\t</div>\\n</div>\\n\\n<style>\\n\\t.search-button {\\n\\t\\twidth: 100%;\\n\\t}\\n\\n\\t.active {\\n\\t\\tbackground-color: #000 !important;\\n\\t\\tcolor: #fff !important;\\n\\t}\\n</style>\\n"],"names":[],"mappings":"AA0HC,6BAAe,CACd,KAAK,CAAE,IACR,CAEA,sBAAQ,CACP,gBAAgB,CAAE,IAAI,CAAC,UAAU,CACjC,KAAK,CAAE,IAAI,CAAC,UACb"}`
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  let products = [];
  let actualPage = parseInt($page.url.searchParams.get("page") || "1");
  let numberOfPages = 1;
  let productsTotal = 0;
  let searchValue = void 0;
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<div class="container my-3"><div class="row"><div class="col-sm-12 col-md-6 col-lg-4"><div class="input-group mb-3 col-3"><span class="input-group-text" id="basic-addon1">${validate_component(SearchIcon, "SearchIcon").$$render($$result, { size: "15" }, {}, {})}</span> <input type="text" class="form-control" placeholder="Buscar um produto" aria-label="search-product" aria-describedby="basic-addon1"${add_attribute("value", searchValue, 0)}></div></div> <div class="col-3 col-md-2 col-lg-2"><button class="btn btn-dark w-full search-button svelte-1d1vhlq" data-svelte-h="svelte-1bfw18w">Buscar</button></div></div></div> <div class="container products-container"><div class="row"><div class="col-12 d-flex justify-content-between"><small>${escape(productsTotal)} produtos encontrados</small> <small>Página ${escape(actualPage)} de ${escape(numberOfPages)}</small></div></div> <div class="row">${each(products, (product) => {
    return `<div class="col-sm-6 col-md-6 col-lg-3">${validate_component(ProductCard, "ProductCard").$$render($$result, Object.assign({}, product, { showAddToCartButton: true }), {}, {})} </div>`;
  })}</div> <div class="row mt-5"><div class="col-12 d-flex justify-content-center items-center mx-auto"><nav aria-label="Page navigation example"><ul class="pagination"><li class="page-item"><button class="${"page-link text-black " + escape(actualPage === 1 ? "disabled" : "", true)}">Anterior</button></li> ${each(Array(numberOfPages), (_, index) => {
    return `<li class="page-item"><button class="${"page-link text-black " + escape(index + 1 === actualPage ? "active" : "", true) + " svelte-1d1vhlq"}">${escape(index + 1)}</button> </li>`;
  })} <li class="page-item"><button class="${"page-link text-black " + escape(actualPage === numberOfPages ? "disabled" : "", true)}">Próximo</button></li></ul></nav></div></div> </div>`;
});
export {
  Page as default
};