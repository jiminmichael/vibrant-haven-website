
import React from "react";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
};

export const SectionHeading = ({
  title,
  subtitle,
  center = false,
  className,
}: SectionHeadingProps) => {
  return (
    <div
      className={cn(
        "mb-12",
        center ? "text-center" : "",
        className
      )}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-estate-900">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-estate-600 max-w-3xl mt-2 mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};
