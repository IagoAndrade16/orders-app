<script lang="ts">
	import { onMount } from "svelte";
	import ProductCard from "../ProductCard.svelte";
	import { ProductsService } from "../services/ProductsService";
	import type { ProductCardComponentInput } from "../types/ProductCardComponentDTOs";

	let products: ProductCardComponentInput[] = [];

	onMount(async() => {
		const listProductsRes = await ProductsService.list({
			page: 1,
			pageSize: 3,
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
		<div class="col-12 col-md-12 col-lg-3 my-2">
			<a class="card text-bg-dark look-all-products-card border-0" href="/produtos">
				<img src="/imagem-pizza1.jpeg" class="img-fluid" alt="">
				<div class="card-img-overlay">
					<span class="rounded-pill bg-white text-black p-2">Pizzas</span>
					<p class="card-text ms-1 mt-1"><small>Ver tudo</small></p>
				</div>
			</a>
		</div>

		{#each products as product}
			<div class="col-sm-6 col-md-6 col-lg-3">
				<ProductCard {...product} />
			</div>
		{/each}
	</div>
</div>