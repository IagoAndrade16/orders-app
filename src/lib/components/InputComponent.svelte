<script lang="ts">
	
  export let value: string | number | null;
  export let label: string | null = '';
  export let classes: string | null = null;
  export let id: string;
  export let placeholder: string;
  export let required: boolean = false;
  export let containerClasses: string | null = null;
  export let error: string | null = null;
  export let onInput: (event: any) => void = () => {};
  export let smallText: string | null = null;
</script>

<div class="{containerClasses}">
  <label for="city" class="form-label">
    {label}
    <small class="text-muted">{smallText ?? ''}</small>
  </label>
  <span class="{required ? '' : 'd-none'} text-danger">*</span>
  <input on:input={onInput} type="text" bind:value={value} class="form-control {classes}" id="{id}" placeholder="{placeholder}">
  <span class="text-danger">{error ?? ''}</span>
</div>