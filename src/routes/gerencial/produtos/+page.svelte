<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import type { Product } from "$lib/entities/Product";
	import { ProductsService } from "$lib/services/ProductsService";
	import { onMount } from "svelte";
  import ProductCard from "$lib/components/ProductCard.svelte";
	import { PlusIcon } from "svelte-feather-icons";
	import { Engine } from "$lib/core/Engine";
	import { userStore } from "$lib/stores/user.store";
	import { ToastService } from "$lib/services/ToastService";
	import { DialogService } from "$lib/services/DialogService";

  let allProducts: Product[] = [];
  let filteredProducts: Product[] = [];
  let searchValue: string | undefined = undefined;

  const searchProduct = () => {
    if (searchValue) {
      filteredProducts = allProducts.filter((product) => {
        return product.name.toLowerCase().includes(searchValue!.toLowerCase());
      });
    } else {
      filteredProducts = allProducts;
    }
  }

  const handleDeleteProduct = async (productId: string) => {
    const { isConfirmed: confirmDelete } = await DialogService.dialog({
      title: "Deseja realmente excluir este produto?",
      showDenyButton: true,
      confirmButtonText: "Excluir",
      denyButtonText: `Não deletar`,
      cancelButtonText: `Cancelar`,
    });

    if(!confirmDelete) return;

    const token = $userStore?.token
    const response = await ProductsService.deleteProduct({
      productId,
      userId: $userStore!.id,
    }, token!)

    if(response.status === 'SUCCESS') {
      ToastService.show({
        message: 'Produto excluído com sucesso',
        type: 'info',
        duration: 3000
      });
      
      filteredProducts = filteredProducts.filter((product) => product.id !== productId);
      
    } else {
      ToastService.show({
        message: 'Erro ao excluir produto',
        type: 'error',
        duration: 3000
      })
    }
  }

  onMount(async () => {
    const response = await ProductsService.list({
      page: 1,
      pageSize: 9999,
    });

    allProducts = response.data.products.map((product) => {
			return {
				createdAt: product.createdAt,
        description: product.description,
        id: product.id,
        imageUrl: product.imageUrl,
        name: product.name,
        price: product.price,
        deletedAt: product.deletedAt,
        deleted: product.deleted,
        updatedAt: product.updatedAt,
        userId: product.userId,
			};
		});
    filteredProducts = allProducts;
  })

</script>
<BodyMargin>
  <div class="row">
    <div class="col-12 col-md-4 mb-2">
      <h1>Produtos</h1>
      <p>Aqui você pode ver os produtos cadastrados.</p>
    </div>
  </div>

  <div class="row d-flex justify-content-between">
    <div class="col-12 col-md-4 mb-2">  
      <input 
        type="text" 
        class="form-control mb-2" 
        placeholder="Pesquise um produto pelo nome" 
        aria-label="Pesquise um produto pelo nome" 
        aria-describedby="button-addon2"
        bind:value={searchValue}
        on:input={searchProduct}
      >
      <span>Produtos encontrados: {filteredProducts.length} produtos</span>
    </div>

    <div class="col-12 col-md-2 mb-2">
      <!-- <button class="btn btn-outline-success w-100 float-md-end" on:click={() => Engine.navigateTo('/gerencial/produtos/adicionar')}>
        Criar produto
        <PlusIcon size=16 />
      </button> -->

      <a href="/gerencial/produtos/adicionar" class="btn btn-outline-success w-100 float-md-end">
        Criar produto
        <PlusIcon size=16 />
      </a>
    </div>
  </div>

  <div class="row">
    {#each filteredProducts as product}
      <div class="col-sm-6 col-md-6 col-lg-3">
        <ProductCard
          imgSrc={product.imageUrl}
          title={product.name}
          price={product.price}
          productId={product.id}
          isAdmin
          handleDeleteProduct={handleDeleteProduct}
        />
      </div>
    {/each}
  </div>
</BodyMargin>