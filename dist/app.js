"use strict";
// const { getAge, getUUID } = require('./plugins');
Object.defineProperty(exports, "__esModule", { value: true });
// const { emailTemplate } = require('./js-foundation/01-template');
// require('./js-foundation/02-destructuring');
// const { getUserById } = require('./js-foundation/03-callbacks');
// const { getUserById } = require('./js-foundation/04-arrow');
// const { buildMakePerson } = require('./js-foundation/05-factory')
// const getPokemonById = require('./js-foundation/06-promises');
const plugins_1 = require("./plugins");
// getPokemonById(4)
//   .then( ( pokemon ) => console.log({ pokemon }) )
//   .catch( ( err ) => console.log( err ) )
//   .finally( () => console.log('Finalmente') );
// token de acceso
// Publicas
// ! Referencia a la función factory y uso
// const makePerson = buildMakePerson({ getUUID, getAge });
// const obj = { name: 'John', birthdate: '1985-10-21' };
// const john = makePerson( obj );
// console.log({ john });
const logger = (0, plugins_1.buildLogger)('app.js');
logger.log('Hola mundo');
logger.error('Not found');