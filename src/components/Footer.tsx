"use client";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center p-4 mt-4">
      <p className="text-sm">
        Copyright {new Date().getFullYear()} ServerSight. All rights reserved.
      </p>
    </footer>
  );
};
