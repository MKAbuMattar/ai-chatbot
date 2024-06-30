import React from 'react';
import Link from 'next/link';

export const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <Link target="_blank" href={href} className="underline hover:opacity-70">
      {children}
    </Link>
  );
};
