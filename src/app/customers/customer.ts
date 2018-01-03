import { DataItem } from "../datastore/dataItem";

export class Customer extends DataItem {
    constructor() {
        super();
        this.isDeleted = false;
    }

   public name : string;
   public dob : string;
   public address : string;
   public notes : string;
   public phone : string;
   public isDeleted : boolean;
}
