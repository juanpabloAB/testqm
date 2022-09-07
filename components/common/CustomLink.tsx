import Link from "next/link";
import React from "react";

interface CustomLinkProps {
  href: string;
  as: string;
  className?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const CustomLink = ({ className, href, as, onClick, children }: CustomLinkProps) => (
  <Link href={href} as={as} passHref>
    <a className={className || ""} onClick={onClick}>{children}</a>
  </Link>
);

export default CustomLink;
