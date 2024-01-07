export function inspect () {
    // se não recebe parâmetro você pode fazer direto, não precisa do return, mas lá no método não coloca - ()  ->  @inspect
    return function (
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ) {
        const metodoOriginal = descriptor.value;
        // não funciona arrow function
        descriptor.value = function (...args: any[]) {
            console.log(`--- Método ${propertyKey}`)
            console.log(`---- Parâmetros: ${JSON.stringify(args)}`);

            const retorno = metodoOriginal.apply(this, args);

            console.log(`----- Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
    }
    return descriptor;
    }
}