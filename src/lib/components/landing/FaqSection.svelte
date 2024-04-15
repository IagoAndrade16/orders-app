<script>
	import FaqItem from "../FaqItem.svelte";

</script>
<div class="container my-5" id="perguntas-frequentes">
  <div class="row">
    <div class="col-12 justify-content-center text-center mb-4">
      <h2>Perguntas frequentes</h2>
      <small>Está com alguma dúvida? Dê uma olhada nas perguntas mais frequentes abaixo.</small>
    </div>

    <FaqItem 
      question="Como faço para comprar?" 
      answer="Para comprar, basta acessar a página de produtos e clicar no botão de compra. Em seguida, você será redirecionado para a página de pagamento."
      id={1}
    />

    <FaqItem 
      question="Quais são as formas de pagamento?" 
      answer="Aceitamos cartão de crédito, débito e boleto bancário." 
      id={2}
    />
  </div>
</div>