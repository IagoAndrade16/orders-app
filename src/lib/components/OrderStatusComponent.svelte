<script lang="ts">
  import { OrderStatus } from "$lib/services/OrdersService";

  export let status: OrderStatus;
  let badgeColor: string = '';

  export const getStatusBadgeColor = (newStatus?: OrderStatus) => {
    console.log(newStatus, status)
    const badgeColors = {
      [OrderStatus.DELIVERY_ROUTE]: 'text-bg-info',
      [OrderStatus.FINISHED]: 'text-bg-success',
      [OrderStatus.PREPARE_LIST]: 'text-bg-info',
    }
    // console.log(newStatus ? badgeColors[newStatus] : badgeColors[status])
    badgeColor = newStatus ? badgeColors[newStatus] : badgeColors[status];
  }
</script>

<p class="card-text">
  Status:
  <span class="badge text-white {status === OrderStatus.FINISHED ? 'text-bg-success' : 'text-bg-info'}">{status}</span>
</p>