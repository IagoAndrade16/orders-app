<script lang="ts">
	import { Engine } from "$lib/core/Engine";
	import { Utils } from "$lib/utils/Utils";
import type { ButtonClass } from "./types/ProductCardComponentDTOs";

  export let imgSrc: string | null;
  export let title: string;
  export let text: string;
  export let price: number;
  export let productId: string;
  export let buttonAdditionalClasses: string | null = '';
  
  export let buttonColor: ButtonClass = 'dark';

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-missing-attribute -->
<a class="card my-2 shadow" on:click={() => Engine.navigateTo(`/produto?id=${productId}`)}>
  <img src="{imgSrc}" class="card-img-top" alt="Product Card">
  <div class="card-body text-decoration-none">
    <div class="d-flex justify-content-between">
      <h5 class="card-title">{title}</h5>
      <small>{Utils.formatNumberToBrl(price)}</small>
    </div>
    <p class="card-text">{text}</p>
  </div>
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