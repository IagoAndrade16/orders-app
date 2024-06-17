<script lang="ts">
  export let quantity: number;
</script>

<div class="d-flex align-self-center justify-content-center align-self-lg-start">
  <button class="btn btn-dark" on:click={() => quantity > 1 ? quantity -= 1 : quantity}>-</button>
  <button class="btn btn-light disabled rounded-0" id="quantity-container">{quantity}</button>
  <button class="btn btn-dark" on:click={() => quantity += 1}>+</button>

  <slot />
</div>