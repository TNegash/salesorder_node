/*!
 * Copyright (c) 2019 SAP SE or an SAP affiliate company. All rights reserved.
 */

import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap/cloud-sdk-core';
import { Material } from './Material';

/**
 * Request builder class for operations supported on the [[Material]] entity.
 */
export class MaterialRequestBuilder extends RequestBuilder<Material> {
  /**
   * Returns a request builder for retrieving one `Material` entity based on its keys.
   * @param objectId Key property. See [[Material.objectId]].
   * @returns A request builder for creating requests to retrieve one `Material` entity based on its keys.
   */
  getByKey(objectId: string): GetByKeyRequestBuilder<Material> {
    return new GetByKeyRequestBuilder(Material, { ObjectID: objectId });
  }

  /**
   * Returns a request builder for querying all `Material` entities.
   * @returns A request builder for creating requests to retrieve all `Material` entities.
   */
  getAll(): GetAllRequestBuilder<Material> {
    return new GetAllRequestBuilder(Material);
  }

  /**
   * Returns a request builder for creating a `Material` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Material`.
   */
  create(entity: Material): CreateRequestBuilder<Material> {
    return new CreateRequestBuilder(Material, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Material`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Material`.
   */
  update(entity: Material): UpdateRequestBuilder<Material> {
    return new UpdateRequestBuilder(Material, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Material`.
   * @param objectId Key property. See [[Material.objectId]].
   * @returns A request builder for creating requests that delete an entity of type `Material`.
   */
  delete(objectId: string): DeleteRequestBuilder<Material>;
  /**
   * Returns a request builder for deleting an entity of type `Material`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Material` by taking the entity as a parameter.
   */
  delete(entity: Material): DeleteRequestBuilder<Material>;
  delete(objectIdOrEntity: any): DeleteRequestBuilder<Material> {
    return new DeleteRequestBuilder(Material, objectIdOrEntity instanceof Material ? objectIdOrEntity : { ObjectID: objectIdOrEntity! });
  }
}
