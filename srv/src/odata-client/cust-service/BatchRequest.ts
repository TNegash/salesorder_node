/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, ODataBatchRequestBuilder, ODataBatchChangeSet } from '@sap/cloud-sdk-core';
import { MaterialBaseMeasureUnitCode, Material, MaterialDescriptionlanguageCode } from './index';

/**
 * Batch builder for operations supported on the Cust Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadCustServiceRequestBuilder | ODataBatchChangeSet>): ODataBatchRequestBuilder {
  return new ODataBatchRequestBuilder(defaultCustServicePath, requests, map);
}

/**
 * Change set constructor consists of write operations supported on the Cust Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: WriteCustServiceRequestBuilder[]): ODataBatchChangeSet {
  return new ODataBatchChangeSet(requests);
}

export const defaultCustServicePath = '/sap/opu/odata/sap/cust';
const map = { 'CodeList': MaterialBaseMeasureUnitCode, 'Material': Material, 'CodeList': MaterialDescriptionlanguageCode };
export type ReadCustServiceRequestBuilder = GetAllRequestBuilder<MaterialBaseMeasureUnitCode> | GetAllRequestBuilder<Material> | GetAllRequestBuilder<MaterialDescriptionlanguageCode> | GetByKeyRequestBuilder<MaterialBaseMeasureUnitCode> | GetByKeyRequestBuilder<Material> | GetByKeyRequestBuilder<MaterialDescriptionlanguageCode>;
export type WriteCustServiceRequestBuilder = CreateRequestBuilder<MaterialBaseMeasureUnitCode> | UpdateRequestBuilder<MaterialBaseMeasureUnitCode> | DeleteRequestBuilder<MaterialBaseMeasureUnitCode> | CreateRequestBuilder<Material> | UpdateRequestBuilder<Material> | DeleteRequestBuilder<Material> | CreateRequestBuilder<MaterialDescriptionlanguageCode> | UpdateRequestBuilder<MaterialDescriptionlanguageCode> | DeleteRequestBuilder<MaterialDescriptionlanguageCode>;
