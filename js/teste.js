document.getElementById('btnenviar').addEventListener('click', function (e) {
    e.preventDefault();
    let formValido = true;

    if (!validarNome()) {
        formValido = false;
    }

    if (!validarCPF()) {
        formValido = false;
    }

    if (!validarEndereco()) {
        formValido = false;
    }

    if (!validarDataInscricao()) {
        formValido = false;
    }

    if (!validarCelular()) {
        formValido = false;
    }

    if (!validarEmail()) {
        formValido = false;
    }

    if (!validarDataNascimento()) {
        formValido = false;
    }

    if (!validarObjetivo()) {
        formValido = false;
    }

    if (!validarPlano()) {
        formValido = false;
    }

    if (!validarSexo()) {
        formValido = false;
    }

    if (formValido) {
        alert('Formulário enviado com sucesso!');
    }
});

document.getElementById('inome').addEventListener('input', validarNome);
document.getElementById('icpf').addEventListener('input', validarCPF);
document.getElementById('icpf').addEventListener('input', formatarCPF);
document.getElementById('icelular').addEventListener('input', validarCelular);
document.getElementById('icelular').addEventListener('input', formatarCelular);
document.getElementById('iendereco').addEventListener('input', validarEndereco);
document.getElementById('dataInscricao').addEventListener('input', validarDataInscricao);
document.getElementById('iemail').addEventListener('input', validarEmail);
document.getElementById('dataNascimento').addEventListener('input', validarDataNascimento);
document.getElementById('dataNascimento').addEventListener('input', formatarDataNascimento);
document.getElementsByName('objetivo')[0].addEventListener('input', validarObjetivo);
let planos = document.getElementsByName('plano');
for (let i = 0; i < planos.length; i++) {
    planos[i].addEventListener('change', validarPlano);
}

let sexos = document.getElementsByName('sexo');
for (let i = 0; i < sexos.length; i++) {
    sexos[i].addEventListener('change', validarSexo);
}


