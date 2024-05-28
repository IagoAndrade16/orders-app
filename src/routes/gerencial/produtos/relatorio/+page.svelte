<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import { Engine } from "$lib/core/Engine";
	import { ProductsService, type FetchProductsReportOutput } from "$lib/services/ProductsService";
	import { userStore } from "$lib/stores/user.store";
	import { onMount } from "svelte";

  let from: string = "";
  let to: string = "";

  const handleFormSubmit = async () => {
    const params = {
      to: to ? new Date(to) : undefined,
      from: from ? new Date(from) : undefined,
    };

    const res = await ProductsService.fetchReport(params, $userStore!.token);
    
    fillTable(res.data);
  }

  const fillTable = (data: FetchProductsReportOutput[]) => {
    const table = document.getElementById('products-report-table')!;
    const tbody = table.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    data.forEach((product, index) => {
      const tr = document.createElement('tr');
      const th = document.createElement('th');
      th.setAttribute('scope', 'row');
      th.innerText = (index + 1).toString();
      tr.appendChild(th);

      const tdName = document.createElement('td');
      tdName.innerText = product.productName;
      tr.appendChild(tdName);

      const tdQuantity = document.createElement('td');
      tdQuantity.innerText = product.totalQuantity.toString();
      tr.appendChild(tdQuantity);

      tbody.appendChild(tr);
    });
  }

  onMount(() => {
    if(!$userStore) {
      Engine.navigateTo('/');
    }
  })

</script>
<BodyMargin>
  <h3>Relatório de produtos</h3>
  <small>Veja um relatório detalhado de cada produto</small>

  <div class="row">
    <div class="mt-3 col-6 col-md-3">
      <label for="from">De</label>
      <input type="date" class="form-control" id="from" bind:value={from}>
    </div>

    <div class="mt-3 col-6 col-md-3">
      <label for="to">Até</label>
      <input type="date" class="form-control" id="to" bind:value={to}>
    </div>

    <div class="mt-md-3 col-12 col-md-2">
      <button class="btn btn-outline-dark mt-4 w-100" on:click={handleFormSubmit}>Buscar</button>
    </div>
  </div>

  <div class="mt-3 col-2">
  </div>

  <table id="products-report-table" class="table table-striped">
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Produto</th>
        <th scope="col">Quantidade vendida no período</th>
      </tr>
    </thead>
    <tbody></tbody>
  </table>
</BodyMargin>