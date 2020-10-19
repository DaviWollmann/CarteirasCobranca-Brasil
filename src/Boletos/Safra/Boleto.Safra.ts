import { ArquivoRemessaSafra, HeaderSafra, LinhaDetalheSafra, TrailerSafra } from './IBoleto.Safra'
import { IBoleto } from "../IBoleto";
import { RemessaSafra } from './Remessa.Safra';
import { Cedente, Sacado } from '../../Types/Cobranca';

export class BoletoSafra implements IBoleto {
    private RemessaSafra: RemessaSafra;
    ArquivoRemessa: ArquivoRemessaSafra;
    ArquivoRemessaStr: string;
    HeaderRemessaProtoType: HeaderSafra;
    LinhaDetalheRemessaProtoType: LinhaDetalheSafra;
    TrailerRemessaProtoType: TrailerSafra;

    constructor(private Sacado: Sacado, private Cedente: Cedente) {
        this.RemessaSafra = new RemessaSafra(this.Sacado, this.Cedente);
        this.ArquivoRemessa = this.RemessaSafra.ArquivoRemessa;
        this.ArquivoRemessaStr = this.RemessaSafra.ArquivoRemessaStr;
        this.HeaderRemessaProtoType = this.RemessaSafra.HeaderRemessaProtoType;
        this.LinhaDetalheRemessaProtoType = this.RemessaSafra.LinhaDetalheRemessaProtoType;
        this.TrailerRemessaProtoType = this.RemessaSafra.TrailerRemessaProtoType;
    }
}
