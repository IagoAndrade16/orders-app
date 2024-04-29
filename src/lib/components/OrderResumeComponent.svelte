<script lang="ts">

	import { Utils } from "$lib/utils/Utils";
  import { cartStore } from "$lib/stores/cart.store";
	import { Engine } from "$lib/core/Engine";

  export let handleNextAction: () => void;
  export let continueButtonDisabled: boolean = false;
  export let continueButtonLoadingText: string = '';

</script>

<div class="col-12 col-lg-3 order-resume">
  <div class="card shadow border-0">
    <div class="card-body">
      <h5 class="card-title text-center">Resumo do pedido</h5>
      <hr>

      <p>Detalhes do pedido:</p>

      <div class="d-flex justify-content-between">
        <p>Total</p>
        <p class="text-bold">{Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + (product.price * product.quantity), 0))}</p>
      </div>

      <div class="d-flex justify-content-between">
        <p>Descontos</p>
        <p class="text-bold text-success">{Utils.formatNumberToBrl(0)}</p>
      </div>

      <div class="d-flex justify-content-between">
        <p>Valor final:</p>
        <p class="text-bold">{Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + (product.price * product.quantity), 0))}</p>
      </div>

      <hr>

      <div>
        <button class="btn btn-outline-secondary w-100 mb-2" on:click={() => Engine.navigateTo('/produtos')}>Adicionar mais produtos</button>
        <button 
          class="btn btn-dark w-100 {$cartStore.length > 0 ?  '' : 'disabled'} {continueButtonDisabled ? 'disabled' : ''}" 
          on:click={handleNextAction}
        >
          {continueButtonDisabled ? continueButtonLoadingText : 'Continuar'}
        </button>
      </div>

    </div>
  </div>
</div>