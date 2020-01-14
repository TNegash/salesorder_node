/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap/cloud-sdk-core';
import { MaterialDescriptionlanguageCode } from './MaterialDescriptionlanguageCode';

/**
 * Request builder class for operations supported on the [[MaterialDescriptionlanguageCode]] entity.
 */
export class MaterialDescriptionlanguageCodeRequestBuilder extends RequestBuilder<MaterialDescriptionlanguageCode> {
  /**
   * Returns a request builder for retrieving one `MaterialDescriptionlanguageCode` entity based on its keys.
   * @param code Key property. See [[MaterialDescriptionlanguageCode.code]].
   * @returns A request builder for creating requests to retrieve one `MaterialDescriptionlanguageCode` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<MaterialDescriptionlanguageCode> {
    return new GetByKeyRequestBuilder(MaterialDescriptionlanguageCode, { Code: code });
  }

  /**
   * Returns a request builder for querying all `MaterialDescriptionlanguageCode` entities.
   * @returns A request builder for creating requests to retrieve all `MaterialDescriptionlanguageCode` entities.
   */
  getAll(): GetAllRequestBuilder<MaterialDescriptionlanguageCode> {
    return new GetAllRequestBuilder(MaterialDescriptionlanguageCode);
  }
}
