<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import InputComponent from "$lib/components/InputComponent.svelte";
	import { Engine } from "$lib/core/Engine";
	import { ProductsService, type CreateProductDTO } from "$lib/services/ProductsService";
	import { userStore } from "$lib/stores/user.store";
	import { Validations } from "$lib/utils/Validations";
	import { onMount } from "svelte";
	import Swal from "sweetalert2";
	import * as yup from 'yup';
  

  let errors: any = null;
  let loading: boolean = false;

  let values: CreateProductDTO = {
    name: '',
    description: '',
    imageUrl: '',
    price: 0,
  };

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome do produto é obrigatório'),
    description: yup.string().required('Descrição do produto é obrigatória'),
    imageUrl: yup.string().required('URL da imagem do produto é obrigatória'),
    price: yup.number().required('Preço do produto é obrigatório'),
  });

  const handleCreateProduct = async () => {
    errors = await Validations.validateYupSchema(formSchema, values);

    if(errors) {
      return;
    }

    loading = true;
    const response = await ProductsService.create(values, $userStore!.token);

    switch(response.status) {
      case 'SUCCESS':
        await Swal.fire({
          title: 'Produto cadastrado com sucesso!',
          icon: 'success',
          confirmButtonText: 'Ok',
        })
        Engine.navigateTo('/gerencial/produtos');

        break;
      case 'UNAUTHORIZED':
        await Swal.fire({
          title: 'Erro ao cadastro o produto, revise os campos e tente novamente.',
          icon: 'error',
          confirmButtonText: 'Ok',
        })
        break;
      default:
        alert('Erro ao cadastrar produto. Tente novamente mais tarde.');
        break;
    }
  }

  onMount(async () => {
    // if(!User.validateOwnerPermissions($userStore ?? null)) Engine.navigateTo('/');‚
  })

</script>
<BodyMargin>

  <section class="vh-70 gradient-custom">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card  text-white">
            <div class="card-body p-5">
              <h2 class="mb-5 text-black">Cadastrar novo produto</h2>

              <InputComponent 
                id="name"
                label="Nome do produto"
                placeholder="Nome do produto"
                bind:value={values.name}
                containerClasses="text-black"
                required
                error={errors ? errors.name : ''}
              />

              <br />

              <div class="d-block">
                <label for="description" class="text-black">
                  Descrição
                  <span class="text-danger">*</span>
                </label>
                <textarea bind:value={values.description} name="description" id="description" class="form-control"></textarea>
                <span class="text-danger">{errors ? errors.description : ''}</span>
              </div>

              <br />

              <InputComponent 
                id="imageUrl"
                label="URL da imagem do produto"
                placeholder="URL da imagem"
                bind:value={values.imageUrl}
                containerClasses="text-black"
                required
                error={errors ? errors.imageUrl : ''}
              />

              <br />

              <InputComponent 
                id="price"
                label="Preço do produto (R$)"
                placeholder="Preço do produto (R$)"
                bind:value={values.price}
                containerClasses="text-black"
                required
                error={errors ? 'Digite um preço válido para o produto' : ''} 
              />

              <br />

              <button 
                on:click={handleCreateProduct}
                class="btn btn-primary w-100 {loading ? 'disabled' : ''}"
              >
                {loading ? 'Carregando...' : 'Cadastrar'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</BodyMargin>