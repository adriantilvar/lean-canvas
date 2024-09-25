import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { BlockName } from "@/lib/types";

type CanvasBlocks = {
  [_key in BlockName]: string;
};

type CanvasStore = CanvasBlocks & {
  setBlock: (_blockId: BlockName, _value: string) => void;
  getBlock: (_blockId: BlockName) => string;
};

export const useCanvasStore = create<CanvasStore>()(
  persist(
    (set, get) => ({
      problem: "",
      existingAlternatives: "",
      solution: "",
      keyMetrics: "",
      uniqueValueProposition: "",
      highLevelConcept: "",
      unfairAdvantage: "",
      channels: "",
      customerSegments: "",
      earlyAdopters: "",
      costStructure: "",
      revenueStreams: "",
      setBlock: (blockId, value) =>
        set((state) => ({
          ...state,
          [blockId]: value,
        })),

      getBlock: (blockId) => get()[blockId],
    }),
    { name: "lean-canvas-store" }
  )
);
