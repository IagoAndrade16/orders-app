<script lang="ts">
  export let imgSrc: string | null = '/favicon.jpeg';
  export let title: string | null = 'Pizza';
  export let text: string | null = '';
  export let productId: string | null = '';
  export let buttonAdditionalClasses: string | null = '';
  
  type ButtonClass = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark' | 'link';
  export let buttonColor: ButtonClass = 'dark';
</script>

<div class="card" style="width: 18rem;">
  <img src="{imgSrc}" class="card-img-top" alt="Product Card">
  <div class="card-body">
    <h5 class="card-title">{title}</h5>
    <p class="card-text">{text}</p>
    <a href="/product?id={productId}" class="btn btn-{buttonColor} {buttonAdditionalClasses}">Ver produto</a>
  </div>
</div>