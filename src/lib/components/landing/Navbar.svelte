<script>
	import { ShoppingCartIcon, Trash2Icon } from "svelte-feather-icons";
  import { cartStore } from "$lib/stores/cart.store";
	import { Utils } from "$lib/utils/Utils";
	import { Engine } from "$lib/core/Engine";
	import ProductQuantityComponent from "../ProductQuantityComponent.svelte";
	import { userStore } from "$lib/stores/user.store";
	import { User } from "$lib/entities/User";

</script>
<nav class="navbar navbar-expand-lg">
  <div class="container">
    <a class="navbar-brand" href="/">
			<img src="/favicon.jpeg" height="90" alt="Peppe Forneria logo">
      <span class="d-none d-lg-inline-flex" style="font-size: 1rem;">Peppe Forneria</span>
		</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse text-center" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item me-lg-4">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item me-lg-4">
          <a class="nav-link" href="/produtos">Ver produtos</a>
        </li>

				<li class="nav-item me-lg-4">
          <a class="nav-link" href="/#perguntas-frequentes">Perguntas Frequentes</a>
        </li>

        {#if !$userStore}
          <li class="nav-item me-lg-4">
            <a class="nav-link" href="/pedidos">Encontrar pedido</a>
          </li>
        {/if}
      </ul>
      <div class="d-flex justify-content-center text-center" role="search">
        {#if $userStore}

          {#if $userStore.isOwner}
            <li class="nav-item dropdown text-decoration-none">
              <!-- svelte-ignore a11y-invalid-attribute -->
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Área gerencial
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/gerencial/pedidos">Visualizar pedidos</a></li>
                <li><a class="dropdown-item" href="/gerencial/produtos">Gerenciar produtos</a></li>
              </ul>
            </li>
            &nbsp &nbsp
          {:else}
            <a href="/pedidos" class="text-decoration-none text-black">
              Meus pedidos &nbsp &nbsp
            </a>
          {/if}
          &nbsp
        {:else}
          <a href="/criar-conta" class="text-decoration-none text-black">
            Cadastrar
          </a>
          &nbsp
        {/if}
      </div>

      <div class="mt-1">
        <!-- svelte-ignore a11y-invalid-attribute -->
        {#if $userStore}
          <a href="#" class="text-black text-decoration-none" on:click={User.logout}>
            Sair
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="black" class="bi bi-box-arrow-right" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
              <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
            </svg>
          </a>
        {/if}


        <button class="btn position-relative" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
          <ShoppingCartIcon size=18/>
          <span class="position-absolute translate-middle badge rounded-pill bg-danger" style="top: 22%; left: 100%;">
            {$cartStore.length}
            <span class="visually-hidden">unread messages</span>
          </span>
        </button>
      </div>
    </div>
  </div>
</nav>


<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title" id="offcanvasRightLabel">Meu carrinho</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  {#if $cartStore.length === 0}
    <div class="offcanvas-body">
      <p class="text-center text-black">Seu carrinho está vazio.</p>
    </div>
  {:else}
    <div class="offcanvas-body">
      {#each $cartStore as product, index}
        <div class="d-flex justify-content-between p-1">
          <div class="d-flex">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src={product.imageUrl} alt="product-image" class="img-fluid img-thumbnail" width="50" height="50">
            <div class="d-flex flex-column ms-2">
              <span>{product.name}</span>
              <span>{Utils.formatNumberToBrl(product.price)}</span>
            </div>
          </div>
          <div class="d-flex">
            <ProductQuantityComponent bind:quantity={$cartStore[index].quantity} >  
              &nbsp
              <button class="btn btn-outline-danger" on:click={() => $cartStore = $cartStore.filter((_, i) => i !== index)}>
                <Trash2Icon size=18 />
              </button>
            </ProductQuantityComponent>
          </div>
        </div>

        <hr>
      {/each}

      <div class="d-flex justify-content-between">
        <span>Total</span>
        <span>{Utils.formatNumberToBrl($cartStore.reduce((acc, product) => acc + product.price * product.quantity, 0))}</span>
      </div>
  
      <div class="d-flex">
        <button class="btn btn-outline-dark w-100 rounded-0 my-2" on:click={() => Engine.navigateTo('/pedidos/checkout')}>Finalizar pedido</button>
      </div>
    </div>
  {/if}
</div>


<style>
  li {
    list-style-type: none;
  }
</style>