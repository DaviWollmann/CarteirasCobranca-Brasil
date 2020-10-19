import { BoletoSafra } from './src/Boletos/Safra/Boleto.Safra';
import { RemessaSafra } from './src/Boletos/Safra/Remessa.Safra'
import { Cedente, Sacado } from './src/Types/Cobranca';

let Sacado: Sacado = {
    tipo: "FISICO",
    CPFCNPJ: "00000000000",
    agencia: "12345",
    conta: "123456789",
    nomeFantasia: "Nome Fantasia da Empresa",
    razaoSocial: "Razao Social da Empresa",
    nossoNumero: "12345678912",
};

let Cedente: Cedente;

let Safra = new BoletoSafra(Sacado, Cedente);
console.log(Safra.ArquivoRemessaStr);
