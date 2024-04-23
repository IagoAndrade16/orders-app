<script lang="ts">
	import CreateUserButton from "$lib/components/buttons/CreateUserButton.svelte";
	import { UsersService } from "$lib/components/services/UsersService";
	import { Engine } from "$lib/core/Engine";
	import type { JsObject } from "$lib/core/types/JsObject";


  let values: JsObject = {}
  let divErrorName: boolean = false;
  let divErrorEmail: boolean = false;
  let divErrorPassword: boolean = false;
  let divErrorPasswordLength: boolean = false;
  let errorsForm: number = 0;
  let loadingText: string;
  let disabled: boolean = false;
  let spinner: boolean = false;
  let errorToCreateUser: boolean = false;

  const verifyInputName = (name: string) => {
    if (!name) {
      divErrorName = true;
      errorsForm += 1;
      return;
    }
    divErrorName = false;
  }

  const verifyInputEmail = (email: string) => {
    if (!email) {
      divErrorEmail = true;
      errorsForm += 1;
      return;
    }
    divErrorEmail = false;
  }

  const verifyInputPassword = (password: string) => {
    if (!password) {
      divErrorPassword = true;
      errorsForm += 1;
      return;
    }
    if (password.length < 8) {
      divErrorPasswordLength = true;
      divErrorPassword = false;
      errorsForm += 1;
      return;
    }
    divErrorPassword = false;
    divErrorPasswordLength = false;
  }

  const handleCreateUser = async (event: any) => {
    event.preventDefault(); 
    errorsForm = 0;

    const { email } = values;
    const { name } = values;
    const { password } = values;

    verifyInputName(name);
    verifyInputEmail(email);
    verifyInputPassword(password);

    if (errorsForm > 0) return;

    loadingText = 'Criando';
    disabled = true;
    spinner = true;

    const response = await UsersService.post({
      name,
      email,
      password,
    });

    if (response.status === 'SUCCESS') {
      Engine.navigateTo('/');
    }

    if (response.status !== 'SUCCESS') {
      loadingText = '';
      disabled = false;
      spinner = false;
      errorToCreateUser = true;
    }

  }

</script>

<section class="vh-70 gradient-custom">
  <div class="container h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-12 col-md-8 col-lg-6 col-xl-5">
        <div class="card bg-dark text-white">
          <div class="card-body p-5 text-center">

            <div class="mb-md-5 mt-md-4 pb-5">
              <h2 class="mb-5">Criar conta</h2>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input bind:value={values.name} type="text" id="name" placeholder="Nome completo" class="form-control" />
                {#if divErrorName}
                  <div class="text-danger">Coloque um nome válido!</div>
                {/if}  
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input bind:value={values.email} type="email" id="email" placeholder="Email" class="form-control" />
                {#if divErrorEmail}
                  <div class="text-danger">Coloque um email válido!</div>
                {/if}  
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-3">
                <input bind:value={values.password} type="password" id="password" placeholder="Senha" class="form-control" />
                {#if divErrorPassword}                
                  <div class="text-danger">Coloque uma senha válida!</div>     
                {/if}  
                {#if divErrorPasswordLength}
                  <div class="text-danger">A senha deve ter no mínimo 8 caracteres!</div>
                {/if}  
               
              </div>

              {#if errorToCreateUser}
                <div class="mb-2 text-danger">
                  Algo deu errado, tente novamente!
                </div>
              {/if}
              

              <CreateUserButton
              loadingText={loadingText}
              disabled={disabled}
              onClick={handleCreateUser}
              spinner={spinner}
              />
            </div> 

            <div>
              <p class="mb-0">Já tem uma conta? <a href="/login" class="text-white-50 text-decoration-none">Entrar</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>