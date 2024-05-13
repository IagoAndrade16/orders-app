<script lang="ts">
	import { Engine } from "$lib/core/Engine";
import { OrderStatus } from "$lib/services/OrdersService";
	import { Utils } from "$lib/utils/Utils";

  export let id: string;
  export let status: OrderStatus;
  export let createdAt: Date;
  export let total: number;
  export let products: { name: string, price: number, quantity: number }[];
  export let userName: string | null = null;
  export let userEmail: string | null = null;
  export let userPhone: string | null = null;
  export let isAdmin: boolean = false;

  const getStatusBadgeColor = () => {
    const badgeColors = {
      [OrderStatus.DELIVERY_ROUTE]: 'text-bg-info',
      [OrderStatus.FINISHED]: 'text-bg-success',
      [OrderStatus.PREPARE_LIST]: 'text-bg-info',
      [OrderStatus.WAIT_PAYMENT]: 'text-bg-warning',
    }
    return badgeColors[status];
  }

  const goToOrdersDetails = () => {
    Engine.navigateTo(`/gerencial/pedidos/detalhes?id=${id}`)
  }

</script>
<div class="card mb-2">
  <div class="card-body">
    <h5 class="card-title">Pedido #{id}</h5>
    <p class="card-text">
      Status:
      <span class="badge text-white {getStatusBadgeColor()}">{status}</span>
    </p>
    <p class="card-text">Data: {createdAt}</p>
    <p class="card-text">Nome no pedido: {userName ?? 'Não informado'}</p>
    <p class="card-text">Email do cliente: {userEmail ?? 'Não informado'}</p>
    <p class="card-text">Telefone: {userPhone ?? 'Não informado'}</p>
    <p class="card-text">Valor: {Utils.formatNumberToBrl(total)}</p>

    {#if isAdmin}
      <button class="btn btn-outline-dark" on:click={goToOrdersDetails}>Visualizar pedido completo</button>
    {:else}
      <div class="" data-bs-toggle="collapse" data-bs-target="#faqItem-{id}" aria-expanded="false" aria-controls="faqItem-{id}">
        <div class="btn btn-outline-dark">
          <div>
            Ver detalhes
          </div>
        </div>
        <div class="collapse row gap-2 p-3" id="faqItem-{id}">
          {#each products as product}
            <div class="col-12 col-lg-3 p-3 border shadow mt-3 d-flex">
              <!-- svelte-ignore a11y-img-redundant-alt -->
              <div>
                <span><b> {product.quantity} x {product.name} </b></span> <br />
                <span>Valor: {Utils.formatNumberToBrl(product.price * product.quantity)}</span>
              </div>
              <hr>
            </div>
          {/each}
        </div>
      </div>
    {/if}

  </div>
</div>