<script lang="ts">
	import { Engine } from "$lib/core/Engine";
	import { ProductsService } from "$lib/services/ProductsService";
	import { Utils } from "$lib/utils/Utils";
	import { Edit2Icon, Trash2Icon } from "svelte-feather-icons";
import type { ButtonClass } from "./types/ProductCardComponentDTOs";

  export let imgSrc: string | null;
  export let title: string;
  export let text: string;
  export let price: number;
  export let productId: string;
  export let buttonAdditionalClasses: string | null = '';
  export let isAdmin: boolean = false;
  
  export let buttonColor: ButtonClass = 'dark';

  const handleDeleteProduct = async () => {
    // const response = await ProductsService.delete(productId);
  }

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<a class="card my-2 shadow text-decoration-none" on:click={() => Engine.navigateTo(`/produto?id=${productId}`)}>
  <img src="{imgSrc}" class="card-img-top" alt="Product Card">
  <div class="card-body text-decoration-none">
    <div class="d-flex justify-content-between">
      <h5 class="card-title">{title}</h5>
      <small>{Utils.formatNumberToBrl(price)}</small>
    </div>
    <p class="card-text">{text}</p>
  </div>
  {#if isAdmin}
  <div class="d-flex">
    <button on:click={() => Engine.navigateTo(`/produto/atualizar?id=${productId}`)} class="btn btn-warning text-white {buttonAdditionalClasses} view-product rounded-0">
      Editar produto
      <Edit2Icon size=16 />
    </button>
    
    <button on:click={handleDeleteProduct} class="btn btn-danger {buttonAdditionalClasses} view-product rounded-0">
      Excluir
      <Trash2Icon size=16 />
    </button>
  </div>
  {/if}
    <button on:click={() => Engine.navigateTo(`/produto?id=${productId}`)} class="btn btn-{buttonColor} {buttonAdditionalClasses} view-product rounded-0">Ver produto</button>
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