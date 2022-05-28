
const query = {
    Query:{
        hola(): string{
            return 'Hola Mundo remasterizado';
        },
        holaConNombre( __: void, { nombre} : any ): string{
            return `Hola Mundo ${nombre}`;
        },
        holaAlcursoGraphQL():string{
            return 'Hola Mundo en el curso de GraphQL';
        }
    }
};

export default query;