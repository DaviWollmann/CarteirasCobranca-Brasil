import { Boleto } from '../Boleto';
import { Cedente, Sacado } from '../../Types/Cobranca';
import {
    ArquivoRemessaSafra,
    HeaderSafra,
    DetalhamentoSafra,
    LinhaDetalheSafra,
    TrailerSafra,
} from './IBoleto.Safra'

export class RemessaSafra {

    _ArquivoRemessa = {
        Header: {} as HeaderSafra,
        Detalhamento:{} as DetalhamentoSafra,
        Trailer:{} as TrailerSafra
    } as ArquivoRemessaSafra;

    get ArquivoRemessa() { return this._ArquivoRemessa }
    
    get ArquivoRemessaStr() {
        return (
            this._ArquivoRemessa.Header.TipoRegistro.valor + this._ArquivoRemessa.Header.CodArquivo.valor 
            + this._ArquivoRemessa.Header.IdentArquivo.valor + this._ArquivoRemessa.Header.CodServico.valor
            + this._ArquivoRemessa.Header.IdentServico.valor + this._ArquivoRemessa.Header.Brancos1.valor
            + this._ArquivoRemessa.Header.CodEmpresa.valor + this._ArquivoRemessa.Header.Brancos2.valor
            + this._ArquivoRemessa.Header.NomeEmpresa.valor + this._ArquivoRemessa.Header.CodBanco.valor
            + this._ArquivoRemessa.Header.NomeBanco.valor + this._ArquivoRemessa.Header.Brancos3.valor
            + this._ArquivoRemessa.Header.DataGravacao.valor + this._ArquivoRemessa.Header.Brancos4.valor
            + this._ArquivoRemessa.Header.NumeroArquivo.valor + this._ArquivoRemessa.Header.NumeroRegistro.valor + '\n'
            + 'detalhamento' + '\n'
            + this._ArquivoRemessa.Trailer.TipoRegistro.valor + this._ArquivoRemessa.Trailer.Brancos1.valor
            + this._ArquivoRemessa.Trailer.Quantidade.valor + this._ArquivoRemessa.Trailer.ValorTotal.valor
            + this._ArquivoRemessa.Trailer.NumeroArquivo.valor + this._ArquivoRemessa.Trailer.NumeroSequencial.valor
        );
    }

    constructor(private Sacado: Sacado, private Cedente: Cedente) {
        this.gerarArquivoRemessa(this.Sacado, this.Cedente);
    }

    private gerarArquivoRemessa(Sacado: Sacado, Cedente: Cedente) {
        this.carregarHeaderArquivo(Sacado, Cedente);
        this.carregarTrailerArquivo();
    }

    get HeaderRemessaProtoType(): HeaderSafra {
        return {
            TipoRegistro:   { mascara: "9(01)",  posicao: 1,   tamanho: 1,   valor: "" },
            CodArquivo:     { mascara: "9(01)",  posicao: 2,   tamanho: 1,   valor: "" },
            IdentArquivo:   { mascara: "X(07)",  posicao: 3,   tamanho: 7,   valor: "" },
            CodServico:     { mascara: "9(02)",  posicao: 10,  tamanho: 2,   valor: "" },
            IdentServico:   { mascara: "X(08)",  posicao: 12,  tamanho: 8,   valor: "" },
            Brancos1:       { mascara: "X(07)",  posicao: 20,  tamanho: 7,   valor: "" },
            CodEmpresa:     { mascara: "9(14)",  posicao: 27,  tamanho: 14,  valor: "" },
            Brancos2:       { mascara: "X(06)",  posicao: 41,  tamanho: 6,   valor: "" },
            NomeEmpresa:    { mascara: "X(30)",  posicao: 47,  tamanho: 30,  valor: "" },
            CodBanco:       { mascara: "9(03)",  posicao: 77,  tamanho: 3,   valor: "" },
            NomeBanco:      { mascara: "X(11)",  posicao: 80,  tamanho: 11,  valor: "" },
            Brancos3:       { mascara: "X(04)",  posicao: 91,  tamanho: 4,   valor: "" },
            DataGravacao:   { mascara: "9(06)",  posicao: 95,  tamanho: 6,   valor: "" },
            Brancos4:       { mascara: "X(291)", posicao: 101, tamanho: 291, valor: "" },
            NumeroArquivo:  { mascara: "9(03)",  posicao: 392, tamanho: 3,   valor: "" },
            NumeroRegistro: { mascara: "9(06)",  posicao: 395, tamanho: 6,   valor: "" },
        }
    }

