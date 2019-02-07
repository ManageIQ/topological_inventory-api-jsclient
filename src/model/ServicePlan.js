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
 * The ServicePlan model module.
 * @module model/ServicePlan
 * @version 0.1.0
 */
class ServicePlan {
    /**
     * Constructs a new <code>ServicePlan</code>.
     * @alias module:model/ServicePlan
     */
    constructor() { 
        
        ServicePlan.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServicePlan</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServicePlan} obj Optional instance to populate.
     * @return {module:model/ServicePlan} The populated <code>ServicePlan</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServicePlan();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('extra')) {
                obj['extra'] = ApiClient.convertToType(data['extra'], 'String');
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
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], 'String');
            }
            if (data.hasOwnProperty('service_offering_id')) {
                obj['service_offering_id'] = ApiClient.convertToType(data['service_offering_id'], 'String');
            }
            if (data.hasOwnProperty('create_json_schema')) {
                obj['create_json_schema'] = ApiClient.convertToType(data['create_json_schema'], Object);
            }
            if (data.hasOwnProperty('update_json_schema')) {
                obj['update_json_schema'] = ApiClient.convertToType(data['update_json_schema'], Object);
            }
            if (data.hasOwnProperty('archived_at')) {
                obj['archived_at'] = ApiClient.convertToType(data['archived_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} id
 */
ServicePlan.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ServicePlan.prototype['name'] = undefined;

/**
 * @member {String} description
 */
ServicePlan.prototype['description'] = undefined;

/**
 * Extra information about this object in JSON format
 * @member {String} extra
 */
ServicePlan.prototype['extra'] = undefined;

/**
 * @member {Date} source_created_at
 */
ServicePlan.prototype['source_created_at'] = undefined;

/**
 * @member {Date} source_deleted_at
 */
ServicePlan.prototype['source_deleted_at'] = undefined;

/**
 * @member {String} source_id
 */
ServicePlan.prototype['source_id'] = undefined;

/**
 * @member {String} source_ref
 */
ServicePlan.prototype['source_ref'] = undefined;

/**
 * @member {String} tenant_id
 */
ServicePlan.prototype['tenant_id'] = undefined;

/**
 * @member {String} service_offering_id
 */
ServicePlan.prototype['service_offering_id'] = undefined;

/**
 * @member {Object} create_json_schema
 */
ServicePlan.prototype['create_json_schema'] = undefined;

/**
 * @member {Object} update_json_schema
 */
ServicePlan.prototype['update_json_schema'] = undefined;

/**
 * @member {Date} archived_at
 */
ServicePlan.prototype['archived_at'] = undefined;






export default ServicePlan;

