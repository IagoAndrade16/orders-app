<script lang="ts">

	import InputComponent from "$lib/components/InputComponent.svelte";
	import OrderResumeComponent from "$lib/components/OrderResumeComponent.svelte";
	import { Engine } from "$lib/core/Engine";
	import type { OrderPaymentMethod } from "$lib/entities/Order";
	import { OrdersService } from "$lib/services/OrdersService";
	import { cartStore } from "$lib/stores/cart.store";
	import { Masks } from "$lib/utils/Masks";
	import { Validations } from "$lib/utils/Validations";
	import { onMount } from "svelte";
	import Swal from 'sweetalert2';
	import * as yup from 'yup';

  let errors: any = null;
  let submitFormButtonDisabled = false;
  let loadingText: string = 'Finalizando pedido...';

  type FinishOrderForm = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    city: string;
    zipCode: string;
    neighborhood: string;
    street: string;
    number: string;
    complement: string;
    paymentMethod: OrderPaymentMethod;
  }

  const values: FinishOrderForm = {
    firstName: '',
    lastName: '',
    phone: '',
    city: '',
    zipCode: '',
    neighborhood: '',
    street: '',
    number: '',
    complement: '',
    email: '',
    paymentMethod: 'pix',
  }

  const formSchema = yup.object().shape({
    firstName: yup.string().min(3, 'O campo nome deve conter no mínimo 3 caracteres').required('O campo nome é obrigatório'),
    lastName: yup.string().min(3, 'O campo sobrenome deve conter no mínimo 3 caracteres').required('O campo sobrenome é obrigatório'),
    phone: yup.string().required().test('phone', 'Telefone inválido', (value) => Validations.isBrazilianPhone(value)),
    city: yup.string().min(3, 'O campo cidade deve conter no mínimo 3 caracteres').required('O campo cidade é obrigatório'),
    zipCode: yup.string().required().test('zipCode', 'CEP inválido', (value) => Validations.isValidZipCode(value)),
    neighborhood: yup.string().min(3, 'O campo bairro deve conter no mínimo 3 caracteres').required('O campo bairro é obrigatório'),
    street: yup.string().min(3, 'O campo rua deve conter no mínimo 3 caracteres').required('O campo rua é obrigatório'),
    number: yup.string().min(1, 'O campo número deve conter no mínimo 1 caracter').required('O campo número é obrigatório'),
    email: yup.string().email('O e-mail digitado é inválido').nullable().default(null),
    complement: yup.string()
  });

  const handleCreateOrder = async () => {
    errors = null;
    errors = await Validations.validateYupSchema(formSchema, values);

    if(errors) return;
    
    submitFormButtonDisabled = true;
    const res = await OrdersService.create({
      city: values.city,
      complement: values.complement,
      firstName: values.firstName,
      lastName: values.lastName,
      neighborhood: values.neighborhood,
      number: values.number,
      phone: values.phone,
      street: values.street,
      email: values.email,
      zipCode: values.zipCode,
      products: $cartStore.map(product => ({ productId: product.id, quantityOfProduct: product.quantity })),
      paymentMethod: values.paymentMethod
    })

    if(res) {
      $cartStore = [];
      Engine.navigateTo(`/pedidos/finalizado?id=${res.orderId}`);
    } else {
      submitFormButtonDisabled = false;
      Swal.fire({
        title: "Ooops!",
        text: "Não foi possível completar seu pedido, tente novamente mais tarde.",
        icon: "error"
      }); 
    }
  }

  onMount(() => {
    window.scrollTo(0, 0);
  });