function validarNome() {
    let inome = document.getElementById('inome');
    let nome = inome.value.trim();
    let mensagemErro = document.getElementById('pnome');
    mensagemErro.textContent = "";

    let temNumero = false;

    for (let i = 0; i < nome.length; i++) {
        if (nome[i] >= '0' && nome[i] <= '9') {
            temNumero = true;
            break;
        }
    }

    if (nome === '' || temNumero || nome.indexOf(' ') === -1) {
        if (temNumero) {
            mensagemErro.textContent = 'Nome inválido (não pode conter números)';
        } else if (nome.indexOf(' ') === -1) {
            mensagemErro.textContent = 'Por favor, insira o nome completo (com sobrenome).';
        } else {
            mensagemErro.textContent = 'O nome é obrigatório.';
        }
        mensagemErro.style.color = 'red';
        inome.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    inome.style.borderColor = 'green';
    return true;
}

function validarCPF() {
    let icpf = document.getElementById('icpf');
    let cpf = "";
    let mensagemErro = document.getElementById('pcpf');
    mensagemErro.textContent = "";

    for (let i = 0; i < icpf.value.length; i++) {
        if (icpf.value[i] >= '0' && icpf.value[i] <= '9') {
            cpf += icpf.value[i];
        }
    }

    if (cpf.length !== 11) {
        mensagemErro.textContent = 'CPF inválido.';
        mensagemErro.style.color = 'red';
        icpf.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    icpf.style.borderColor = 'green';
    return true;
}

function validarEndereco() {
    let endereco = document.getElementById('iendereco').value;
    let mensagemErro = document.getElementById('pendereco');
    mensagemErro.textContent = "";
    let iendereco = document.getElementById('iendereco');

    if (endereco === '') {
        mensagemErro.textContent = 'Endereço é obrigatório.';
        mensagemErro.style.color = 'red';
        iendereco.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    iendereco.style.borderColor = 'green';
    return true;
}

function validarDataInscricao() {
    let dataInscricao = document.getElementById('dataInscricao').value;
    let mensagemErro = document.getElementById('pdataInscricao');
    mensagemErro.textContent = "";
    let idataInscricao = document.getElementById('dataInscricao');

    if (dataInscricao === '') {
        mensagemErro.textContent = 'Data de inscrição é obrigatória.';
        mensagemErro.style.color = 'red';
        idataInscricao.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    idataInscricao.style.borderColor = 'green';
    return true;
}

function validarCelular() {
    let icelular = document.getElementById('icelular');
    let celular = "";
    let mensagemErro = document.getElementById('pcelular');
    mensagemErro.textContent = "";

    for (let i = 0; i < icelular.value.length; i++) {
        if (icelular.value[i] >= '0' && icelular.value[i] <= '9') {
            celular += icelular.value[i];
        }
    }

    if (celular === '') {
        mensagemErro.textContent = 'O celular é obrigatório.';
        mensagemErro.style.color = 'red';
        icelular.style.borderColor = 'red';
        return false;
    }


    if (celular.length < 11 || celular.length > 11) {
        mensagemErro.textContent = 'Celular inválido.';
        mensagemErro.style.color = 'red';
        icelular.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    icelular.style.borderColor = 'green';
    return true;
}

function validarEmail() {
    let email = document.getElementById('iemail').value;
    let mensagemErro = document.getElementById('pemail');
    mensagemErro.textContent = "";

    if (email === '') {
        mensagemErro.textContent = 'Email é obrigatório.';
        mensagemErro.style.color = 'red';
        document.getElementById('iemail').style.borderColor = 'red';
        return false;
    }

    if (!email.includes('@') || !email.includes('.')) {
        mensagemErro.textContent = 'Por favor, insira um email válido.';
        mensagemErro.style.color = 'red';
        document.getElementById('iemail').style.borderColor = 'red';
        return false;
    }

    let arrobaPos = email.indexOf('@');
    let pontoPos = email.lastIndexOf('.');

    if (pontoPos < arrobaPos + 2 || pontoPos === email.length - 1) {
        mensagemErro.textContent = 'Por favor, insira um email válido.';
        mensagemErro.style.color = 'red';
        document.getElementById('iemail').style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    document.getElementById('iemail').style.borderColor = 'green';
    return true;
}

function validarDataNascimento() {
    let dataNascimento = document.getElementById('dataNascimento').value;
    let mensagemErro = document.getElementById('pdataNascimento');
    mensagemErro.textContent = "";
    let idataNascimento = document.getElementById('dataNascimento');

    if (dataNascimento === '') {
        mensagemErro.textContent = 'Data de nascimento é obrigatória.';
        mensagemErro.style.color = 'red';
        idataNascimento.style.borderColor = 'red';
        return false;
    }

    let anoNascimento = parseInt(dataNascimento.substring(6, 10));
    let anoAtual = new Date().getFullYear();
    let idade = anoAtual - anoNascimento;

    if (idade < 12 || idade > 80) {
        mensagemErro.textContent = "A idade deve ser entre 12 e 80 anos (2012 à 1944).";
        mensagemErro.style.color = 'red';
        idataNascimento.style.borderColor = 'red';
        return false;
    }

    if (dataNascimento.length !== 10) {
        mensagemErro.textContent = 'Data inválida.';
        mensagemErro.style.color = 'red';
        idataNascimento.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    idataNascimento.style.borderColor = 'green';
    return true;
}

function validarObjetivo() {
    let objetivo = document.getElementsByName('objetivo')[0].value;
    let mensagemErro = document.getElementById('pobjetivo');
    mensagemErro.textContent = "";
    let iobjetivo = document.getElementsByName('objetivo')[0];

    if (objetivo === '') {
        mensagemErro.textContent = 'Objetivo é obrigatório.';
        mensagemErro.style.color = 'red';
        iobjetivo.style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Campo completo!';
    mensagemErro.style.color = 'green';
    iobjetivo.style.borderColor = 'green';
    return true;
}

function validarPlano() {
    let planos = document.getElementsByName('plano');
    let planoSelecionado = false;
    let mensagemErro = document.getElementById('pplano');
    mensagemErro.textContent = "";

    for (let i = 0; i < planos.length; i++) {
        if (planos[i].checked) {
            planoSelecionado = true;
            break;
        }
    }

    if (!planoSelecionado) {
        mensagemErro.textContent = 'Por favor, selecione uma opção.';
        mensagemErro.style.color = 'red';
        document.getElementById('pplano').style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = 'Opção selecionada!';
    mensagemErro.style.color = 'green';
    document.getElementById('pplano').style.borderColor = 'green';
    return true;
}

function validarSexo() {
    let sexos = document.getElementsByName("sexo");
    let sexoSelecionado = false;
    let mensagemErro = document.getElementById("mensagemErroSexo");
    mensagemErro.textContent = "";

    for (let i = 0; i < sexos.length; i++) {
        if (sexos[i].checked) {
            sexoSelecionado = true;
            break;
        }
    }

    if (!sexoSelecionado) {
        mensagemErro.textContent = "Por favor, selecione uma opção.";
        mensagemErro.style.color = "red";
        document.getElementById('mensagemErroSexo').style.borderColor = 'red';
        return false;
    }

    mensagemErro.textContent = "Opção selecionada!";
    mensagemErro.style.color = "green";
    document.getElementById('mensagemErroSexo').style.borderColor = 'green';
    return true;
}

function formatarCPF() {
    let icpf = document.getElementById('icpf');
    let cpf = "";
    for (let i = 0; i < icpf.value.length; i++) {
        if (icpf.value[i] >= '0' && icpf.value[i] <= '9') {
            cpf += icpf.value[i];
        }
    }

    let cpfFormatado = '';
    for (let i = 0; i < cpf.length; i++) {
        if (i === 3 || i === 6) {
            cpfFormatado += '.';
        } else if (i === 9) {
            cpfFormatado += '-';
        }
        cpfFormatado += cpf[i];
    }
    icpf.value = cpfFormatado;
}

function formatarCelular() {
    let icelular = document.getElementById('icelular');
    let celular = "";
    for (let i = 0; i < icelular.value.length; i++) {
        if (icelular.value[i] >= '0' && icelular.value[i] <= '9') {
            celular += icelular.value[i];
        }
    }

    let celularFormatado = '';
    for (let i = 0; i < celular.length; i++) {
        if (i === 0) {
            celularFormatado += '(';
        }
        if (i === 2) {
            celularFormatado += ') ';
        }
        if (i === 7) {
            celularFormatado += '-';
        }
        celularFormatado += celular[i];
    }
    icelular.value = celularFormatado;
}

function formatarDataNascimento() {
    let dataNascimento = document.getElementById('dataNascimento');
    let data = "";

    for (let i = 0; i < dataNascimento.value.length; i++) {
        if (dataNascimento.value[i] >= '0' && dataNascimento.value[i] <= '9') {
            data += dataNascimento.value[i];
        }
    }

    let dia = data.substring(0, 2);
    let mes = data.substring(2, 4);

    if (parseInt(dia) > 31 || parseInt(dia) < 0) {
        dia = "31";
    }

    if (parseInt(mes) > 12 || parseInt(mes) < 0) {
        mes = "12";
    }

    let dataFormatada = '';

    for (let i = 0; i < data.length; i++) {
        if (i === 2 || i === 4) {
            dataFormatada += '/';
        }

        dataFormatada += data[i];
    }

    let diaa = data.substring(0, 2);
    let mess = data.substring(2, 4);

    if (parseInt(diaa) > 31 || parseInt(diaa) < 0) {
        dataFormatada = "31" + dataFormatada.substring(2);
    }

    if (parseInt(mess) > 12 || parseInt(mess) < 0) {
        dataFormatada = dataFormatada.substring(0, 3) + "12" + dataFormatada.substring(5);
    }

    dataNascimento.value = dataFormatada;
}