<script lang="ts">
	import { page } from "$app/stores";
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import OrderStatusComponent from "$lib/components/OrderStatusComponent.svelte";
	import { Engine } from "$lib/core/Engine";
	import { OrderPaymentMethodEnum } from "$lib/entities/Order";
	import { OrderStatus, OrdersService, type GetOrderData } from "$lib/services/OrdersService";
	import { ToastService } from "$lib/services/ToastService";
	import { userStore } from "$lib/stores/user.store";
	import { Utils } from "$lib/utils/Utils";
	import { onMount } from "svelte";

  let order: GetOrderData | null = null;
	
  const orderId = $page.url.searchParams.get('id');
  let totalPrice = 0;

  let getStatusBadgeColor: (newStatus?: OrderStatus) => string;

  const handleUpdateOrderStatus = async (status: OrderStatus) => {
    const updateOrderRes = await OrdersService.updateStatus({orderId: orderId!, status }, $userStore!.token);
    if(updateOrderRes.status === 'SUCCESS') {
      order!.status = status;
      ToastService.show({
        message: 'Status do pedido atualizado com sucesso',
        type: 'success',
        duration: 3500,
      });
      getStatusBadgeColor(status);
    } else {
      ToastService.show({
        message: 'Erro ao atualizar status do pedido.',
        type: 'error',
      })
    }
  }

  onMount(async () => {
    if(!orderId) Engine.navigateTo('/');
    
    const getOrderRes = await OrdersService.get(orderId);
    
    if(getOrderRes.data) { 
      order = getOrderRes.data;
      totalPrice = order.shippingPrice + order.products.reduce((acc, product) => acc + (product.price * product.quantity), 0);
      // getStatusBadgeColor(order.status);
    } else {
      Engine.navigateTo('/');
    }
  });

</script>
<BodyMargin>
  {#if order}
    <div class="row d-flex justify-content-center text-center">
      <h3 class="mx-auto mb-5">Detalhes do pedido</h3>
      <section class="vh-70 gradient-custom">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-7">
              <div class="card text-black">
                <div class="card-body p-5 text-start">
                  <h4>Pedido {order?.id}</h4>
                  <p>Feito em {order.createdAt}</p>
                  <p>E-mail: {order.userEmail ? order.userEmail : 'Não informado'}</p>
                  <p>Telefone: {order.userPhone}</p>
                  <p>Endereço: {order.userAddress}</p>
                  <p>Forma de pagamento: {OrderPaymentMethodEnum[order.paymentMethod] ?? '-'}</p>
                  <p>Valor total: {Utils.formatNumberToBrl(totalPrice)}</p>

                  <OrderStatusComponent 
                    status={order.status}
                    bind:getStatusBadgeColor={getStatusBadgeColor}
                  />

                  <p>
                    <b>Produtos:</b>
                  </p>

                  {#each order.products as product}
                    <div class="d-flex">
                      <p>{product.quantity}x {product.name} - </p>
                      <p>&nbsp {Utils.formatNumberToBrl(product.price * product.quantity)}</p>
                    </div>
                  {/each}
                  
                  <div class="d-flex gap-2">
                    <button class="btn btn-primary" on:click={() => window.print()}>Imprimir</button>
                    <button on:click={() => Engine.back()} class="btn btn-secondary">Voltar</button>
                  </div>

                  <div class="dropdown mt-3">
                    <button class="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Atualizar status do pedido
                    </button>
                    <ul class="dropdown-menu">
                      <li><button on:click={() => handleUpdateOrderStatus(OrderStatus.DELIVERY_ROUTE)} class="dropdown-item">Em rota de entrega</button></li>
                      <li><button on:click={() => handleUpdateOrderStatus(OrderStatus.FINISHED)} class="dropdown-item">Entregue</button></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  {/if}
</BodyMargin>