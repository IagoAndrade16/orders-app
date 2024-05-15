<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import { OrderStatus, OrdersService, type GetOrderData } from "$lib/services/OrdersService";
	import { onMount } from "svelte";
	import OrderCard from '$lib/components/OrderCard.svelte';
	import { Order } from '$lib/entities/Order';
	import { Utils } from "$lib/utils/Utils";
	import { Masks } from "$lib/utils/Masks";


  let orders: GetOrderData[] = [];

  onMount(async () => {
    const response = await OrdersService.fetch({
      page: 1,
      pageSize: 999999,
    })

    orders = response.data!;
  })

</script>
<BodyMargin>
  <h3>Visualizar pedidos</h3>
  <p>Gerencie todos os pedidos feitos até o momento</p>

  <div class="row">
    {#if orders.length > 0}
      {#each orders as order}
      <div class="col-12 col-md-6">
        <OrderCard
          createdAt={order.createdAt}
          id={order.id}
          status={OrderStatus.WAIT_PAYMENT}
          total={Order.calcTotalPrice(order)}
          products={order.products}
          userName={order?.userName}
          userEmail={order?.userEmail}
          userPhone={Masks.braziliamPhoneNumber(order?.userPhone)}
          isAdmin={true}
        />
      </div>
      {/each}
    {/if}
  </div>
</BodyMargin>