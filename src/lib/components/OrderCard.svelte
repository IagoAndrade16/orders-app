<script lang="ts">
  enum OrderStatus {
    WAIT_LIST = 'Fila de espera',
    PREPARE_LIST = 'Em preparação',
    DELIVERY_ROUTE = 'Rota de entrega',
    FINISHED = 'Entregue'
  }

  export let id: string;
  export let status: OrderStatus | null;
  export let createdAt: Date;
  export let total: number;

</script>

<div class="card">
  <div class="card-body">
    <h5 class="card-title">Pedido #{id}</h5>
    <p class="card-text">
      Status:
      <span class="badge text-bg-success">{status}</span>
    </p>
    <p class="card-text">Data: {createdAt}</p>
    <p class="card-text">Valor: {total}</p>
    <a href="/pedidos/{id}" class="btn btn-outline-dark">Ver detalhes</a>
  </div>
</div>