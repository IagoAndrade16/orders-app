<script lang="ts">
	import { page } from "$app/stores";
	import ProductCard from "$lib/components/ProductCard.svelte";
	import type { Product } from "$lib/entities/Product";
	import { ProductsService } from "$lib/services/ProductsService";
	import type { ProductCardComponentInput } from "$lib/components/types/ProductCardComponentDTOs";
	import { Engine } from "$lib/core/Engine";
	import { Utils } from "$lib/utils/Utils";
	import { onMount } from "svelte";
	import { ShoppingCartIcon } from "svelte-feather-icons";
	import { ToastService } from "$lib/services/ToastService";
  import { cartStore } from "$lib/stores/cart.store";
	import ProductQuantityComponent from "$lib/components/ProductQuantityComponent.svelte";

  let quantity = 1;
  let products: ProductCardComponentInput[] = [];
  let product: Product | null = null;

  const productId = $page.url.searchParams.get('id');

  const handleAddProductToCart = () => {
    if(!product) {
      return;
    }

    const productAlreadyInCart = $cartStore!.find((productInCart) => productInCart.id === product!.id);
    if(productAlreadyInCart) {
      ToastService.show({ message: 'Este produto já existe no seu carrinho de compras.', type: 'info' });
      return;
    }

    ToastService.show({ message: 'Produto adicionado ao carrinho.', type: 'success' });    
    $cartStore = [{ ...product, quantity}, ...$cartStore]
  }

  onMount(async() => {
    // if(!productId) {
    //   Engine.back();
    // }

    const getProductRes = await ProductsService.get(productId!);
    product = getProductRes.data;

    const listProductsRes = await ProductsService.list({
      page: 1,
      pageSize: 6,
    });

    products = listProductsRes.data.products.map((product) => {
      return {
        buttonColor: 'dark',
        imgSrc: product.imageUrl,
        productId: product.id,
        title: product.name,
        text: product.description,
        price: product.price,
      }
    });
  })

</script>


<div class="container my-5 mx-auto">
  <div class="row">
    <div class="col-sm-12 col-md-6 col-lg-6">
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img src="{product?.imageUrl}" alt="product-image" class="img-fluid float-end">
    </div>


    <div class="col-sm-12 col-md-6 col-lg-5 d-flex flex-column justify-content-center items-center mt-3 mt-md-0">
      <h3 class="text-center text-lg-start">{product?.name}</h3>
      <h5 class="text-danger text-center text-lg-start">{Utils.formatNumberToBrl(product?.price ?? 0)}</h5>
      
      <p class="mt-5 text-center text-lg-start">Quantidade:</p>
      <ProductQuantityComponent bind:quantity={quantity} />

      <button class="btn btn-outline-dark rounded-0 mt-3" on:click={handleAddProductToCart}>
        Adicionar ao carrinho
        <ShoppingCartIcon size=17 class="mb-1" />
      </button>

      <button class="btn btn-dark rounded-0 mt-3 mb-5">Comprar agora</button>

      <div id="product-description my-5">
        <h4 class="text-dark">Descrição do produto</h4>
        {product?.description}
      </div>
    </div>

  </div>

  <div class="row my-5">
    <h4 class="text-dark mt-5 text-center">Produtos que talvez você goste</h4>
		{#each products as product}
			<div class="col-sm-4 col-md-4 col-lg-2 mt-5">
				<ProductCard {...product} />
			</div>
		{/each}
  </div>
</div>