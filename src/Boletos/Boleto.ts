import { RegistroCell } from "./IBoleto";

export abstract class Boleto {

    static formatarValorCelula(celula: RegistroCell, valor: string): string {
        let charARepetir = celula.mascara[0] == '9' ? '0' : ' ';
        if (valor.length > celula.tamanho)
            return valor.slice(0, celula.tamanho)
        else
            if (valor.length < celula.tamanho)
                if (celula.preenchimento) {
                    if (!celula.preenchimento.caractere) celula.preenchimento.caractere = charARepetir;
                    return celula.preenchimento.posicao == 'direita' ?
                        valor + celula.preenchimento.caractere.repeat(celula.tamanho - valor.length)
                        : celula.preenchimento.caractere.repeat(celula.tamanho - valor.length) + valor;
                }
                else return charARepetir.repeat(celula.tamanho - valor.length) + valor
        return valor;
    }

    static validarMascara(celula: RegistroCell): boolean {

        if(celula.mascara) {
            let tipo = celula.mascara[0];
            let qtdDigitos: number;
            let precisaoDecimal: number;
            
            try { qtdDigitos = Number(/\((\d*)\)/.exec(celula.mascara)[1]) }
            catch(e) {  throw new ReferenceError(`Mascara: ${celula.mascara} da celula: ${JSON.stringify(celula)}. Não contém a quantidade de digitos informados para o campo!` + e) }
            
            try { precisaoDecimal = celula.mascara.indexOf('V') != -1 ? /V(\d*)/.exec(celula.mascara)[1].length : 0 }
            catch(e) { throw new ReferenceError(`Mascara: ${celula.mascara} da celula: ${JSON.stringify(celula.mascara)}. Contém parte decimal, mas a precisão do campo não foi informada!`+e) }

            if (tipo == 'X')
                return (celula.tamanho == celula.valor.length && celula.tamanho == qtdDigitos);
            else if (tipo == '9')
                return (
                    celula.tamanho == celula.valor.length
                    && celula.tamanho == /\d*/.exec(celula.valor)[0].length
                    && celula.tamanho == (qtdDigitos + precisaoDecimal)
                );
        }
        return false
    }
}
