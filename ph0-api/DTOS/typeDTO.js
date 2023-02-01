import { Type } from '@sinclair/typebox';

export const dniDTOSchema = Type.String({
    minLength: 8,
    maxLength: 8,
    errorMessage: {
        minLength: 'DNI no valido',
        maxLength: 'DNI no valido',
    },
});

//export const 