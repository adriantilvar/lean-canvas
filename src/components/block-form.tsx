import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import type { BlockName } from "@/lib/types";

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
  submitRef: React.RefObject<HTMLButtonElement>;
};

const BlockForm = ({ blockId, submitRef }: BlockFormProps) => {
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

    setBlock(blockId as BlockName, value);
  };

  return (
    <Form {...form}>
      <form action={onActionHandler}>
        <FormField
          control={form.control}
          name={blockId}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  {...field}
                  placeholder="Begin writing..."
                  className="h-24"
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
