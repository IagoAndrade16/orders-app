<script lang="ts">
    export let onClick: ((event: any) => void) | null = null;
    export let isEditing: boolean;
</script>

<button data-mdb-button-init 
data-mdb-ripple-init 
class="btn btn-dark col-12 col-lg-5 mt-4"
type="submit" 
on:click={onClick}   
>
    {isEditing ? 'Editar Frete' : 'Adicionar Frete'}
</button>
