"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

import type { ClassValue } from "clsx";
import {
  Castle,
  ChartLine,
  CircleDollarSign,
  Gem,
  Key,
  LoaderCircle,
  LockKeyhole,
  ReceiptText,
  Route,
  Sparkle,
  Split,
  UserCheck,
  Users,
} from "lucide-react";

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

import { useCanvasStore } from "@/stores/canvas-store";

type CanvasBlock = {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  theme: string;
  layout: string;
};

const canvasCards: CanvasBlock[] = [
  {
    id: "problem",
    icon: <LockKeyhole className="h-3 w-3" />,
    title: "Problem",
    description: "List the 1-3 problems",
    theme: "border-pink-200 bg-pink-100 text-pink-950",
    layout: "xl:row-start-1 xl:col-span-2",
  },
  {
    id: "existing-alternatives",
    icon: <Split className="h-3 w-3" />,
    title: "Existing Alternatives",
    description: "List how the problems are solved today",
    theme: "border-pink-200 bg-pink-100 text-pink-950",
    layout: "xl:row-start-2 xl:col-span-2",
  },
  {
    id: "solution",
    icon: <Key className="h-3 w-3 rotate-90" />,
    title: "Solution",
    description: "Outline a possible solution for each problem",
    theme: "border-yellow-200 bg-yellow-100 text-yellow-950",
    layout: "xl:row-start-1 xl:col-span-2",
  },
  {
    id: "key-metrics",
    icon: <ChartLine className="h-3 w-3" />,
    title: "Key Metrics",
    description:
      "List the key numbers that tell you how your business is doing",
    theme: "border-orange-200 bg-orange-100 text-orange-950",
    layout: "xl:row-start-2 xl:col-span-2",
  },
  {
    id: "unique-value-proposition",
    icon: <Gem className="h-3 w-3" />,
    title: "Unique Value Proposition",
    description:
      "Single, clear, compelling message that states why you are different and worth paying attention",
    theme: "border-violet-200 bg-violet-100 text-violet-950",
    layout: "xl:row-start-1 xl:col-span-2",
  },
  {
    id: "high-level-concept",
    icon: <Sparkle className="h-3 w-3" />,
    title: "High Level Concept",
    description: "Write your X for Y analogy",
    theme: "border-violet-200 bg-violet-100 text-violet-950",
    layout: "xl:row-start-2 xl:col-span-2",
  },
  {
    id: "unfair-advantage",
    icon: <Castle className="h-3 w-3" />,
    title: "Unfair Advantage",
    description: "Something that cannot be easily bought or copied",
    theme: "border-amber-200 bg-amber-100 text-amber-950",
    layout: "xl:row-start-1 xl:col-span-2",
  },
  {
    id: "channels",
    icon: <Route className="h-3 w-3" />,
    title: "Channels",
    description: "Write your path to customers (inbound or outbound)",
    theme: "border-cyan-200 bg-cyan-100 text-cyan-950",
    layout: "xl:row-start-2 xl:col-span-2",
  },
  {
    id: "customer-segments",
    icon: <Users className="h-3 w-3" />,
    title: "Customer Segments",
    description: "List your target customers and users",
    theme: "border-sky-200 bg-sky-100 text-sky-950",
    layout: "xl:row-start-1 xl:col-span-2",
  },
  {
    id: "early-adopters",
    icon: <UserCheck className="h-3 w-3" />,
    title: "Early adopters",
    description: "List the characteristics of your ideal customers",
    theme: "border-sky-200 bg-sky-100 text-sky-950",
    layout: "xl:row-start-2 xl:col-span-2",
  },
  {
    id: "cost-structure",
    icon: <ReceiptText className="h-3 w-3" />,
    title: "Cost Structure",
    description: "List your fixed and variable costs",
    theme: "border-red-200 bg-red-100 text-red-950",
    layout: "xl:row-start-3 xl:col-span-5",
  },
  {
    id: "revenue-streams",
    icon: <CircleDollarSign className="h-3 w-3" />,
    title: "Revenue Streams",
    description: "List your sources of revenue",
    theme: "border-green-200 bg-green-100 text-green-950",
    layout: "xl:row-start-3 xl:col-span-5",
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

  if (!isMounted)
    return (
      <div className="flex h-screen w-screen items-center justify-center">
        <LoaderCircle className="h-20 w-20 animate-spin text-zinc-600" />
      </div>
    );

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-10",
        className
      )}
    >
      {canvasCards.map((block) => {
        const content = getBlock(toCamelCase(block.id) as BlockName);
        const hasContent = content !== "";
        const contentLines = hasContent ? content.split("\n") : [];
        const displayLines =
          contentLines.length > 6 ? contentLines.slice(0, 5) : contentLines;

        return (
          <Card
            key={block.id}
            className={cn(
              "group select-none hover:cursor-pointer md:min-h-24 xl:min-h-36",
              block.theme,
              block.layout
            )}
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
            <CardContent className="pt-2">
              {hasContent ? (
                <div className="overflow-hidden">
                  {displayLines.map((item, index) => (
                    <p
                      key={index}
                      className="overflow-ellipsis break-normal text-sm"
                    >
                      {item}
                    </p>
                  ))}
                  {contentLines.length >= 6 && <p>...</p>}
                </div>
              ) : (
                <p className="hidden text-sm opacity-50 xl:group-hover:block">
                  {block.description}
                </p>
              )}
            </CardContent>
          </Card>
        );
      })}

      {selectedCard && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent
            className={cn("h-full pb-28 sm:h-96 sm:w-128 sm:pb-6")}
          >
            <DialogHeader>
              <DialogTitle>
                <span className="inline-flex items-center gap-1">
                  {selectedCard.icon} {selectedCard.title}
                </span>
              </DialogTitle>
              <DialogDescription>{selectedCard.description}</DialogDescription>
            </DialogHeader>

            <BlockForm
              blockId={toCamelCase(selectedCard.id) as BlockName}
              className="h-128 sm:flex-1"
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
                className="bg-zinc-800 hover:bg-zinc-700"
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
