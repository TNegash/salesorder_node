/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { MaterialBaseMeasureUnitCode } from './MaterialBaseMeasureUnitCode';

/**
 * Request builder class for operations supported on the [[MaterialBaseMeasureUnitCode]] entity.
 */
export class MaterialBaseMeasureUnitCodeRequestBuilder extends RequestBuilder<MaterialBaseMeasureUnitCode> {
  /**
   * Returns a request builder for retrieving one `MaterialBaseMeasureUnitCode` entity based on its keys.
   * @param code Key property. See [[MaterialBaseMeasureUnitCode.code]].
   * @returns A request builder for creating requests to retrieve one `MaterialBaseMeasureUnitCode` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<MaterialBaseMeasureUnitCode> {
    return new GetByKeyRequestBuilder(MaterialBaseMeasureUnitCode, { Code: code });
  }

  /**
   * Returns a request builder for querying all `MaterialBaseMeasureUnitCode` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialBaseMeasureUnitCode` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialBaseMeasureUnitCode> {
    return new GetAllRequestBuilder(MaterialBaseMeasureUnitCode);
  }
}
