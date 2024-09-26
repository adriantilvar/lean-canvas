import LeanCanvas from "@/components/lean-canvas";

export default function Home() {
  return (
    <div className="flex h-full flex-col">
      <h1 className="text-xl font-semibold text-zinc-800 sm:text-2xl">
        Lean Canvas Builder
      </h1>

      <LeanCanvas className="mt-4 flex-1 pb-6" />
    </div>
  );
}
