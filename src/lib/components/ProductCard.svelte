<script lang="ts">
	import { Engine } from "$lib/core/Engine";
	import { Utils } from "$lib/utils/Utils";
	import { Edit2Icon, Trash2Icon } from "svelte-feather-icons";
	import type { ButtonClass } from "./types/ProductCardComponentDTOs";
	import { goto } from "$app/navigation";
	import ProductQuantityComponent from "./ProductQuantityComponent.svelte";
	import { ToastService } from "$lib/services/ToastService";
	import { cartStore } from "$lib/stores/cart.store";


  export let imgSrc: string | null;
  export let title: string;
  export let price: number;
  export let productId: string;
  export let buttonAdditionalClasses: string | null = '';
  export let isAdmin: boolean = false;
  export let buttonColor: ButtonClass = 'dark';
  export let showAddToCartButton: boolean = false;
  export let createdAt: Date;
  export let updatedAt: Date;
  export let description: string;

  // make this function optional in component
  export let handleDeleteProduct: (productId: string) => {};

  export let goToRecommendedProduct = async () => {
    await goto(`/produto?id=${productId}`);
  }

  let quantity: number = 1;

  const handleAddProductToCart = () => {

    const productAlreadyInCart = $cartStore!.find((productInCart) => productInCart.id === productId);
    if(productAlreadyInCart) {
      ToastService.show({ message: 'Este produto já existe no seu carrinho de compras.', type: 'info' });
      return;
    }

    ToastService.show({ message: 'Produto adicionado ao carrinho.', type: 'success' });    
    $cartStore = [{ 
      id: productId,
      deleted: false,
      deletedAt: null,
      description,
      imageUrl: imgSrc,
      name: title,
      price,
      updatedAt,
      createdAt,
      userId: '',
      quantity,
    }, ...$cartStore]
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<a class="card my-2 shadow text-decoration-none">
  <img src="{imgSrc}" class="card-img-top" alt="Product Card">
  <div class="card-body text-decoration-none text-center">
    <h4 class="card-title text-center">{title}</h4>
    <span class="text-center">{Utils.formatNumberToBrl(price)}</span>
    {#if showAddToCartButton}
      <ProductQuantityComponent bind:quantity={quantity} />
    {/if}
    
  </div>
  {#if isAdmin}
  <div class="d-flex">
    <button on:click={() => Engine.navigateTo(`/gerencial/produtos/editar?id=${productId}`)} class="btn btn-warning text-white {buttonAdditionalClasses} view-product rounded-0">
      Editar produto
      <Edit2Icon size=16 />
    </button>
    
    <button on:click={() => handleDeleteProduct(productId)} class="btn btn-danger {buttonAdditionalClasses} view-product rounded-0">
      Excluir
      <Trash2Icon size=16 />
    </button>
  </div>
  {/if}
    <button on:click={goToRecommendedProduct} class="btn btn-{buttonColor} {buttonAdditionalClasses} view-product rounded-0">Ver produto</button>
    {#if showAddToCartButton}
      <button on:click={handleAddProductToCart} class="btn btn-outline-success view-product rounded-0">Adicionar ao carrinho</button>
    {/if}
</a>

<style>
  .card-img-top {
    max-height: 11rem;
    object-fit: cover;
  }

  .view-product {
    width: 100%;
  }

  .card:hover {
		opacity: 0.8;
		transition: 0.3s;
	}

	.card {
		opacity: 1;
		transition: 0.5s;
	}

	.card > * {
		cursor: pointer;
	}
</style>