import type { ClassValue } from "clsx";

import { cn } from "@/lib/utils";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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

type LeanCanvasProps = {
  className?: ClassValue;
};

const LeanCanvas = ({ className }: LeanCanvasProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-2 xl:auto-cols-auto xl:grid-cols-5",
        className
      )}
    >
      <Card className="border-pink-200 bg-pink-200 text-pink-950 xl:row-start-1">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <LockKeyholeIcon className="h-3 w-3" /> Problem
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">List the top 1-3 problems</p>
        </CardContent>
      </Card>

      <Card className="border-pink-200 bg-pink-200 text-pink-950 xl:row-start-2">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <SplitIcon className="h-3 w-3" />
            Existing Alternatives
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">List how the problems are solved today</p>
        </CardContent>
      </Card>

      <Card className="border-yellow-200 bg-yellow-100 text-yellow-950 xl:row-start-1">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <KeyIcon className="h-3 w-3 rotate-90" />
            Solution
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Outline a possible solution for each problem
          </p>
        </CardContent>
      </Card>

      <Card className="border-orange-200 bg-orange-100 text-orange-950 xl:row-start-2">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <ChartLineIcon className="h-3 w-3" />
            Key Metrics
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            List the key numbers that tell you how your business is doing
          </p>
        </CardContent>
      </Card>

      <Card className="border-violet-200 bg-violet-100 text-violet-950 xl:row-start-1">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <GemIcon className="h-3 w-3" />
            Unique Value Proposition
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Single, clear, compelling message that states why you are different
            and worth paying attention
          </p>
        </CardContent>
      </Card>

      <Card className="border-violet-200 bg-violet-100 text-violet-950 xl:row-start-2">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <SparkleIcon className="h-3 w-3" />
            High Level Concept
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">Write your X for Y analogy</p>
        </CardContent>
      </Card>

      <Card className="border-amber-200 bg-amber-100 text-amber-950 xl:row-start-1">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <CastleIcon className="h-3 w-3" />
            Unfair Advantage
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Something that cannot be easily bought or copied
          </p>
        </CardContent>
      </Card>

      <Card className="border-cyan-200 bg-cyan-100 text-cyan-950 xl:row-start-2">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <RouteIcon className="h-3 w-3" />
            Channels
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Write your path to customers (inbound or outbound)
          </p>
        </CardContent>
      </Card>

      <Card className="border-sky-200 bg-sky-100 text-sky-950 xl:row-start-1">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <UsersIcon className="h-3 w-3" />
            Customer Segments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">List your target customers and users</p>
        </CardContent>
      </Card>

      <Card className="border-sky-200 bg-sky-100 text-sky-950 xl:row-start-2">
        <CardHeader>
          <CardTitle className="flex items-baseline gap-1">
            <UserCheckIcon className="h-3 w-3" />
            Early adopters
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            List the characteristics of your ideal customers
          </p>
        </CardContent>
      </Card>

      <div className="col-span-1 flex flex-col gap-4 md:col-span-2 md:flex-row xl:col-span-5">
        <Card className="flex-1 border-red-200 bg-red-100 text-red-950">
          <CardHeader>
            <CardTitle className="flex items-baseline gap-1">
              <ReceiptTextIcon className="h-3 w-3" />
              Cost Structure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">List your fixed and variable costs</p>
          </CardContent>
        </Card>

        <Card className="flex-1 border-green-200 bg-green-100 text-green-950">
          <CardHeader>
            <CardTitle className="flex items-baseline gap-1">
              <CircleDollarSignIcon className="h-3 w-3" />
              Revenue Streams
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">List your sources of revenue</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LeanCanvas;
