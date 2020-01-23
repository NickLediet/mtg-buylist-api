/*
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * Class representing a Legality.
 */
class Legality {
  /**
   * Create a Legality.
   * @member {string} [standard] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [future] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [frontier] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [modern] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [legacy] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [pauper] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [vintage] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [penny] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [commander] Possible values include: 'legal',
   * 'not_legal', 'restricted', 'banned'
   * @member {string} [onevOne] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [duel] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   * @member {string} [brawl] Possible values include: 'legal', 'not_legal',
   * 'restricted', 'banned'
   */
  constructor() {
  }

  /**
   * Defines the metadata of Legality
   *
   * @returns {object} metadata of Legality
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'legality',
      type: {
        name: 'Composite',
        className: 'Legality',
        modelProperties: {
          standard: {
            required: false,
            serializedName: 'standard',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          future: {
            required: false,
            serializedName: 'future',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          frontier: {
            required: false,
            serializedName: 'frontier',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          modern: {
            required: false,
            serializedName: 'modern',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          legacy: {
            required: false,
            serializedName: 'legacy',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          pauper: {
            required: false,
            serializedName: 'pauper',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          vintage: {
            required: false,
            serializedName: 'vintage',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          penny: {
            required: false,
            serializedName: 'penny',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          commander: {
            required: false,
            serializedName: 'commander',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          onevOne: {
            required: false,
            serializedName: '1v1',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          duel: {
            required: false,
            serializedName: 'duel',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          },
          brawl: {
            required: false,
            serializedName: 'brawl',
            type: {
              name: 'Enum',
              allowedValues: [ 'legal', 'not_legal', 'restricted', 'banned' ]
            }
          }
        }
      }
    };
  }
}

module.exports = Legality;