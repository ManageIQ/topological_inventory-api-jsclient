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
import Tagging from './Tagging';

/**
 * The ContainerImage model module.
 * @module model/ContainerImage
 * @version 0.1.0
 */
class ContainerImage {
    /**
     * Constructs a new <code>ContainerImage</code>.
     * @alias module:model/ContainerImage
     */
    constructor() { 
        
        ContainerImage.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerImage</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerImage} obj Optional instance to populate.
     * @return {module:model/ContainerImage} The populated <code>ContainerImage</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerImage();

            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_seen_at')) {
                obj['last_seen_at'] = ApiClient.convertToType(data['last_seen_at'], 'Date');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('resource_version')) {
                obj['resource_version'] = ApiClient.convertToType(data['resource_version'], 'String');
            }
            if (data.hasOwnProperty('source_created_at')) {
                obj['source_created_at'] = ApiClient.convertToType(data['source_created_at'], 'Date');
            }
            if (data.hasOwnProperty('source_deleted_at')) {
                obj['source_deleted_at'] = ApiClient.convertToType(data['source_deleted_at'], 'Date');
            }
            if (data.hasOwnProperty('source_id')) {
                obj['source_id'] = ApiClient.convertToType(data['source_id'], 'String');
            }
            if (data.hasOwnProperty('source_ref')) {
                obj['source_ref'] = ApiClient.convertToType(data['source_ref'], 'String');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('taggings')) {
                obj['taggings'] = ApiClient.convertToType(data['taggings'], [Tagging]);
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} archived_at
 */
ContainerImage.prototype['archived_at'] = undefined;

/**
 * @member {Date} created_at
 */
ContainerImage.prototype['created_at'] = undefined;

/**
 * ID of the resource
 * @member {String} id
 */
ContainerImage.prototype['id'] = undefined;

/**
 * @member {Date} last_seen_at
 */
ContainerImage.prototype['last_seen_at'] = undefined;

/**
 * @member {String} name
 */
ContainerImage.prototype['name'] = undefined;

/**
 * @member {String} resource_version
 */
ContainerImage.prototype['resource_version'] = undefined;

/**
 * @member {Date} source_created_at
 */
ContainerImage.prototype['source_created_at'] = undefined;

/**
 * @member {Date} source_deleted_at
 */
ContainerImage.prototype['source_deleted_at'] = undefined;

/**
 * ID of the resource
 * @member {String} source_id
 */
ContainerImage.prototype['source_id'] = undefined;

/**
 * @member {String} source_ref
 */
ContainerImage.prototype['source_ref'] = undefined;

/**
 * @member {String} tag
 */
ContainerImage.prototype['tag'] = undefined;

/**
 * @member {Array.<module:model/Tagging>} taggings
 */
ContainerImage.prototype['taggings'] = undefined;

/**
 * @member {Date} updated_at
 */
ContainerImage.prototype['updated_at'] = undefined;






export default ContainerImage;

