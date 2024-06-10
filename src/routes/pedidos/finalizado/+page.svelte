<script lang="ts">
	import { page } from "$app/stores";
	import { Engine } from "$lib/core/Engine";
	import { OrdersService, type GetOrderData } from "$lib/services/OrdersService";
	import { Utils } from "$lib/utils/Utils";
	import { onMount } from "svelte";
	import { CreditCardIcon, FileTextIcon, TruckIcon } from "svelte-feather-icons";

  let order: GetOrderData | null = null;
	
  const orderId = $page.url.searchParams.get('id');
  let totalPrice = 0;

  onMount(async () => {
    if(!orderId) Engine.navigateTo('/');
    
    const getOrderRes = await OrdersService.get(orderId);
    
    if(getOrderRes.data) { 
      order = getOrderRes.data;
      totalPrice = order.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    } else {
      Engine.navigateTo('/');
    }
  });
  
</script>

{#if order}
<div class="container p-3">
  <div class="row border shadow m-3">
    <h3 class="text-center mt-4">Detalhes do pedido</h3>
    <small class="text-center mb-4">Feito em {order.createdAt}</small>

    <hr>

    <div class="col-12 ml-5 col-lg-4 p-3 text-center">
      <h4>
        Entrega
        <TruckIcon />
      </h4>
      <p> {order.userAddress}.</p>
    </div>

    <div class="col-12 ml-5 col-lg-4 p-3 text-center">
      <h4>
        Pagamento
        <CreditCardIcon />
      </h4>
      <p>
        {#if order.paymentMethod === 'pix'}
          Realize o PIX para a chave: <b> CNPJ: 53.903.643/0001-01 </b> no valor de <b>{Utils.formatNumberToBrl(totalPrice)}
          </b> e pronto! Seu pedido já estará em estágio de preparo.

        {:else}
          O pagamento no valor de <b>{Utils.formatNumberToBrl(totalPrice)}
          </b> deverá ser feito no ato da entrega do pedido.
        {/if}
      </p>
    </div>

    <div class="col-12 ml-5 col-lg-4 p-3 text-center">
      <h4>
        Resumo do pedido
        <FileTextIcon />
      </h4>
      <div class="d-flex justify-content-evenly">
        <p>Total</p>
        <p class="text-bold">{Utils.formatNumberToBrl(totalPrice)}</p>
      </div>

      <div class="d-flex justify-content-evenly">
        <p>Descontos</p>
        <p class="text-bold text-success">{Utils.formatNumberToBrl(0)}</p>
      </div>

      <div class="d-flex justify-content-evenly">
        <p>Valor final:</p>
        <p class="text-bold">{Utils.formatNumberToBrl(totalPrice)}</p>
      </div>
    </div>
  </div>

  <div class="row m-3">
    <h3 class="text-center mt-4">Itens do pedido</h3>
    <hr>

    {#each order.products as product}
      <div class="col-11 col-lg-3 p-3 border shadow m-3 d-flex">
        <!-- svelte-ignore a11y-img-redundant-alt -->
        <div class="ms-2">
          <span><b> {product.quantity} x {product.name} </b></span> <br />
          <span>Valor: {Utils.formatNumberToBrl(product.price * product.quantity)}</span>
        </div>
        <hr>
      </div>
    {/each}
  </div>
</div>
{/if}