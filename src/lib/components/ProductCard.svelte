<script lang="ts">
	import type { ButtonClass } from "./types/ProductCardComponentDTOs";

  export let imgSrc: string | null;
  export let title: string;
  export let text: string;
  export let productId: string;
  export let buttonAdditionalClasses: string | null = '';
  
  export let buttonColor: ButtonClass = 'dark';

</script>

<div class="card my-2">
  <img src="{imgSrc}" class="card-img-top" alt="Product Card">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{text}</p>
    <a href="/product?id={productId}" class="btn btn-{buttonColor} {buttonAdditionalClasses} w-auto">Ver produto</a>
  </div>
</div>

<style>
  .card-img-top {
    max-height: 11rem;
    object-fit: cover;
  }
</style>