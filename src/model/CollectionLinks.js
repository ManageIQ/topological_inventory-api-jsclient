/**
 * Topological Inventory
 * Topological Inventory
 *
 * OpenAPI spec version: 0.1.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CollectionLinks model module.
 * @module model/CollectionLinks
 * @version 0.1.0
 */
class CollectionLinks {
    /**
     * Constructs a new <code>CollectionLinks</code>.
     * @alias module:model/CollectionLinks
     */
    constructor() { 
        
        CollectionLinks.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectionLinks</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionLinks} obj Optional instance to populate.
     * @return {module:model/CollectionLinks} The populated <code>CollectionLinks</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionLinks();

            if (data.hasOwnProperty('first')) {
                obj['first'] = ApiClient.convertToType(data['first'], 'String');
            }
            if (data.hasOwnProperty('last')) {
                obj['last'] = ApiClient.convertToType(data['last'], 'String');
            }
            if (data.hasOwnProperty('prev')) {
                obj['prev'] = ApiClient.convertToType(data['prev'], 'String');
            }
            if (data.hasOwnProperty('next')) {
                obj['next'] = ApiClient.convertToType(data['next'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} first
 */
CollectionLinks.prototype['first'] = undefined;

/**
 * @member {String} last
 */
CollectionLinks.prototype['last'] = undefined;

/**
 * @member {String} prev
 */
CollectionLinks.prototype['prev'] = undefined;

/**
 * @member {String} next
 */
CollectionLinks.prototype['next'] = undefined;






export default CollectionLinks;

