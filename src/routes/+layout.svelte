<script>
	import Footer from "$lib/components/landing/Footer.svelte";
	import Navbar from "$lib/components/landing/Navbar.svelte";
  import { SvelteToast } from '@zerodevx/svelte-toast';


</script>
<svelte:head>
	<title>Peppe Forneria</title>
	<meta name="Peppe Forneria" content="Peppe Forneria" />
</svelte:head>

<SvelteToast />

<Navbar />
<slot />
<Footer />
