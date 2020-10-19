import { RegistroCell } from '../IBoleto'

export interface HeaderSafra {
    TipoRegistro: RegistroCell,
    CodArquivo: RegistroCell,
    IdentArquivo: RegistroCell,
    CodServico: RegistroCell,
    IdentServico: RegistroCell,
    Brancos1: RegistroCell,
    CodEmpresa: RegistroCell,
    Brancos2: RegistroCell,
    NomeEmpresa: RegistroCell,
    CodBanco: RegistroCell,
    NomeBanco: RegistroCell,
    Brancos3: RegistroCell,
    DataGravacao: RegistroCell,
    Brancos4: RegistroCell,
    NumeroArquivo: RegistroCell,
    NumeroRegistro: RegistroCell,
}

export interface TrailerSafra {
    TipoRegistro: RegistroCell,
    Brancos1: RegistroCell,
    Quantidade: RegistroCell,
    ValorTotal: RegistroCell,
    NumeroArquivo: RegistroCell,
    NumeroSequencial: RegistroCell,
}

export interface LinhaDetalheSafra {
    TipoRegistro: RegistroCell,
    CodInscricaoEmpresa: RegistroCell,
    NumeroInscricaoEmpresa: RegistroCell,
    CodEmpresa: RegistroCell,
    Brancos1: RegistroCell,
    UsoEmpresa: RegistroCell,
    NossoNumero: RegistroCell,
    Brancos2: RegistroCell,
    CodIOF: RegistroCell,
    CodMoeda: RegistroCell,
    Brancos3: RegistroCell,
    Instrucao3: RegistroCell,
    CodCarteira: RegistroCell,
    CodOcorrencia: RegistroCell,
    SeuNumero: RegistroCell,
    DataVencimento: RegistroCell,
    ValorTitulo: RegistroCell,
    BancoDesposito: RegistroCell,
    AgenciaDepositaria: RegistroCell,
    Especie: RegistroCell,
    CodAceite: RegistroCell,
    Emissao: RegistroCell,
    Instrucao1: RegistroCell,
    Instrucao2: RegistroCell,
    ValorJurosMora: RegistroCell,
    DataLimiteDesconto: RegistroCell,
    ValorDesconto: RegistroCell,
    ValorIOF: RegistroCell,
    ValorAbatimento: RegistroCell,
    CodInscricaoPagador: RegistroCell,
    NumeroInscricaoPagador: RegistroCell,
    NomePagador: RegistroCell,
    EnderecoPagador: RegistroCell,
    BairroPagador: RegistroCell,
    Brancos4: RegistroCell,
    CEPPagador: RegistroCell,
    CidadePagador: RegistroCell,
    EstadoPagador: RegistroCell,
    NomeAvalista: RegistroCell,
    Brancos5: RegistroCell,
    BancoEmitente: RegistroCell,
    NumeroArquivo: RegistroCell,
    NumeroSequencial: RegistroCell,
}

export interface DetalhamentoSafra {
    Detalhes: LinhaDetalheSafra[];
}

export interface ArquivoRemessaSafra {
    Header: HeaderSafra,
    Detalhamento: DetalhamentoSafra,
    Trailer: TrailerSafra,
}
