<script lang="ts">
    export let loadingText: string | null = null;
    export let onClick: ((event: any) => void) | null = null;
    export let disabled: boolean | null = true;
    export let spinner: boolean | null = false;
</script>

<button data-mdb-button-init 
data-mdb-ripple-init 
class="btn btn-outline-light px-5"
type="submit" 
disabled={disabled}
on:click={onClick}   
style="display: inline-flex; align-items: center;"   
>
    {loadingText ? loadingText : 'Criar Conta'} 
    {#if spinner}
        <div class="spinner-border text-light ms-4" role="status"></div>
    {/if}
</button>
