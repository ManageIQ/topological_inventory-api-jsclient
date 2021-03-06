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
import CollectionLinks from './CollectionLinks';
import CollectionMetadata from './CollectionMetadata';
import ServiceOffering from './ServiceOffering';

/**
 * The ServiceOfferingsCollection model module.
 * @module model/ServiceOfferingsCollection
 * @version 0.1.0
 */
class ServiceOfferingsCollection {
    /**
     * Constructs a new <code>ServiceOfferingsCollection</code>.
     * @alias module:model/ServiceOfferingsCollection
     */
    constructor() { 
        
        ServiceOfferingsCollection.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServiceOfferingsCollection</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceOfferingsCollection} obj Optional instance to populate.
     * @return {module:model/ServiceOfferingsCollection} The populated <code>ServiceOfferingsCollection</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServiceOfferingsCollection();

            if (data.hasOwnProperty('meta')) {
                obj['meta'] = CollectionMetadata.constructFromObject(data['meta']);
            }
            if (data.hasOwnProperty('links')) {
                obj['links'] = CollectionLinks.constructFromObject(data['links']);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ServiceOffering]);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CollectionMetadata} meta
 */
ServiceOfferingsCollection.prototype['meta'] = undefined;

/**
 * @member {module:model/CollectionLinks} links
 */
ServiceOfferingsCollection.prototype['links'] = undefined;

/**
 * @member {Array.<module:model/ServiceOffering>} data
 */
ServiceOfferingsCollection.prototype['data'] = undefined;






export default ServiceOfferingsCollection;

