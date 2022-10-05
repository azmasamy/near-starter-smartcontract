import { context, PersistentMap } from "near-sdk-as";
import { MyModel } from "./models";

@nearBindgen
export class Contract {

  models: PersistentMap<string, MyModel> = new PersistentMap<string, MyModel>("models");

}