import {Features} from './features';

export class Product {
  public _id: String;
  public title: String;
  public description: String;
  public price: number;
  public quantity: number;
  public image: String;
  public commentNum: number;
  public categoryType: String;
  public feature: Features = new Features();
}
