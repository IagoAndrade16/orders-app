<script lang="ts">
  export let question: string;
  export let answer: string;

  export let id: number;
</script>

<div class="bg-body-tertiary p-3 rounded shadow my-3 ms-2 me-2" data-bs-toggle="collapse" data-bs-target="#faqItem-{id}" aria-expanded="false" aria-controls="faqItem-{id}">
  <div class="d-flex justify-content-between">
    <div class="h5">
      {question}
    </div>
  </div>
  <div class="collapse" id="faqItem-{id}">
    {answer}
  </div>
</div>