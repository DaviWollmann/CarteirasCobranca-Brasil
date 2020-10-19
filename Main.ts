import { BoletoSafra } from './src/Boletos/Safra/Boleto.Safra';
import { RemessaSafra } from './src/Boletos/Safra/Remessa.Safra'
import { Cedente, Sacado } from './src/Types/Cobranca';

let Sacado: Sacado = {
    tipo: "FISICO",
    CPFCNPJ: "09861654925",
    agencia: "12345",
    conta: "123456789",
    nomeFantasia: "Davi Josoe Wollmann Souza",
    razaoSocial: "Davi Josoe Wollmann Souza",
    nossoNumero: "12345678912",
};

let Cedente: Cedente;

let Safra = new BoletoSafra(Sacado, Cedente);
console.log(Safra.ArquivoRemessaStr);