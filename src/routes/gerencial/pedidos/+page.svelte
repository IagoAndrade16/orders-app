<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import OrderCard from '$lib/components/OrderCard.svelte';
	import { Order } from '$lib/entities/Order';
	import { OrdersService, type GetOrderData } from "$lib/services/OrdersService";
	import { Masks } from "$lib/utils/Masks";
	import { Utils } from "$lib/utils/Utils";
	import moment from "moment";
	import { onMount } from "svelte";


  let orders: GetOrderData[] = [];
  let filteredOrders: GetOrderData[] = [];

  const filterByDate = (event: any) => {
    const date = event.target.value;

    const today = moment(new Date()).format('YYYY-MM-DD');
    const yesterday = moment().subtract(1, 'days').format('YYYY-MM-DD');
    const lastWeek = moment().subtract(7, 'days').format('YYYY-MM-DD');
    const lastMonth = moment().startOf('month').format('YYYY-MM-DD');

    switch (date) {
      case 'today':
        filteredOrders = orders.filter(order => Utils.formatBrlDateToUsDate(order.createdAt.toString()) === today);
        break;
      case 'yesterday':
        filteredOrders = orders.filter(order => Utils.formatBrlDateToUsDate(order.createdAt.toString()) === yesterday);
        break;
      case 'last-week':
        filteredOrders = orders.filter(order => Utils.formatBrlDateToUsDate(order.createdAt.toString()) >= lastWeek);
        break;
      case 'this-month':
        filteredOrders = orders.filter(order => Utils.formatBrlDateToUsDate(order.createdAt.toString()) >= lastMonth);
        break;
      default:
        filteredOrders = orders;
        break;
    }
  }

  onMount(async () => {
    const response = await OrdersService.fetch({
      page: 1,
      pageSize: 999999,
    })

    orders = response.data!;
    filteredOrders = orders;
  })

</script>
<BodyMargin>
  <h3>Visualizar pedidos</h3>
  <p>Gerencie todos os pedidos feitos até o momento</p>

  <div class="row">
    <!-- <div class="col-12 col-md-3 my-3">
      <InputComponent 
        id="order-name"
        placeholder="Procure pelo nome do cliente"
        bind:value={searchName}
      />
    </div> -->

    <div class="col-12 col-md-3 my-3">
      <label for="search-by-order-status">Data de criação</label>
      <select on:change={filterByDate} name="search-by-date" class="form-control" id="search-by-date-status">
        <option value="all" selected>Todo período</option>
        <option value="today">Hoje</option>
        <option value="yesterday">Ontem</option>
        <option value="last-week">Última semana</option>
        <option value="this-month">Esse mês</option>
      </select>
    </div>
  </div>

  <div class="row">
    {#each filteredOrders as order}
      <div class="col-12 col-md-6">
        <OrderCard
          createdAt={order.createdAt}
          id={order.id}
          status={order.status}
          total={Order.calcTotalPrice(order)}
          products={order.products}
          userName={order?.userName}
          userEmail={order?.userEmail}
          userPhone={Masks.braziliamPhoneNumber(order?.userPhone)}
          isAdmin={true}
        />
      </div>
    {/each}
  </div>
</BodyMargin>