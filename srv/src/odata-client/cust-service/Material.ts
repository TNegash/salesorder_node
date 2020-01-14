/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { MaterialRequestBuilder } from './MaterialRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap/cloud-sdk-core';

/**
 * This class represents the entity "MaterialCollection" of service "cust".
 */
export class Material extends Entity implements MaterialType {
  /**
   * Technical entity name for Material.
   */
  static _entityName = 'MaterialCollection';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Material.
   */
  static _serviceName = 'cust';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Object Id.
   * Maximum length: 70.
   */
  objectId!: string;
  /**
   * Uuid.
   * @nullable
   */
  uuid?: string;
  /**
   * Internal Id.
   * Maximum length: 40.
   * @nullable
   */
  internalId?: string;
  /**
   * Description.
   * Maximum length: 40.
   * @nullable
   */
  description?: string;
  /**
   * Descriptionlanguage Code.
   * Maximum length: 2.
   * @nullable
   */
  descriptionlanguageCode?: string;
  /**
   * Descriptionlanguage Code Text.
   * @nullable
   */
  descriptionlanguageCodeText?: string;
  /**
   * Base Measure Unit Code.
   * Maximum length: 3.
   * @nullable
   */
  baseMeasureUnitCode?: string;
  /**
   * Base Measure Unit Code Text.
   * @nullable
   */
  baseMeasureUnitCodeText?: string;

  /**
   * Returns an entity builder to construct instances `Material`.
   * @returns A builder that constructs instances of entity type `Material`.
   */
  static builder(): EntityBuilderType<Material, MaterialTypeForceMandatory> {
    return Entity.entityBuilder(Material);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Material` entity type.
   * @returns A `Material` request builder.
   */
  static requestBuilder(): MaterialRequestBuilder {
    return new MaterialRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Material`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Material`.
   */
  static customField(fieldName: string): CustomField<Material> {
    return Entity.customFieldSelector(fieldName, Material);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface MaterialType {
  objectId: string;
  uuid?: string;
  internalId?: string;
  description?: string;
  descriptionlanguageCode?: string;
  descriptionlanguageCodeText?: string;
  baseMeasureUnitCode?: string;
  baseMeasureUnitCodeText?: string;
}

export interface MaterialTypeForceMandatory {
  objectId: string;
  uuid: string;
  internalId: string;
  description: string;
  descriptionlanguageCode: string;
  descriptionlanguageCodeText: string;
  baseMeasureUnitCode: string;
  baseMeasureUnitCodeText: string;
}

export namespace Material {
  /**
   * Static representation of the [[objectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_ID: StringField<Material> = new StringField('ObjectID', Material, 'Edm.String');
  /**
   * Static representation of the [[uuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UUID: StringField<Material> = new StringField('UUID', Material, 'Edm.Guid');
  /**
   * Static representation of the [[internalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INTERNAL_ID: StringField<Material> = new StringField('InternalID', Material, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Material> = new StringField('Description', Material, 'Edm.String');
  /**
   * Static representation of the [[descriptionlanguageCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTIONLANGUAGE_CODE: StringField<Material> = new StringField('DescriptionlanguageCode', Material, 'Edm.String');
  /**
   * Static representation of the [[descriptionlanguageCodeText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTIONLANGUAGE_CODE_TEXT: StringField<Material> = new StringField('DescriptionlanguageCodeText', Material, 'Edm.String');
  /**
   * Static representation of the [[baseMeasureUnitCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_MEASURE_UNIT_CODE: StringField<Material> = new StringField('BaseMeasureUnitCode', Material, 'Edm.String');
  /**
   * Static representation of the [[baseMeasureUnitCodeText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_MEASURE_UNIT_CODE_TEXT: StringField<Material> = new StringField('BaseMeasureUnitCodeText', Material, 'Edm.String');
  /**
   * All fields of the Material entity.
   */
  export const _allFields: Array<StringField<Material>> = [
    Material.OBJECT_ID,
    Material.UUID,
    Material.INTERNAL_ID,
    Material.DESCRIPTION,
    Material.DESCRIPTIONLANGUAGE_CODE,
    Material.DESCRIPTIONLANGUAGE_CODE_TEXT,
    Material.BASE_MEASURE_UNIT_CODE,
    Material.BASE_MEASURE_UNIT_CODE_TEXT
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Material> = new AllFields('*', Material);
  /**
   * All key fields of the Material entity.
   */
  export const _keyFields: Array<Selectable<Material>> = [Material.OBJECT_ID];
  /**
   * Mapping of all key field names to the respective static field property Material.
   */
  export const _keys: { [keys: string]: Selectable<Material> } = Material._keyFields.reduce((acc: { [keys: string]: Selectable<Material> }, field: Selectable<Material>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
