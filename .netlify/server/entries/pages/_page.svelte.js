import { c as create_ssr_component, e as escape, v as validate_component, d as each } from "../../chunks/ssr.js";
import { P as ProductCard } from "../../chunks/ProductCard.js";
import "buffer";
const css$1 = {
  code: ".carousel-image.svelte-itctxi{display:inline-block !important;text-align:center;width:100%;height:20%;object-fit:contain;max-height:40rem}",
  map: '{"version":3,"file":"Carousel.svelte","sources":["Carousel.svelte"],"sourcesContent":["<div class=\\"container d-md-none\\">\\n  <div class=\\"row d-flex justify-content-center\\">\\n    <div class=\\"col-12\\">\\n      <div id=\\"carouselExampleRide\\" class=\\"carousel slide\\" data-bs-ride=\\"true\\">\\n        <div class=\\"carousel-inner\\">\\n          <div class=\\"carousel-item active text-center\\">\\n            <img src=\\"/carousel/carousel1.jpeg\\" class=\\"carousel-image\\" alt=\\"\\">\\n          </div>\\n          <!-- <div class=\\"carousel-item active text-center\\" style=\\"height: 30%;\\">\\n            <img src=\\"/carousel/carousel2.jpeg\\" class=\\"carousel-image\\" alt=\\"\\">\\n          </div> -->\\n          <div class=\\"carousel-item active text-center\\">\\n            <img src=\\"/carousel/carousel3.jpeg\\" class=\\" carousel-image\\" alt=\\"\\">\\n          </div>\\n        </div>\\n        <button class=\\"carousel-control-prev\\" type=\\"button\\" data-bs-target=\\"#carouselExampleRide\\" data-bs-slide=\\"prev\\">\\n          <span class=\\"carousel-control-prev-icon\\" aria-hidden=\\"true\\"></span>\\n          <span class=\\"visually-hidden\\">Anterior</span>\\n        </button>\\n        <button class=\\"carousel-control-next\\" type=\\"button\\" data-bs-target=\\"#carouselExampleRide\\" data-bs-slide=\\"next\\">\\n          <span class=\\"carousel-control-next-icon\\" aria-hidden=\\"true\\"></span>\\n          <span class=\\"visually-hidden\\">Próximo</span>\\n        </button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\\n<style>\\n  .carousel-image {\\n    display: inline-block !important; \\n    text-align: center; \\n    width: 100%;\\n    height: 20%;\\n    object-fit: contain;\\n    max-height: 40rem;\\n  }\\n</style>"],"names":[],"mappings":"AA6BE,6BAAgB,CACd,OAAO,CAAE,YAAY,CAAC,UAAU,CAChC,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,OAAO,CACnB,UAAU,CAAE,KACd"}'
};
const Carousel = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div class="container d-md-none" data-svelte-h="svelte-11nv5tw"><div class="row d-flex justify-content-center"><div class="col-12"><div id="carouselExampleRide" class="carousel slide" data-bs-ride="true"><div class="carousel-inner"><div class="carousel-item active text-center"><img src="/carousel/carousel1.jpeg" class="carousel-image svelte-itctxi" alt=""></div>  <div class="carousel-item active text-center"><img src="/carousel/carousel3.jpeg" class="carousel-image svelte-itctxi" alt=""></div></div> <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev"><span class="carousel-control-prev-icon" aria-hidden="true"></span> <span class="visually-hidden">Anterior</span></button> <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next"><span class="carousel-control-next-icon" aria-hidden="true"></span> <span class="visually-hidden">Próximo</span></button></div></div></div> </div>`;
});
const FaqItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { question } = $$props;
  let { answer } = $$props;
  let { id } = $$props;
  if ($$props.question === void 0 && $$bindings.question && question !== void 0)
    $$bindings.question(question);
  if ($$props.answer === void 0 && $$bindings.answer && answer !== void 0)
    $$bindings.answer(answer);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<div class="bg-body-tertiary p-3 rounded shadow my-3 ms-2 me-2" data-bs-toggle="collapse" data-bs-target="${"#faqItem-" + escape(id, true)}" aria-expanded="false" aria-controls="${"faqItem-" + escape(id, true)}"><div class="d-flex justify-content-between"><div class="h5">${escape(question)}</div></div> <div class="collapse" id="${"faqItem-" + escape(id, true)}">${escape(answer)}</div></div>`;
});
const FaqSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="container my-5" id="perguntas-frequentes"><div class="row"><div class="col-12 justify-content-center text-center mb-4" data-svelte-h="svelte-1h4a7ja"><h2>Perguntas frequentes</h2> <small>Está com alguma dúvida? Dê uma olhada nas perguntas mais frequentes abaixo.</small></div> ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Como faço para comprar?",
      answer: "Para comprar, basta acessar a página do Peppe Forneria, pelo link do pedido ou também pelo Whatsapp.",
      id: 1
    },
    {},
    {}
  )} ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Quais são as formas de pagamento?",
      answer: "Aceitamos cartão de crédito, débito, dinheiro e pix.",
      id: 2
    },
    {},
    {}
  )} ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Qual a área de entrega?",
      answer: "Até o momento, entregamos para as cidades de Volta Redonda, Barra Mansa e Bananal.",
      id: 3
    },
    {},
    {}
  )} ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Como é feita a entrega?",
      answer: "Os envios são feitos com moto para garantir a qualidade dos produtos.",
      id: 4
    },
    {},
    {}
  )} ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Como é realizado o preparo das pizzas?",
      answer: "Pizza feita artesanalmente em forno napolitano, com produtos selecionados.",
      id: 5
    },
    {},
    {}
  )} ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Qual o tamanho das pizzas?",
      answer: "Nossas pizzas possuem aproximadamente 29cm de diâmetro.",
      id: 6
    },
    {},
    {}
  )} ${validate_component(FaqItem, "FaqItem").$$render(
    $$result,
    {
      question: "Qual o prazo de validade e armazenamento correto das pizzas?",
      answer: "As pizzas têm validade de 60 dias a partir da data de fabricação e devem ser armazenadas no freezer até o momento do preparo.",
      id: 7
    },
    {},
    {}
  )}</div></div>`;
});
const css = {
  code: ".look-all-products-card.svelte-781qz5.svelte-781qz5:hover{opacity:0.8;transition:0.3s}.look-all-products-card.svelte-781qz5.svelte-781qz5{opacity:1;transition:0.5s}.look-all-products-card.svelte-781qz5>.svelte-781qz5{cursor:pointer}",
  map: '{"version":3,"file":"ProductsSection.svelte","sources":["ProductsSection.svelte"],"sourcesContent":["<script lang=\\"ts\\">import { onMount } from \\"svelte\\";\\nimport ProductCard from \\"../ProductCard.svelte\\";\\nimport { ProductsService } from \\"$lib/services/ProductsService\\";\\nlet products = [];\\nlet handleDeleteProduct;\\nonMount(async () => {\\n  const listProductsRes = await ProductsService.list({\\n    page: 1,\\n    pageSize: 6\\n  });\\n  products = listProductsRes.data.products.map((product) => {\\n    return {\\n      buttonColor: \\"dark\\",\\n      imgSrc: product.imageUrl,\\n      productId: product.id,\\n      title: product.name,\\n      text: product.description,\\n      price: product.price\\n    };\\n  });\\n});\\n<\/script>\\n<style>\\n\\t.look-all-products-card:hover {\\n\\t\\topacity: 0.8;\\n\\t\\ttransition: 0.3s;\\n\\t}\\n\\n\\t.look-all-products-card {\\n\\t\\topacity: 1;\\n\\t\\ttransition: 0.5s;\\n\\t}\\n\\n\\t.look-all-products-card > * {\\n\\t\\tcursor: pointer;\\n\\t}\\n</style>\\n\\n<div class=\\"container my-5\\">\\n\\t<div class=\\"row\\">\\n\\t\\t<div class=\\"col-12 col-md-12 col-lg-3 mt-2 mb-5\\">\\n\\t\\t\\t<a class=\\"card text-bg-dark look-all-products-card border-0\\" href=\\"/produtos\\">\\n\\t\\t\\t\\t<img src=\\"/imagem-pizza1.jpeg\\" class=\\"img-fluid\\" alt=\\"\\">\\n\\t\\t\\t\\t<div class=\\"card-img-overlay\\">\\n\\t\\t\\t\\t\\t<span class=\\"rounded-pill bg-black text-white p-2\\">Pizzas</span>\\n\\t\\t\\t\\t</div>\\n\\t\\t\\t</a>\\n\\t\\t</div>\\n\\n\\t\\t{#each products as product}\\n\\t\\t\\t<div class=\\"col-sm-6 col-md-6 col-lg-3\\">\\n\\t\\t\\t\\t<ProductCard\\n\\t\\t\\t\\t\\timgSrc={product.imgSrc}\\n\\t\\t\\t\\t\\ttitle={product.title}\\n\\t\\t\\t\\t\\tprice={product.price}\\n\\t\\t\\t\\t\\tproductId={product.productId}\\n\\t\\t\\t\\t\\thandleDeleteProduct={handleDeleteProduct}\\n\\t\\t\\t\\t\\tisAdmin={false}\\n\\t\\t\\t\\t/>\\n\\t\\t\\t</div>\\n\\t\\t{/each}\\n\\t</div>\\n</div>"],"names":[],"mappings":"AAuBC,mDAAuB,MAAO,CAC7B,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,IACb,CAEA,mDAAwB,CACvB,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,IACb,CAEA,qCAAuB,CAAG,cAAE,CAC3B,MAAM,CAAE,OACT"}'
};
const ProductsSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let products = [];
  let handleDeleteProduct;
  $$result.css.add(css);
  return `<div class="container my-5"><div class="row"><div class="col-12 col-md-12 col-lg-3 mt-2 mb-5" data-svelte-h="svelte-195fx9c"><a class="card text-bg-dark look-all-products-card border-0 svelte-781qz5" href="/produtos"><img src="/imagem-pizza1.jpeg" class="img-fluid svelte-781qz5" alt=""> <div class="card-img-overlay svelte-781qz5"><span class="rounded-pill bg-black text-white p-2">Pizzas</span></div></a></div> ${each(products, (product) => {
    return `<div class="col-sm-6 col-md-6 col-lg-3">${validate_component(ProductCard, "ProductCard").$$render(
      $$result,
      {
        imgSrc: product.imgSrc,
        title: product.title,
        price: product.price,
        productId: product.productId,
        handleDeleteProduct,
        isAdmin: false
      },
      {},
      {}
    )} </div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Carousel, "Carousel").$$render($$result, {}, {}, {})} ${validate_component(ProductsSection, "ProductsSection").$$render($$result, {}, {}, {})} ${validate_component(FaqSection, "FaqSection").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