    get LinhaDetalheRemessaProtoType(): LinhaDetalheSafra {
        return {
            TipoRegistro:           { mascara: "9(01)",    posicao: 1,   tamanho: 1,  valor: "" },
            CodInscricaoEmpresa:    { mascara: "9(02)",    posicao: 2,   tamanho: 2,  valor: "" },
            NumeroInscricaoEmpresa: { mascara: "9(14)",    posicao: 4,   tamanho: 14, valor: "" },
            CodEmpresa:             { mascara: "9(14)",    posicao: 18,  tamanho: 14, valor: "" },
            Brancos1:               { mascara: "X(06)",    posicao: 32,  tamanho: 6,  valor: "" },
            UsoEmpresa:             { mascara: "X(25)",    posicao: 38,  tamanho: 25, valor: "" },
            NossoNumero:            { mascara: "9(09)",    posicao: 63,  tamanho: 9,  valor: "" },
            Brancos2:               { mascara: "X(30)",    posicao: 72,  tamanho: 30, valor: "" },
            CodIOF:                 { mascara: "9(01)",    posicao: 102, tamanho: 1,  valor: "" },
            CodMoeda:               { mascara: "9(02)",    posicao: 103, tamanho: 2,  valor: "" },
            Brancos3:               { mascara: "X(01)",    posicao: 105, tamanho: 1,  valor: "" },
            Instrucao3:             { mascara: "9(02)",    posicao: 106, tamanho: 2,  valor: "" },
            CodCarteira:            { mascara: "9(01)",    posicao: 108, tamanho: 1,  valor: "" },
            CodOcorrencia:          { mascara: "9(02)",    posicao: 109, tamanho: 2,  valor: "" },
            SeuNumero:              { mascara: "X(10)",    posicao: 111, tamanho: 10, valor: "" },
            DataVencimento:         { mascara: "9(06)",    posicao: 121, tamanho: 6,  valor: "" },
            ValorTitulo:            { mascara: "9(11)V99", posicao: 127, tamanho: 13, valor: "" },
            BancoDesposito:         { mascara: "9(03)",    posicao: 140, tamanho: 3,  valor: "" },
            AgenciaDepositaria:     { mascara: "9(05)",    posicao: 143, tamanho: 5,  valor: "" },
            Especie:                { mascara: "9(02)",    posicao: 148, tamanho: 2,  valor: "" },
            CodAceite:              { mascara: "X(01)",    posicao: 150, tamanho: 1,  valor: "" },
            Emissao:                { mascara: "9(06)",    posicao: 151, tamanho: 6,  valor: "" },
            Instrucao1:             { mascara: "9(02)",    posicao: 157, tamanho: 2,  valor: "" },
            Instrucao2:             { mascara: "9(02)",    posicao: 159, tamanho: 2,  valor: "" },
            ValorJurosMora:         { mascara: "9(11)V99", posicao: 161, tamanho: 13, valor: "" },
            DataLimiteDesconto:     { mascara: "9(06)",    posicao: 174, tamanho: 6,  valor: "" },
            ValorDesconto:          { mascara: "9(11)V99", posicao: 180, tamanho: 13, valor: "" },
            ValorIOF:               { mascara: "9(11)V99", posicao: 193, tamanho: 13, valor: "" },
            ValorAbatimento:        { mascara: "9(11)V99", posicao: 206, tamanho: 13, valor: "" },
            CodInscricaoPagador:    { mascara: "9(02)",    posicao: 219, tamanho: 2,  valor: "" },
            NumeroInscricaoPagador: { mascara: "9(14)",    posicao: 221, tamanho: 14, valor: "" },
            NomePagador:            { mascara: "X(40)",    posicao: 235, tamanho: 40, valor: "" },
            EnderecoPagador:        { mascara: "X(40)",    posicao: 275, tamanho: 40, valor: "" },
            BairroPagador:          { mascara: "X(10)",    posicao: 315, tamanho: 10, valor: "" },
            Brancos4:               { mascara: "X(02)",    posicao: 325, tamanho: 2,  valor: "" },
            CEPPagador:             { mascara: "9(08)",    posicao: 327, tamanho: 8,  valor: "" },
            CidadePagador:          { mascara: "X(15)",    posicao: 335, tamanho: 15, valor: "" },
            EstadoPagador:          { mascara: "X(02)",    posicao: 350, tamanho: 2,  valor: "" },
            NomeAvalista:           { mascara: "X(30)",    posicao: 352, tamanho: 30, valor: "" },
            Brancos5:               { mascara: "X(07)",    posicao: 382, tamanho: 7,  valor: "" },
            BancoEmitente:          { mascara: "9(03)",    posicao: 389, tamanho: 3,  valor: "" },
            NumeroArquivo:          { mascara: "9(03)",    posicao: 392, tamanho: 3,  valor: "" },
            NumeroSequencial:       { mascara: "9(06)",    posicao: 395, tamanho: 6,  valor: "" },
        }
    }

