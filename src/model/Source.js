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
 * The Source model module.
 * @module model/Source
 * @version 0.1.0
 */
class Source {
    /**
     * Constructs a new <code>Source</code>.
     * @alias module:model/Source
     */
    constructor() { 
        
        Source.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Source</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Source} obj Optional instance to populate.
     * @return {module:model/Source} The populated <code>Source</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Source();

            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('source_type_id')) {
                obj['source_type_id'] = ApiClient.convertToType(data['source_type_id'], 'String');
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
            if (data.hasOwnProperty('uid')) {
                obj['uid'] = ApiClient.convertToType(data['uid'], 'String');
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} created_at
 */
Source.prototype['created_at'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
Source.prototype['id'] = undefined;

/**
 * @member {String} name
 */
Source.prototype['name'] = undefined;

/**
 * ID of the resource
 * @member {String} source_type_id
 */
Source.prototype['source_type_id'] = undefined;

/**
 * ID of the resource
 * @member {String} tenant_id
 */
Source.prototype['tenant_id'] = undefined;

/**
 * @member {String} uid
 */
Source.prototype['uid'] = undefined;

/**
 * @member {Date} updated_at
 */
Source.prototype['updated_at'] = undefined;

/**
 * @member {String} version
 */
Source.prototype['version'] = undefined;






export default Source;