</script>
<div class="container mt-5">
  <div class="row">
    <div class="col-12">
      <h4 class="text-center text-lg-start">Endereço de entrega</h4>
    </div>
  </div>

  <div class="row mt-3 d-none d-lg-block">
    <div class="col-12">
      <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item active">Início</li>
          <li class="breadcrumb-item active" aria-current="page">Pedidos</li>
          <li class="breadcrumb-item" aria-current="page">Endereço de entrega</li>
        </ol>
      </nav>
    </div>
  </div>

  
  <div class="row mt-2 gap-2">
    <div class="col-12 col-lg-8 card shadow border-0 p-5">
      <form class="row needs-validation" novalidate>
        <InputComponent 
          id="first-name"
          label="Nome"
          bind:value={values.firstName}
          classes="{values.firstName.length > 3 ? 'is-valid' : ''}"
          placeholder="Digite seu nome"
          required
          containerClasses="col-md-4 mb-3"
          error={errors ? errors.firstName : ''}
        />

        <InputComponent
          id="last-name"
          label="Sobrenome"
          bind:value={values.lastName}
          classes="{values.lastName.length > 3 ? 'is-valid' : ''}"
          placeholder="Digite seu sobrenome"
          required
          containerClasses="col-md-4 mb-3"
          error={errors ? errors.lastName : ''}
        />

        <InputComponent 
          id="phone"
          label="Telefone"
          bind:value={values.phone}
          classes="{Validations.isBrazilianPhone(values.phone) ? 'is-valid' : ''}"
          placeholder="Ex: (00) 00000-0000"
          required
          containerClasses="col-md-4 mb-3"
          error={errors ? errors.phone : ''}
          onInput={(e) => e.target.value = Masks.braziliamPhoneNumber(e.target.value)}
        />

        <InputComponent 
          id="email"
          label="E-mail"
          smallText="(utilizado para acompanhamento do pedido)"
          bind:value={values.email}
          classes="{Validations.isValidEmail(values.email) ? 'is-valid' : ''}"
          placeholder="Digite seu e-mail"
          containerClasses="col-md-6 mb-3"
          error={errors ? errors.email : ''} />

        <InputComponent 
          id="city"
          label="Cidade"
          classes="{values.city.length > 3 ? 'is-valid' : ''}"
          bind:value={values.city}
          placeholder="Ex: Bananal"
          required
          containerClasses="col-md-6 mb-3"
          error={errors ? errors.city : ''}
        />

        <InputComponent 
          id="zip-code"
          label="CEP"
          bind:value={values.zipCode}
          classes="{values.zipCode.length === 9 ? 'is-valid' : ''}"
          placeholder="00000-000"
          required
          containerClasses="col-md-3 mb-3"
          error={errors ? errors.zipCode : ''}
          onInput={(e) => e.target.value = Masks.zipCode(e.target.value)}
        />

        <InputComponent 
          id="neighborhood"
          label="Bairro"
          bind:value={values.neighborhood}
          classes="{values.neighborhood.length > 3 ? 'is-valid' : ''}"
          placeholder="Ex: Retiro"
          required
          containerClasses="col-md-3 mb-3"
          error={errors ? errors.neighborhood : ''}
        />

        <InputComponent 
          id="street"
          label="Rua"
          bind:value={values.street}
          classes="{values.street.length > 3 ? 'is-valid' : ''}"
          placeholder="Ex: Rua 2"
          required
          containerClasses="col-md-3 mb-3"
          error={errors ? errors.street : ''}
        />

        <InputComponent 
          id="number"
          label="Número"
          bind:value={values.number}
          classes="{values.number.length > 1 ? 'is-valid' : ''}"
          placeholder="Ex: 3201"
          required
          containerClasses="col-md-3 mb-3"
          error={errors ? errors.number : ''}
        />

        <div class="col-12 col-md-4 my-2">
          <label for="payment-method" class="mb-2">Forma de pagamento:</label>
          <select bind:value={values.paymentMethod} name="payment-method" id="payment-method" class="form-control">
            <option value="credit-card">Cartão de crédito (pagamento na hora da entrega)</option>
            <option value="debit-card">Cartão de débito (pagamento na hora da entrega)</option>
            <option value="cash">Dinheiro (pagamento na hora da entrega)</option>
            <option selected value="pix">Pix</option>
          </select>
        </div>

        <InputComponent 
          id="complement"
          classes="col-md-6 mb-3"
          label="Complemento"
          bind:value={values.complement}
          placeholder="Ex: Rua sem saída"
        />
      </form>
    </div>

    <OrderResumeComponent 
      handleNextAction={handleCreateOrder} 
      bind:continueButtonDisabled={submitFormButtonDisabled}
      bind:continueButtonLoadingText={loadingText}
    />
  </div>
</div>