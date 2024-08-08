import { cn } from "apps/front-office/design-system/utils/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-slate-900/10 dark:bg-slate-50/10",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
