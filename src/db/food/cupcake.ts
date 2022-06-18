import { Food, Trigger } from "..";
import { getFoodIdentifiers } from "../database";

export const cupcake: Food = {
  ...getFoodIdentifiers("Cupcake"),
  image: {
    source: "twemoji",
    commit: "793a6a93f303c08877dd6eb589b2fabb3d1c45ee",
    unicodeCodePoint: "\u{1F9C1}",
  },
  tier: 2,
  packs: ["StandardPack", "ExpansionPack1"],
  ability: {
    description: "Give an animal +3/+3 until end of battle.",
    triggeredBy: {
      kind: "Self",
    },
    trigger: Trigger.Buy,
    effect: {
      kind: "ModifyStats",
      target: {
        kind: "PurchaseTarget",
      },
      attackAmount: 3,
      healthAmount: 3,
      untilEndOfBattle: true,
    },
  },
};
