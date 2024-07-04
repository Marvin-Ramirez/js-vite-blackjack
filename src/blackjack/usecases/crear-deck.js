import _ from 'underscore';

/**
 * 
 * @param {Array <string>} tiposDeCarta 
 * @param {Array <string>} tiposEspeciales 
 * @returns {Array <string>} Crea un nuevo deck
 */
export let deck = [];

export const crearDeck = (tiposDeCarta, tiposEspeciales) => {

    if ( !tiposDeCarta || tiposDeCarta.length === 0 ) throw new Error('tiposDeCarta es obligatotio como un arreglo de string');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatotio como un arreglo de string');

    
    
    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    return deck;
}