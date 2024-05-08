<script lang="ts">
	import type { JsObject } from "$lib/core/types/JsObject";
	import { Engine } from "$lib/core/Engine";
  import CreateUserButton from "$lib/components/buttons/CreateUserButton.svelte";
	import { UsersService } from "$lib/services/UsersService";
	import { userStore } from "$lib/stores/user.store";

  let values: JsObject = {}
  let spinner: boolean = false;
  let disabled: boolean = false;
  let loadingText: string;
  let errorToAuthUser: boolean = false;
  let errorsForm: number = 0;
  let divErrorEmail: boolean = false;
  let divErrorPassword: boolean = false;

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
    divErrorPassword = false;
  }


  const handleAuthUser = async () => {
    errorsForm = 0;
    errorToAuthUser = false;
    
    const { email } = values;
    const { password } = values;

    verifyInputEmail(email);
    verifyInputPassword(password);

    if (errorsForm > 0) return;

    spinner = true;
    loadingText = 'Entrando';
    disabled = true;

    const response = await UsersService.authUser({
      email,
      password
    });

    if (response.status === 'SUCCESS') {
      $userStore = response.data ?? null;
      Engine.navigateTo('/');
    }

    if (response.status !== 'SUCCESS') {
      spinner = false;
      disabled = false;
      loadingText = '';
      errorToAuthUser = true;
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
              <h2 class="mb-2">Entrar</h2>
              <p class="text-white-50 mb-5">Insira seu email e senha para continuar</p>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input bind:value={values.email} type="email" id="typeEmailX" placeholder="Email" class="form-control" />
                {#if divErrorEmail}
                  <div class="text-danger">Coloque um email válido!</div>
                {/if}
              </div>

              <div data-mdb-input-init class="form-outline form-white mb-4">
                <input bind:value={values.password} type="password" id="typePasswordX" placeholder="Senha" class="form-control" />
                {#if divErrorPassword}
                  <div class="text-danger">Coloque uma senha válida!</div>   
                {/if}  
              </div>

              <!-- <button data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light px-5" type="submit">Login</button> -->
              {#if errorToAuthUser}
                <div class="mb-1 text-danger">
                  Emai ou senha incorretos, tente novamente!
                </div>
              {/if}

              <CreateUserButton
                textButton='Login'
                disabled={disabled}
                onClick={handleAuthUser}
                spinner={spinner}
                loadingText={loadingText}
              />

              <div>
                <p class="mt-3">Não tem uma conta? <a href="/criar-conta" class="text-white-50 text-decoration-none">Crie uma</a>
                </p>
              </div>
            </div>
            
            <br>
            <br>

          </div>
        </div>
      </div>
    </div>
  </div>
</section>