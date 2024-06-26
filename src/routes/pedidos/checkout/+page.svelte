<script>
	import OrderResumeComponent from "$lib/components/OrderResumeComponent.svelte";
  import ProductQuantityComponent from "$lib/components/ProductQuantityComponent.svelte";
	import { Engine } from "$lib/core/Engine";
import { cartStore } from "$lib/stores/cart.store";
	import { Utils } from "$lib/utils/Utils";
	import { Trash2Icon } from "svelte-feather-icons";

</script>
<div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <h4 class="text-center text-lg-start">Carrinho</h4>
    </div>
  </div>

  <div class="row mt-3 d-none d-lg-block">
    <div class="col-12">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">Início</li>
          <li class="breadcrumb-item active" aria-current="page">Pedidos</li>
          <li class="breadcrumb-item" aria-current="page">Carrinho</li>
        </ol>
      </nav>
    </div>
  </div>

  
  <div class="row mt-5 gap-2">
    <div class="col-12 col-lg-8">
      {#if $cartStore.length > 0}
        {#each $cartStore as product, index}
        <div class="card mb-5 shadow border-0">
          <div class="row">
            <!-- <div class="col-12 col-md-4 col-lg-4">
              <img src={product.imageUrl} class="img-fluid img-thumbnail rounded-start" alt="" height="45">
            </div> -->
            <div class="col-12 col-md-5 col-lg-5 border border-top-0 border-bottom-0 border-start-0">
              <div class="card-body">
                <center>
                  <h5 class="card-title">{product.name}</h5>
                  <br>
                
                  <p>Quantidade: </p>
                  <ProductQuantityComponent bind:quantity={product.quantity} />
                </center>
              </div>
            </div>

            <div class="col-12 col-md-3 col-lg-3">
              <div class="card-body text-center">
                <h5 class="card-title text-center">{Utils.formatNumberToBrl(product.price)}</h5>
                <p class="badge text-bg-success">Frete grátis</p>
                <br>

                <button class="btn btn-outline-danger btn-sm rounded w-100" on:click={() => $cartStore = $cartStore.filter((_, i) => i !== index)}>
                  Remover
                  <Trash2Icon size=20 class="mb-1" />
                </button>
                <!-- <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p> -->
              </div>
            </div>
          </div>
        </div>
        {/each}
        {:else}
        <p>Seu carrinho está vazio.</p>
        {/if}
      </div>
      
      {#if $cartStore.length > 0}
        <OrderResumeComponent handleNextAction={() => Engine.navigateTo('/pedidos/endereco')}/>
      {/if}

  </div>
</div>