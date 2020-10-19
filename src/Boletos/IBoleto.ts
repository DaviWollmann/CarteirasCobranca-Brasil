import { RemessaType, HeaderType, LinhaDetalhe, TrailerType } from '../Types/Types'

export interface RegistroCell {
    mascara: string,
    posicao: number,
    tamanho: number,
    valor: string,
    preenchimento?: {
        posicao: 'esquerda' | 'direita',
        caractere: string
    }
}

export interface IBoleto {
    ArquivoRemessa: typeof RemessaType;
    ArquivoRemessaStr: string;
    HeaderRemessaProtoType: typeof HeaderType;
    LinhaDetalheRemessaProtoType: typeof LinhaDetalhe;
    TrailerRemessaProtoType: typeof TrailerType;
}
