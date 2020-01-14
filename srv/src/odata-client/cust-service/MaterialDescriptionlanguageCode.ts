/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { MaterialDescriptionlanguageCodeRequestBuilder } from './MaterialDescriptionlanguageCodeRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "MaterialDescriptionlanguageCodeCollection" of service "cust".
 */
export class MaterialDescriptionlanguageCode extends Entity implements MaterialDescriptionlanguageCodeType {
  /**
   * Technical entity name for MaterialDescriptionlanguageCode.
   */
  static _entityName = 'MaterialDescriptionlanguageCodeCollection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MaterialDescriptionlanguageCode.
   */
  static _serviceName = 'cust';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   */
  code!: string;
  /**
   * Description.
   */
  description!: string;

  /**
   * Returns an entity builder to construct instances `MaterialDescriptionlanguageCode`.
   * @returns A builder that constructs instances of entity type `MaterialDescriptionlanguageCode`.
   */
  static builder(): EntityBuilderType<MaterialDescriptionlanguageCode, MaterialDescriptionlanguageCodeTypeForceMandatory> {
    return Entity.entityBuilder(MaterialDescriptionlanguageCode);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MaterialDescriptionlanguageCode` entity type.
   * @returns A `MaterialDescriptionlanguageCode` request builder.
   */
  static requestBuilder(): MaterialDescriptionlanguageCodeRequestBuilder {
    return new MaterialDescriptionlanguageCodeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialDescriptionlanguageCode`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MaterialDescriptionlanguageCode`.
   */
  static customField(fieldName: string): CustomField<MaterialDescriptionlanguageCode> {
    return Entity.customFieldSelector(fieldName, MaterialDescriptionlanguageCode);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MaterialDescriptionlanguageCodeType {
  code: string;
  description: string;
}

export interface MaterialDescriptionlanguageCodeTypeForceMandatory {
  code: string;
  description: string;
}

export namespace MaterialDescriptionlanguageCode {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<MaterialDescriptionlanguageCode> = new StringField('Code', MaterialDescriptionlanguageCode, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<MaterialDescriptionlanguageCode> = new StringField('Description', MaterialDescriptionlanguageCode, 'Edm.String');
  /**
   * All fields of the MaterialDescriptionlanguageCode entity.
   */
  export const _allFields: Array<StringField<MaterialDescriptionlanguageCode>> = [
    MaterialDescriptionlanguageCode.CODE,
    MaterialDescriptionlanguageCode.DESCRIPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MaterialDescriptionlanguageCode> = new AllFields('*', MaterialDescriptionlanguageCode);
  /**
   * All key fields of the MaterialDescriptionlanguageCode entity.
   */
  export const _keyFields: Array<Selectable<MaterialDescriptionlanguageCode>> = [MaterialDescriptionlanguageCode.CODE];
  /**
   * Mapping of all key field names to the respective static field property MaterialDescriptionlanguageCode.
   */
  export const _keys: { [keys: string]: Selectable<MaterialDescriptionlanguageCode> } = MaterialDescriptionlanguageCode._keyFields.reduce((acc: { [keys: string]: Selectable<MaterialDescriptionlanguageCode> }, field: Selectable<MaterialDescriptionlanguageCode>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
