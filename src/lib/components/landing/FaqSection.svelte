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
      answer="Para comprar, basta acessar a página do Peppe Forneria, pelo link do pedido ou também pelo Whatsapp."
      id={1}
    />

    <FaqItem 
      question="Quais são as formas de pagamento?" 
      answer="Aceitamos cartão de crédito, débito, dinheiro e pix." 
      id={2}
    />

    <FaqItem 
      question="Qual a área de entrega?" 
      answer="Até o momento, entregamos para as cidades de Volta Redonda, Barra Mansa, Resende e Bananal." 
      id={3}
    />

    <FaqItem 
      question="Como é feita a entrega?" 
      answer="Os envios são feitos com moto para garantir a qualidade dos produtos." 
      id={4}
    />

    <FaqItem 
      question="Como é realizado o preparo das pizzas?" 
      answer="Pizza feita artesanalmente em forno napolitano, com produtos selecionados." 
      id={5}
    />

    <FaqItem 
      question="Qual o tamanho das pizzas?" 
      answer="Nossas pizzas possuem aproximadamente 29cm de diâmetro." 
      id={6}
    />
    <FaqItem 
      question="Qual o prazo de validade e armazenamento correto das pizzas?" 
      answer="As pizzas têm validade de 60 dias a partir da data de fabricação e devem ser armazenadas no freezer até o momento do preparo." 
      id={7}
    />
  </div>
</div>