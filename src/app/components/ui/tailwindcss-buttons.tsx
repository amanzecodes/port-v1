"use client";
import React from "react";

export const ButtonsCard = ({
  children
}: {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <div>
      <div className="relative z-40">{children}</div>
    </div>
  );
};
