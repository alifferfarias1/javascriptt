const { exec } = require('child_process');

function desligarPC() {
    // Comando para desligar o sistema operacional
    let comando = process.platform == 'win32' ? 'shutdown /s /t 0' : 'shutdown -h now';

    exec(comando, (erro, stdout, stderr) => {
        if (erro) {
            console.error(`Erro ao desligar o sistema: ${erro.message}`);
            return;
        }
        console.log('O sistema foi desligado com sucesso!');
    });
}

// Chama a função para desligar o PC
desligarPC();