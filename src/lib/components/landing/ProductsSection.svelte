<script lang="ts">
	import { onMount } from "svelte";
	import ProductCard from "../ProductCard.svelte";
	import type { ProductCardComponentInput } from "../types/ProductCardComponentDTOs";
	import { ProductsService } from "$lib/services/ProductsService";

	let products: ProductCardComponentInput[] = [];
  let handleDeleteProduct: (productId: string) => {};


	onMount(async() => {
		const listProductsRes = await ProductsService.list({
			page: 1,
			pageSize: 6,
		});

		products = listProductsRes.data.products.map((product) => {
			return {
				buttonColor: 'dark',
				imgSrc: product.imageUrl,
				productId: product.id,
				title: product.name,
				text: product.description,
				price: product.price,
			}
		})
	})

</script>
<style>
	.look-all-products-card:hover {
		opacity: 0.8;
		transition: 0.3s;
	}

	.look-all-products-card {
		opacity: 1;
		transition: 0.5s;
	}

	.look-all-products-card > * {
		cursor: pointer;
	}
</style>

<div class="container my-5">
	<div class="row">
		<div class="col-12 col-md-12 col-lg-3 mt-2 mb-5">
			<a class="card text-bg-dark look-all-products-card border-0" href="/produtos">
				<img src="/imagem-pizza1.jpeg" class="img-fluid" alt="">
				<div class="card-img-overlay">
					<span class="rounded-pill bg-black text-white p-2">Pizzas</span>
				</div>
			</a>
		</div>

		{#each products as product}
			<div class="col-sm-6 col-md-6 col-lg-3">
				<ProductCard
					imgSrc={product.imgSrc}
					title={product.title}
					price={product.price}
					productId={product.productId}
					handleDeleteProduct={handleDeleteProduct}
					isAdmin={false}
				/>
			</div>
		{/each}
	</div>
</div>