<script lang="ts">
	import type { Shipping } from "$lib/entities/Shipping";
	import { Utils } from "$lib/utils/Utils";
	import EditOrDeleteShippingButton from "../buttons/EditOrDeleteShippingButton.svelte";

    export let editFunction: ((event: any) => void);
    export let deleteFunction: ((event: any) => void);
    export let shippings: Shipping[];
</script>


<div class="row mt-5">
    <div class="col-12 col-lg-5">
        <table class="table table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>Cidade</th>
                    <th>Valor</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {#each shippings as shipping}
                    <tr class="text-center tr-{shipping.id}">
                        <td>{shipping.city}</td>
                        <td>{Utils.formatNumberToBrl(shipping.value)}</td>
                        <td>
                            <EditOrDeleteShippingButton
                                textButton={'Editar'}
                                classButton={'btn-success mb-1'}
                                id={shipping.id}
                                onClick={editFunction}
                            />
                            <EditOrDeleteShippingButton
                                textButton={'Excluir'}
                                classButton={'btn-danger'}
                                id={shipping.id}
                                onClick={deleteFunction}
                            />
                        </td>
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>