    get TrailerRemessaProtoType(): TrailerSafra {
        return {
            TipoRegistro:     { mascara: "9(01)",    posicao: 1,   tamanho: 1,   valor: "" },
            Brancos1:         { mascara: "X(367)",   posicao: 2,   tamanho: 367, valor: "" },
            Quantidade:       { mascara: "9(08)",    posicao: 369, tamanho: 8,   valor: "" },
            ValorTotal:       { mascara: "9(13)V99", posicao: 377, tamanho: 15,  valor: "" },
            NumeroArquivo:    { mascara: "9(3)",     posicao: 392, tamanho: 3,   valor: "" },
            NumeroSequencial: { mascara: "9(6)",     posicao: 395, tamanho: 6,   valor: "" },
        }
    }

    private carregarHeaderArquivo(Sacado: Sacado, Cedente: Cedente): void {
        let header = this.HeaderRemessaProtoType;
        header.Brancos1.valor = Boleto.formatarValorCelula(header.Brancos1, "");
        header.Brancos2.valor = Boleto.formatarValorCelula(header.Brancos2, "");
        header.Brancos3.valor = Boleto.formatarValorCelula(header.Brancos3, "");
        header.Brancos4.valor = Boleto.formatarValorCelula(header.Brancos4, "");
        header.TipoRegistro.valor = Boleto.formatarValorCelula(header.TipoRegistro, "0");
        header.CodArquivo.valor = Boleto.formatarValorCelula(header.CodArquivo, "1");
        header.IdentArquivo.valor = Boleto.formatarValorCelula(header.IdentArquivo, "REMESSA");
        header.CodServico.valor = Boleto.formatarValorCelula(header.CodServico, "01");
        header.IdentServico.valor = Boleto.formatarValorCelula(header.IdentServico, "Cobrança");
        header.CodEmpresa.valor = Boleto.formatarValorCelula(header.CodEmpresa, Sacado.agencia + Sacado.conta);
        header.NomeEmpresa.valor = Boleto.formatarValorCelula(header.NomeEmpresa, Sacado.razaoSocial);
        header.CodBanco.valor = Boleto.formatarValorCelula(header.CodBanco, "422");
        header.NomeBanco.valor = Boleto.formatarValorCelula(header.NomeBanco, "BANCO SAFRA");
        header.DataGravacao.valor = Boleto.formatarValorCelula(header.DataGravacao, "171020");
        header.NumeroArquivo.valor = Boleto.formatarValorCelula(header.NumeroArquivo, "001");
        header.NumeroRegistro.valor = Boleto.formatarValorCelula(header.NumeroRegistro, "00001");
        if (this.validarHeaderArquivo(header))
            this._ArquivoRemessa.Header = header;
    }

