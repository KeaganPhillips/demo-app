import { Button, Modal } from 'components';


const Footer = <div class="flex justify-center p-5 " x-data="{isLoading: false}"  >
                <Button class="mr-2" id="btn_logout" variant='primary' x-on:click="isLoading=true" x-bind:disabled="isLoading" hx-post="/logout">
                    Log Out
                </Button>
                <Button class="ml-2" id="btn_cancel_logout" variant='ghost' x-on:click="logoutModalOpen=false" x-bind:disabled="isLoading" >
                    Cancel
                </Button>
            </div>



export default () => {    
    const id = 'logout-modal';

    return (
        <Modal id={id} showModalVariableName="logoutModalOpen" title="Log Out"
            footer={Footer}
        >
            <div class="text-center">
                <p class="text-lg">Are you sure you want to log out?</p>
            </div>
        </Modal>
    );
}

