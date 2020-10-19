if [ "$1" != "" ]
then
    mkdir ../Bancos/$1
    touch ../Bancos/$1/I$1.ts
    touch ../Bancos/$1/$1.ts

    echo "
    import { IBanco } from '../IBanco';
    import {
        ArquivoRemessa$1,
        Header$1,
        Detalhamento$1,
        LinhaDetalhe$1,
        Trailer$1,
    } from './I$1'

    class $1 implements IBanco{
        
        arquivoRemessa: ArquivoRemessa$1;

        getArquivoRemessa(): ArquivoRemessa$1 { }
        getArquivoRemessaString(): string { return '' }
        getHeaderProtoType(): Header$1 { return }
        getLinhaDetalheProtoType(): LinhaDetalhe$1 { }
        getTrailerProtoType(): Trailer$1 { return }
    }" >> ../Bancos/$1/$1.ts

    echo "
    export interface ArquivoRemessa$1 { }
    export interface Header$1 { }
    export interface Detalhamento$1 { }
    export interface LinhaDetalhe$1 { }
    export interface Trailer$1 { }
    " >> ../Bancos/$1/I$1.ts
else
    echo 'Especifique um nome para o banco!'
fi