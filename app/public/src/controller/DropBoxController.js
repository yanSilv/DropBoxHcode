class DropBoxController {
    constructor() {
        this.btnSendFileEl = document.querySelector('#btn-send-file');
        
        //Evento para abrir a janela de importação de arquivos.
        this.inputFilesEl = document.querySelector('#files');

        this.snackModalEl = document.querySelector('#react-snackbar-root');
        
        this.initEvents();
    }

    initEvents() {
        this.btnSendFileEl.addEventListener('click', event => {
            this.inputFilesEl.click();
        });

        this.inputFilesEl.addEventListener('change', event => {
            console.log(event.target.files);
            this.snackModalEl.style.display = 'block';
        });
    }
}