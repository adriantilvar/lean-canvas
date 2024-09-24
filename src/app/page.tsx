import LeanCanvas from "@/components/lean-canvas";

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <h1 className="text-3xl font-semibold text-zinc-900">
        Lean Canvas Builder
      </h1>

      <LeanCanvas className="mt-6 flex-1 pb-6 xl:pb-0" />
    </div>
  );
}
