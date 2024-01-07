// se não recebe parâmetro você pode fazer direto, não precisa do return, mas lá no método não coloca - ()  ->  @inspect
export function inspect(
    target: any, 
    propertyKey: string, 
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    // não funciona arrow function
    descriptor.value = function (...args: any[]) {
        console.log(`--- Método ${propertyKey}`);
        console.log(`------ parâmetros: ${JSON.stringify(args)}`)
        const retorno = metodoOriginal.apply(this, args);
        console.log(`------ retorno: ${JSON.stringify(retorno)}`);
        return retorno;
    }
    return descriptor;
}