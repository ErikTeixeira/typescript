// Requisitos não funcionais - teste de performance

// Decorator - função
// valor padrão  - boolean = false
export function logarTempoDeExecucao(emSegundos: boolean = false) {
    return function(
        // se coloca no método estatico da classe ele é a função construtora da classe, se coloca em um não estatico ele retorna o prototyte da classe
        target: any,
        // da o nome do método
        propertyKey: string,
        // sabe tudo sobre o método que quer modificar/executar, tem uma referencia pro método original
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;

        // vai passar uma função para
        // ...args: Array<any>  -  para os parametros que os métodos terão, que pode ser 0 ou mais, eles vão ser passados como array  - ou - ...args: Array[]
        descriptor.value = function(...args: any[]) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();

            // Chamar o método original
            // apply - passar o contexto e os parametros
            // this - negociacoes-controller
            const retorno = metodoOriginal.apply(this, args);
            
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1)/divisor} ${unidade}`);
            retorno
        };

        return descriptor;
    }
}