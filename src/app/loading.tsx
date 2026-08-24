import LoaderOne from "@/components/ui/loader-one";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <LoaderOne />
    </div>
  );
}
