import React from "react";
import { cn } from "../../lib/utils";
import "./blobAnimation.css";

interface BlobProps extends React.HTMLAttributes<HTMLDivElement> {
  firstBlobColor: string;
  secondBlobColor: string;
}

export default function BlurryBlob({
  className,
  firstBlobColor,
  secondBlobColor,
}: BlobProps) {
  return (
    <div className="relative min-h-52 min-w-52 flex items-center justify-center">
      <div className="relative w-full max-w-lg">
        <div
          className={cn(
            "absolute -right-24 -top-28 h-72 w-72 pop-blob blob rounded-full",
            className,
            firstBlobColor
          )}
        ></div>
        <div
          className={cn(
            "absolute -left-40 -top-64 h-72 w-72 pop-blob blob rounded-full",
            className,
            secondBlobColor
          )}
        ></div>
      </div>
    </div>
  );
}
