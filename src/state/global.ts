import { makeObservable, observable } from "mobx";
import { Values } from "types/utils";

export const STATUSES = {
  IDLE: "IDLE",
  PENDING: "PENDING",
  READY: "READY"
} as const;

type Status = Values<typeof STATUSES>;

export class Global {
  status: Status = STATUSES.IDLE;

  constructor() {
    makeObservable(this, {
      status: observable
    });
  }
}

export const globalState = new Global();
