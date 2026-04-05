export function DiamondIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg viewBox="0 0 12 12" className={className} fill="currentColor">
      <path d="M6 0L12 6L6 12L0 6Z" />
    </svg>
  );
}

export function FlameIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 23c-3.866 0-7-2.686-7-6 0-1.655.672-3.154 1.757-4.243C7.843 11.672 9 10.155 9 8c0-.627.112-1.228.317-1.784C10.41 8.316 12 10.5 12 10.5s2.5-3.5 2.5-6.5c0-.535-.065-1.054-.187-1.55C16.584 4.548 18 7.595 18 11c0 2.21-.895 4.21-2.343 5.657A7.978 7.978 0 0114 20c0 1.105-.895 2-2 2v1z" />
    </svg>
  );
}

export function BarIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 3h18v4H3zM5 7v10a2 2 0 002 2h10a2 2 0 002-2V7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 12h6M12 9v6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
