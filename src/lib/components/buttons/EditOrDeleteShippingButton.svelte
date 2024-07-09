<script lang="ts">
    export let textButton: string;
    export let classButton: string;
    export let id: string;
    export let onClick: ((event: any) => void);

</script>

<button class="btn {classButton}" id={id} on:click={onClick}>
    {textButton}
</button>