using my.app from '../db/data-model';
using cust as cust_API_product from './external/csn/byd_product';

service Salesorderhandling {
    @odata.draft.enabled:false
    entity Salesorder     as projection on app.Salesorder;
    entity Salesorderitem as projection on app.Salesorderitem {
        *
    } actions {
        action CheckATP() returns String(255);
    };

    @cds.persistence.skip
    @readonly
    entity Products       as projection on cust_API_product.Material {
        key ObjectID as ObjectID, InternalID as InternalID, Description as Description
    };
}