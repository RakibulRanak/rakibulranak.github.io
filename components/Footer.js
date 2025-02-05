import React from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-center py-2 px-5">
      <div className="container text-muted">
        <small>
          <Link href="https://github.com/rakibulranak">
            <a> &copy; 2025 rakibulranak</a>
          </Link>
        </small>
      </div>
    </footer>
  );
};
