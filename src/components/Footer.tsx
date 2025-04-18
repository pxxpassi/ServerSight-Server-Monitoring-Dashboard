"use client";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center p-4 mt-8">
      <p className="text-sm text-muted-foreground">
        Copyright {new Date().getFullYear()} ServerSight. All rights reserved.
      </p>
    </footer>
  );
};
