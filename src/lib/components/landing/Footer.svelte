<script lang="ts">
  import { InstagramIcon } from 'svelte-feather-icons';

  const now = new Date();
</script>

<footer class="footer bg-black mt-5 text-white py-3">
  <div class="container">
    <div class="row d-flex justify-content-center text-center">
      <div class="col-sm-12 col-md-8">
        Acompanhe nas redes sociais:
      </div>
    </div>

    <div class="row d-flex justify-content-center text-center">
      <div class="col-sm-12 col-md-8 d-flex justify-content-center text-center mt-1">
        <a href="https://www.instagram.com/peppeforneria/" target="_blank">
          <InstagramIcon />
        </a>
      </div>
    </div>

    <div class="row d-flex justify-content-center text-center mt-3">
      <div class="col-12">
        <p>© {now.getFullYear()}, Peppe Forneria. Todos os direitos reservados</p>
      </div>
    </div>
  </div>
</footer>

<style></style>