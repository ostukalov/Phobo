import { STATUSES } from "state/global";
import { createI18n } from "./i18n";

export default createI18n({
  [`heading:title.${STATUSES.IDLE}` as const]: ({ x }: { x: string }) => ({
    ru: `Заголовок_${x}`
  }),
  [`heading:title.${STATUSES.PENDING}` as const]: ({ x }: { x: string }) => ({
    ru: `wefaf_${x}`
  }),
  [`heading:title.${STATUSES.READY}` as const]: ({ x }: { x: string }) => ({
    ru: `wefaf_${x}`
  }),
  [`heading:desctioption.${STATUSES.IDLE}` as const]: {
    ru: "wef"
  },
  [`heading:desctioption.${STATUSES.PENDING}` as const]: {
    ru: "wef"
  },
  [`heading:desctioption.${STATUSES.READY}` as const]: {
    ru: "wef"
  },
  "action:next-faces": {
    ru: "Следующие лица"
  },
  "action:reset": {
    ru: "Сбросить!"
  }
});
