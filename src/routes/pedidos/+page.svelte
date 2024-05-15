<script lang="ts">
	import OrderCard from '$lib/components/OrderCard.svelte';
	import { Order } from '$lib/entities/Order';
	import { OrderStatus, OrdersService, type GetOrderData } from '$lib/services/OrdersService';
	import { userStore } from '$lib/stores/user.store';
	import { Masks } from '$lib/utils/Masks';
	import { Validations } from '$lib/utils/Validations';
	import { onMount } from 'svelte';
	import { SearchIcon } from 'svelte-feather-icons';
  import * as yup from 'yup';

	let orders: GetOrderData[] = [];

  let emailToSearch: string | null = '';

  const formSchema = yup.object().shape({
    email: yup.string().required('Digite um email válido')
  });

  let errors: any = null;

	const searchOrders = async () => {
    if(!$userStore) {
      errors = await Validations.validateYupSchema(formSchema, { email: emailToSearch });
      if(errors) return;
    }

		const response = await OrdersService.fetch({
			page: 1,
			pageSize: 99999,
			email: $userStore ?  $userStore!.email : emailToSearch!
		});

		if (response.data) {
			orders = response.data;
		}
	};

	onMount(async () => {
    if(!$userStore) return;

		await searchOrders();
	});
</script>


<div class="container mt-5 mb-3">
  <div class="row">
    <h1>{$userStore ? 'Meus Pedidos' : 'Encontrar pedido'}</h1>
  </div>
</div>

{#if !$userStore}
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4">
      <div class="input-group mb-3">
        <input type="text" bind:value={emailToSearch} class="form-control" placeholder="Digite um email para buscar um pedido" aria-label="Digite um email para buscar um pedido" aria-describedby="button-addon2">
        
        <button class="btn btn-outline-dark" type="button" id="button-addon2" on:click={searchOrders}>
          <SearchIcon size=18 class="mb-1" />
          Buscar
        </button>
      </div>
      <span class="text-danger">{errors ? errors.email : ''}</span>
    </div>
  </div>
</div>
{/if}

<div class="container">
  <p>
    {orders.length} pedidos encontrados.
  </p>
  <div class="row" style="min-height: 43vh;">
    {#if orders.length > 0}
      {#each orders as order}
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
          />
        </div>
      {/each}
    {/if}
  </div>
</div>

