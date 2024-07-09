<script lang="ts">
	import type { Shipping } from "$lib/entities/Shipping";

    export let containerClasses: string;
    export let placeholder: string;
    export let shippings: Shipping[];
    export let onChange: ((event: any) => void);

</script>


<div class={containerClasses}>
    <label for="">Cidade</label>
    <select class="form-select" placeholder={placeholder} on:change={onChange}>
            <option value="0">Selecionar</option>
        {#each shippings as shipping}
            <option value={shipping.value} id={shipping.id}>{shipping.city}</option>
        {/each}
    </select>
</div>