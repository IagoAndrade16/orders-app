<script lang="ts">
	import BodyMargin from "$lib/components/BodyMargin.svelte";
	import AddShippingButton from "$lib/components/buttons/AddShippingButton.svelte";
	import ShippingTable from "$lib/components/tables/ShippingTable.svelte";
    import { ShippingService } from "../../../lib/services/ShippingService";
	import { ToastService } from "$lib/services/ToastService";
	import { onMount } from "svelte";
	import type { Shipping } from "$lib/entities/Shipping";
	import { userStore } from "$lib/stores/user.store";

    
    let isEditing: boolean = false;
    let idToEditOrDelete: string;
    let shippings: Shipping[] = [];
    let listOfButtonsIds: string[] = [];
    const values = {
        city: '',
        value: 0,
    }

    const handleRegisterShipping = async () => {
        const token = $userStore?.token
        const res = await ShippingService.post({
            city: values.city,
            value: values.value,
            token: token!,
        })

        if (res.status === 'SUCCESS') {
            ToastService.show({
                message: 'Frete cadastrado com sucesso!',
                type: 'success',
                duration: 500,
            });
            resetInputs();
        } else {
            ToastService.show({
                message: 'Houve um erro ao cadastro o frete, tente mais tarde.',
                type: 'error',
                duration: 500,
            });
            resetInputs();
        }
        getAllShippings();
    }

    const handleUpdateShipping = async () => {
        const token = $userStore?.token
        const res = await ShippingService.update({
            id: idToEditOrDelete,
            city: values.city,
            value: values.value,
            token: token!
        });

        if (res.status === 'SUCCESS') {
            ToastService.show({
                message: 'Frete atualizado com sucesso!',
                type: 'success',
                duration: 500,
            });
            resetInputs();
        } else {
            ToastService.show({
                message: 'Houve um erro ao atualizar o frete, tente mais tarde.',
                type: 'error',
                duration: 500,
            });
            resetInputs();
        }
        getAllShippings();
        isEditing = false;
    }

    const handleEditOrRegisterShipping = () => {
        if (isEditing) {
            handleUpdateShipping();
            return;
        }
        handleRegisterShipping();
    }

    const handleDeleteShipping = async (event: Event) => {
        handleClickToGetId(event); 

        const token = $userStore?.token
        const res = await ShippingService.delete({
            token: token!,
            id: idToEditOrDelete,
        })

        if (res.status === 'SUCCESS') {
            ToastService.show({
                message: 'Frete deletado com sucesso!',
                type: 'success',
                duration: 500,
            });
        } else {
            ToastService.show({
                message: 'Houve um erro ao deletar o frete, tente mais tarde.',
                type: 'error',
                duration: 500,
            });
        }
        getAllShippings();
    }

    const fillInputsToUpdateShipping = (event: Event) => {
        handleClickToGetId(event);
        const shippingToEdit = shippings.find(shipping => shipping.id === idToEditOrDelete);
        values.city = shippingToEdit!.city;
        values.value = shippingToEdit!.value;
        isEditing = true;
    }

    const getAllShippings = async () => {
        const res = await ShippingService.getAll();  
        shippings = res.data.result;     
        shippings.forEach(shipping => {
            listOfButtonsIds.push(shipping.id);
        }) 
    }

    const resetInputs = () => {
        values.city = '';
        values.value = 0;
    }

    const handleClickToGetId = (event: Event) => {
        const target = event.target as HTMLButtonElement;
        const buttonId = target.id;
        if (listOfButtonsIds.includes(buttonId)) {
            idToEditOrDelete = buttonId;
        }          
    }

    onMount(() => {
        getAllShippings();
    })

</script>


<BodyMargin>
    <div>
        <h1>Cadastrar Fretes</h1>
        <div class="row">
            <div class="mt-5 col-lg-4 col-md-12 col-sm-12">
                <label for=""><b>Adicionar Cidade</b></label>
                <input type="text" class="form-control " name="" bind:value={values.city}>
            </div>
            <div class="mt-5 col-lg-4 col-md-12 col-sm-12">
                <label for=""><b>Valor do Frete</b></label>
                <input type="number" class="form-control " name="" id="" bind:value={values.value}>
            </div>
            <div class="mt-5 col-lg-4">
                <AddShippingButton
                    onClick={handleEditOrRegisterShipping}
                    bind:isEditing={isEditing}
                />
            </div>   
        </div>
        <div class="row">        
            <ShippingTable
                bind:shippings={shippings}
                editFunction={fillInputsToUpdateShipping}
                deleteFunction={handleDeleteShipping}
            />
        </div>
    </div>
</BodyMargin>