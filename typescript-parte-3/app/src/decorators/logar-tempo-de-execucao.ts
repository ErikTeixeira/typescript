// Requisitos não funcionais - teste de performance

// Decorator - função
export function logarTempoDeExuecucao() {
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
        descriptor.value = function(...args: Array<any>) {

            const t1 = performance.now();

            // Chamar o método original
            // apply - passar o contexto e os parametros
            // this - negociacoes-controller
            const retorno = metodoOriginal.apply(this.args);

            const t2 = performance.now();
            
            console.log(`Tempo de execução do ${propertyKey}: ${(t2 - t1) / 1000} segundos`);

            retorno;
        }

    }
}