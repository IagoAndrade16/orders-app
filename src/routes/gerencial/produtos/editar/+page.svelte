<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import InputComponent from "$lib/components/InputComponent.svelte";
	import { onMount } from "svelte";
  import { ProductsService, type CreateProductDTO } from "$lib/services/ProductsService";
  import { userStore } from "$lib/stores/user.store";
	import { Engine } from "$lib/core/Engine";
	import { ToastService } from "$lib/services/ToastService";

  let values: CreateProductDTO = {
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  }
  let loading: boolean = false;

  const getProcutId = () => {
    const url = new URL(window.location.href);
    let id = url.searchParams.get('id');

    return id;
  }

  const listProducts = async () => {
    let id = getProcutId();

    const response = await ProductsService.get(id!);
    
    values.name = response.data.name;;
    values.description = response.data.description;
    values.imageUrl = response.data.imageUrl!;
    values.price = response.data.price;
    id = response.data.id;
  }

  const handleUpdateProduct = async () => {
    const token = $userStore?.token
    let id = getProcutId();
    loading = true;
    
    const response = await ProductsService.updateProduct({
      name: values.name,
      description: values.description,
      imageUrl: values.imageUrl,
      price: values.price,
    }, id!, token!)

   if (response.status === 'SUCCESS') {
    loading = false;
    ToastService.show({ message: 'Produto Atualizado com sucesso!', type: 'success' });
   }

   if (response.status !== 'SUCCESS') {
    loading = false;
    ToastService.show({ message: 'Algo deu errado, tente novamente mais tarde!', type: 'error' });
   }
  }

  onMount(async () => {
      await listProducts();
  })

</script>
<BodyMargin>
    <section class="vh-70 gradient-custom">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div class="card  text-white">
                <div class="card-body p-5">
                  <h2 class="mb-5 text-black text-center">Editar Produto</h2>
                  <InputComponent 
                    id="name"
                    label="Nome do produto"
                    placeholder="Nome do produto"
                    bind:value={values.name}
                    containerClasses="text-black"
                    required       
                  />

                  <div class="d-block">
                    <label for="description" class="text-black">
                      Descrição
                      <span class="text-danger">*</span>
                    </label>
                    <textarea bind:value={values.description} name="description" id="description" class="form-control"></textarea>
                    <!-- <span class="text-danger">{errors ? errors.description : ''}</span> -->
                  </div>

                  <br/>

                  <InputComponent 
                    id="imageUrl"
                    label="URL da imagem do produto"
                    placeholder="URL da imagem"
                    bind:value={values.imageUrl}
                    containerClasses="text-black"
                    required                  
                  />

                  <br/>

                  <InputComponent 
                    id="price"
                    label="Preço do produto (R$)"
                    placeholder="Preço do produto (R$)"
                    bind:value={values.price}
                    containerClasses="text-black"
                    required
                  />
                  <center>
                    <button 
                    on:click={handleUpdateProduct}
                    class="btn btn-primary mt-2 "
                    >
                      {loading ? 'Atualizando...' : 'Atualizar'}
                    </button>
                  </center>
                  

                  <br/>           
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>    
</BodyMargin>