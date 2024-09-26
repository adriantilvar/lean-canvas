import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { BlockName } from "@/lib/types";
import { cn } from "@/lib/utils";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";

import { useCanvasStore } from "@/stores/canvas-store";

type BlockFormProps = {
  blockId: BlockName;
  className?: string;
  submitRef: React.RefObject<HTMLButtonElement>;
};

const BlockForm = ({ blockId, className, submitRef }: BlockFormProps) => {
  const setBlock = useCanvasStore((state) => state.setBlock);
  const getBlock = useCanvasStore((state) => state.getBlock);

  const blockSchema = z.object({
    [blockId]: z.string().default(""),
  });

  const form = useForm<z.infer<typeof blockSchema>>({
    resolver: zodResolver(blockSchema),
    defaultValues: {
      [blockId]: getBlock(blockId),
    },
  });

  const onActionHandler = async () => {
    const isFormValid = await form.trigger();
    if (!isFormValid) return;

    const [blockId, value] = Object.entries(form.getValues())[0];

    setBlock(blockId as BlockName, value.trim());
  };

  return (
    <Form {...form}>
      <form action={onActionHandler} className={cn("flex flex-col", className)}>
        <FormField
          control={form.control}
          name={blockId}
          render={({ field }) => (
            <FormItem className="flex flex-1">
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Begin writing..."
                  className="flex-1"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button className="hidden" ref={submitRef} type="submit" />
      </form>
    </Form>
  );
};

export default BlockForm;
