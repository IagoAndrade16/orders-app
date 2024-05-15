<script lang="ts">
	import { SearchIcon } from 'svelte-feather-icons';
	import { onMount } from 'svelte';
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { page } from '$app/stores';
	import type { ProductCardComponentInput } from '$lib/components/types/ProductCardComponentDTOs';
	import { ProductsService } from '$lib/services/ProductsService';

	let products: ProductCardComponentInput[] = [];

	let actualPage: number = parseInt($page.url.searchParams.get('page') || '1');
	let pageSize: number = 24;
	let numberOfPages: number = 1;
  	let productsTotal: number = 0;
  	let searchValue: string | undefined = undefined;

	const handleChangePagination = async (newPage: string) => {
    if(newPage === 'previous') {
      actualPage--;
      await searchProducts();
      return;
    }

    if(newPage === 'next') {
      actualPage++;
      await searchProducts();
      return;
    }

		actualPage = parseInt(newPage);
		await searchProducts();
	};

	const searchProducts = async () => {
    products = [];
		const listProductsRes = await ProductsService.list({
			page: actualPage,
			pageSize,
      name: searchValue
		});

		products = listProductsRes.data.products.map((product) => {
			return {
				buttonColor: 'dark',
				imgSrc: product.imageUrl,
				productId: product.id,
				title: product.name,
				text: product.description,
				price: product.price
			};
		});

    productsTotal = listProductsRes.data.total;
		numberOfPages = Math.ceil(listProductsRes.data.total / pageSize);
	};

	onMount(async () => {
		await searchProducts();
	});
</script>

<div class="container my-3">
	<div class="row">
		<div class="col-sm-12 col-md-6 col-lg-4">
			<div class="input-group mb-3 col-3">
				<span class="input-group-text" id="basic-addon1">
					<SearchIcon size="15" />
				</span>
				<input
					type="text"
					class="form-control"
					placeholder="Buscar um produto"
					aria-label="search-product"
					aria-describedby="basic-addon1"
          bind:value={searchValue}
				/>
			</div>
		</div>

		<div class="col-3 col-md-2 col-lg-2">
			<button class="btn btn-dark w-full search-button" on:click={searchProducts}>Buscar</button>
		</div>
	</div>
</div>

<div class="container products-container">
  <div class="row">
    <div class="col-12 d-flex justify-content-between">
      <small>{productsTotal} produtos encontrados</small>
      <small>Página {actualPage} de {numberOfPages}</small>

    </div>
  </div>
	<div class="row">
		{#each products as product}
			<div class="col-sm-6 col-md-6 col-lg-3">
				<ProductCard {...product} />
			</div>
		{/each}
	</div>
	<div class="row mt-5">
		<div class="col-12 d-flex justify-content-center items-center mx-auto">
			<nav aria-label="Page navigation example">
				<ul class="pagination">
					<li class="page-item">
						<button
							class="page-link text-black {actualPage === 1 ? 'disabled' : ''}"
							on:click={() => handleChangePagination('previous')}>Anterior</button
						>
					</li>
					{#each Array(numberOfPages) as _, index (index)}
						<li class="page-item">
							<button
								on:click={() => handleChangePagination(`${index + 1}`)}
								class="page-link text-black {index + 1 === actualPage ? 'active' : ''}"
								>{index + 1}</button
							>
						</li>
					{/each}
					<li class="page-item">
						<button
							class="page-link text-black {actualPage === numberOfPages ? 'disabled' : ''}"
							on:click={() => handleChangePagination('next')}>Próximo</button
						>
					</li>
				</ul>
			</nav>
		</div>
	</div>
</div>

<style>
	.search-button {
		width: 100%;
	}

	.active {
		background-color: #000 !important;
		color: #fff !important;
	}
</style>