    private validarHeaderArquivo(header: HeaderSafra): boolean {
        return (
            Boleto.validarMascara(header.TipoRegistro)
            && Boleto.validarMascara(header.CodArquivo)
            && Boleto.validarMascara(header.IdentArquivo)
            && Boleto.validarMascara(header.CodServico)
            && Boleto.validarMascara(header.IdentServico)
            && Boleto.validarMascara(header.CodEmpresa)
            && Boleto.validarMascara(header.NomeEmpresa)
            && Boleto.validarMascara(header.CodBanco)
            && Boleto.validarMascara(header.NomeBanco)
            && Boleto.validarMascara(header.DataGravacao)
            && Boleto.validarMascara(header.NumeroArquivo)
            && Boleto.validarMascara(header.NumeroRegistro)
        );
    }

    private carregarLinhaDetalheArquivo(Sacado: Sacado, Cedente: Cedente): void {
        let linha = this.LinhaDetalheRemessaProtoType;
        linha.TipoRegistro.valor = Boleto.formatarValorCelula(linha.TipoRegistro, "1");
        linha.CodInscricaoEmpresa.valor = Boleto.formatarValorCelula(linha.CodInscricaoEmpresa, Sacado.tipo == 'FISICO'? "01" : "02");
        linha.NumeroInscricaoEmpresa.valor = Boleto.formatarValorCelula(linha.NumeroInscricaoEmpresa, Sacado.CPFCNPJ);
        linha.CodEmpresa.valor = Boleto.formatarValorCelula(linha.CodEmpresa, Sacado.agencia + Sacado.conta);
        linha.UsoEmpresa.valor = Boleto.formatarValorCelula(linha.UsoEmpresa, "");
        linha.NossoNumero.valor = Boleto.formatarValorCelula(linha.NossoNumero, Sacado.nossoNumero);
        linha.CodIOF.valor = Boleto.formatarValorCelula(linha.NossoNumero, "0");
        linha.CodMoeda.valor = Boleto.formatarValorCelula(linha.CodMoeda, "00");        


        linha.Brancos1.valor = Boleto.formatarValorCelula(linha.Brancos1, "");
        linha.Brancos2.valor = Boleto.formatarValorCelula(linha.Brancos2, "");
        linha.Brancos3.valor = Boleto.formatarValorCelula(linha.Brancos3, "");
        linha.Brancos4.valor = Boleto.formatarValorCelula(linha.Brancos4, "");
        linha.Brancos5.valor = Boleto.formatarValorCelula(linha.Brancos5, "");
    }

    private carregarTrailerArquivo(): void {
        let trailer = this.TrailerRemessaProtoType;
        trailer.TipoRegistro.valor = Boleto.formatarValorCelula(trailer.TipoRegistro, "9");
        trailer.Quantidade.valor = Boleto.formatarValorCelula(trailer.Quantidade, "00000012");
        trailer.ValorTotal.valor = Boleto.formatarValorCelula(trailer.ValorTotal, "00000012350199");
        trailer.NumeroArquivo.valor = Boleto.formatarValorCelula(trailer.NumeroArquivo, "001");
        trailer.NumeroSequencial.valor = Boleto.formatarValorCelula(trailer.NumeroSequencial, "000003");
        trailer.Brancos1.valor = Boleto.formatarValorCelula(trailer.Brancos1, "")
        if(this.validarTrailerArquivo(trailer))
            this._ArquivoRemessa.Trailer = trailer;
    }
    
    private validarTrailerArquivo(trailer: TrailerSafra): boolean {
        return (
            Boleto.validarMascara(trailer.TipoRegistro)
            && Boleto.validarMascara(trailer.Quantidade)
            && Boleto.validarMascara(trailer.ValorTotal)
            && Boleto.validarMascara(trailer.NumeroArquivo)
            && Boleto.validarMascara(trailer.NumeroSequencial)
            && Boleto.validarMascara(trailer.Brancos1)
        );
    }
}
