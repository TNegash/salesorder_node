/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { MaterialBaseMeasureUnitCodeRequestBuilder } from './MaterialBaseMeasureUnitCodeRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "MaterialBaseMeasureUnitCodeCollection" of service "cust".
 */
export class MaterialBaseMeasureUnitCode extends Entity implements MaterialBaseMeasureUnitCodeType {
  /**
   * Technical entity name for MaterialBaseMeasureUnitCode.
   */
  static _entityName = 'MaterialBaseMeasureUnitCodeCollection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MaterialBaseMeasureUnitCode.
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
   * Returns an entity builder to construct instances `MaterialBaseMeasureUnitCode`.
   * @returns A builder that constructs instances of entity type `MaterialBaseMeasureUnitCode`.
   */
  static builder(): EntityBuilderType<MaterialBaseMeasureUnitCode, MaterialBaseMeasureUnitCodeTypeForceMandatory> {
    return Entity.entityBuilder(MaterialBaseMeasureUnitCode);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MaterialBaseMeasureUnitCode` entity type.
   * @returns A `MaterialBaseMeasureUnitCode` request builder.
   */
  static requestBuilder(): MaterialBaseMeasureUnitCodeRequestBuilder {
    return new MaterialBaseMeasureUnitCodeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialBaseMeasureUnitCode`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MaterialBaseMeasureUnitCode`.
   */
  static customField(fieldName: string): CustomField<MaterialBaseMeasureUnitCode> {
    return Entity.customFieldSelector(fieldName, MaterialBaseMeasureUnitCode);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MaterialBaseMeasureUnitCodeType {
  code: string;
  description: string;
}

export interface MaterialBaseMeasureUnitCodeTypeForceMandatory {
  code: string;
  description: string;
}

export namespace MaterialBaseMeasureUnitCode {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<MaterialBaseMeasureUnitCode> = new StringField('Code', MaterialBaseMeasureUnitCode, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<MaterialBaseMeasureUnitCode> = new StringField('Description', MaterialBaseMeasureUnitCode, 'Edm.String');
  /**
   * All fields of the MaterialBaseMeasureUnitCode entity.
   */
  export const _allFields: Array<StringField<MaterialBaseMeasureUnitCode>> = [
    MaterialBaseMeasureUnitCode.CODE,
    MaterialBaseMeasureUnitCode.DESCRIPTION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MaterialBaseMeasureUnitCode> = new AllFields('*', MaterialBaseMeasureUnitCode);
  /**
   * All key fields of the MaterialBaseMeasureUnitCode entity.
   */
  export const _keyFields: Array<Selectable<MaterialBaseMeasureUnitCode>> = [MaterialBaseMeasureUnitCode.CODE];
  /**
   * Mapping of all key field names to the respective static field property MaterialBaseMeasureUnitCode.
   */
  export const _keys: { [keys: string]: Selectable<MaterialBaseMeasureUnitCode> } = MaterialBaseMeasureUnitCode._keyFields.reduce((acc: { [keys: string]: Selectable<MaterialBaseMeasureUnitCode> }, field: Selectable<MaterialBaseMeasureUnitCode>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
