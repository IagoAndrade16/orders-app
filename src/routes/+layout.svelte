<script>
	import Footer from "$lib/components/landing/Footer.svelte";


	import Navbar from "$lib/components/landing/Navbar.svelte";

</script>
<svelte:head>
	<title>Peppe Forneria</title>
	<meta name="Peppe Forneria" content="Peppe Forneria" />
</svelte:head>

<Navbar />
<slot />
<Footer />
