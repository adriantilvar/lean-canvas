"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import type { ClassValue } from "clsx";

import { useIsComponentMounted } from "@/lib/hooks";
import type { BlockName } from "@/lib/types";
import { cn, toCamelCase } from "@/lib/utils";

import BlockForm from "@/components/block-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import CastleIcon from "@/icons/castle";
import ChartLineIcon from "@/icons/chart-line";
import CircleDollarSignIcon from "@/icons/circle-dollar-sign";
import GemIcon from "@/icons/gem";
import KeyIcon from "@/icons/key";
import LockKeyholeIcon from "@/icons/lock-keyhole";
import ReceiptTextIcon from "@/icons/receipts-text";
import RouteIcon from "@/icons/route";
import SparkleIcon from "@/icons/sparkle";
import SplitIcon from "@/icons/split";
import UserCheckIcon from "@/icons/user-check";
import UsersIcon from "@/icons/users";
import { useCanvasStore } from "@/stores/canvas-store";

type CanvasBlock = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  styling: string;
};

const canvasCards: CanvasBlock[] = [
  {
    id: "problem",
    icon: <LockKeyholeIcon className="h-3 w-3" />,
    title: "Problem",
    description: "List the 1-3 problems",
    styling:
      "border-pink-200 bg-pink-200 text-pink-950 xl:row-start-1 xl:col-span-2",
  },
  {
    id: "existing-alternatives",
    icon: <SplitIcon className="h-3 w-3" />,
    title: "Existing Alternatives",
    description: "List how the problems are solved today",
    styling:
      "border-pink-200 bg-pink-200 text-pink-950 xl:row-start-2 xl:col-span-2",
  },
  {
    id: "solution",
    icon: <KeyIcon className="h-3 w-3 rotate-90" />,
    title: "Solution",
    description: "Outline a possible solution for each problem",
    styling:
      "border-yellow-200 bg-yellow-100 text-yellow-950 xl:row-start-1 xl:col-span-2",
  },
  {
    id: "key-metrics",
    icon: <ChartLineIcon className="h-3 w-3" />,
    title: "Key Metrics",
    description:
      "List the key numbers that tell you how your business is doing",
    styling:
      "border-orange-200 bg-orange-100 text-orange-950 xl:row-start-2 xl:col-span-2",
  },
  {
    id: "unique-value-proposition",
    icon: <GemIcon className="h-3 w-3" />,
    title: "Unique Value Proposition",
    description:
      "Single, clear, compelling message that states why you are different and worth paying attention",
    styling:
      "border-violet-200 bg-violet-100 text-violet-950 xl:row-start-1 xl:col-span-2",
  },
  {
    id: "high-level-concept",
    icon: <SparkleIcon className="h-3 w-3" />,
    title: "High Level Concept",
    description: "Write your X for Y analogy",
    styling:
      "border-violet-200 bg-violet-100 text-violet-950 xl:row-start-2 xl:col-span-2",
  },
  {
    id: "unfair-advantage",
    icon: <CastleIcon className="h-3 w-3" />,
    title: "Unfair Advantage",
    description: "Something that cannot be easily bought or copied",
    styling:
      "border-amber-200 bg-amber-100 text-amber-950 xl:row-start-1 xl:col-span-2",
  },
  {
    id: "channels",
    icon: <RouteIcon className="h-3 w-3" />,
    title: "Channels",
    description: "Write your path to customers (inbound or outbound)",
    styling:
      "border-cyan-200 bg-cyan-100 text-cyan-950 xl:row-start-2 xl:col-span-2",
  },
  {
    id: "customer-segments",
    icon: <UsersIcon className="h-3 w-3" />,
    title: "Customer Segments",
    description: "List your target customers and users",
    styling:
      "border-sky-200 bg-sky-100 text-sky-950 xl:row-start-1 xl:col-span-2",
  },
  {
    id: "early-adopters",
    icon: <UserCheckIcon className="h-3 w-3" />,
    title: "Early adopters",
    description: "List the characteristics of your ideal customers",
    styling:
      "border-sky-200 bg-sky-100 text-sky-950 xl:row-start-2 xl:col-span-2",
  },
  {
    id: "cost-structure",
    icon: <ReceiptTextIcon className="h-3 w-3" />,
    title: "Cost Structure",
    description: "List your fixed and variable costs",
    styling:
      "border-red-200 bg-red-100 text-red-950 xl:row-start-3 xl:col-span-5",
  },
  {
    id: "revenue-streams",
    icon: <CircleDollarSignIcon className="h-3 w-3" />,
    title: "Revenue Streams",
    description: "List your sources of revenue",
    styling:
      "border-green-200 bg-green-100 text-green-950 xl:row-start-3 xl:col-span-5",
  },
];

type LeanCanvasProps = {
  className?: ClassValue;
};

const LeanCanvas = ({ className }: LeanCanvasProps) => {
  const [selectedCard, setSelectedCard] = useState<CanvasBlock | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const router = useRouter();
  const submitButton = useRef<HTMLButtonElement>(null);

  const isMounted = useIsComponentMounted();
  const getBlock = useCanvasStore((state) => state.getBlock);

  if (!isMounted) return <p>Loading...</p>;

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-10",
        className
      )}
    >
      {canvasCards.map((block) => {
        const blockValue = getBlock(toCamelCase(block.id) as BlockName);

        return (
          <Card
            key={block.id}
            className={cn("select-none hover:cursor-pointer", block.styling)}
            onClick={() => {
              setSelectedCard(block);
              setIsDialogOpen(true);
            }}
          >
            <CardHeader>
              <CardTitle className="flex items-baseline gap-1 text-sm">
                {block.icon} {block.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className={cn("text-sm", { "opacity-40": blockValue === "" })}>
                {blockValue !== "" ? blockValue : block.description}
              </p>
            </CardContent>
          </Card>
        );
      })}

      {selectedCard && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedCard.title}</DialogTitle>
              <DialogDescription>{selectedCard.description}</DialogDescription>
            </DialogHeader>

            <BlockForm
              blockId={toCamelCase(selectedCard.id) as BlockName}
              submitRef={submitButton}
            />

            <DialogFooter className="flex-row justify-between">
              <DialogClose asChild>
                <Button size="sm" variant="outline">
                  Drop
                </Button>
              </DialogClose>

              <Button
                size="sm"
                onClick={() => {
                  submitButton.current?.click();
                  setIsDialogOpen(false);
                  router.refresh();
                }}
              >
                Save
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default LeanCanvas;
