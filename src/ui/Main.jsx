function Main({ children }) {
  return (
    // With this div scroll bar will appear on right side
    // instead of appearing adjacent to list
    <div className="overflow-y-scroll">
      <main className="mx-auto max-w-xs sm:max-w-sm">{children}</main>
    </div>
  );
}

export default Main;
