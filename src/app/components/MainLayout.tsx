export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <main className="grid grid-cols-[max-content_1fr_max-content] auto-rows-min w-[90vw] mx-auto mt-8 mb-8 gap-8">
    <main className="grid grid-cols-[max-content_1fr_max-content] auto-rows-min w-[90vw] mx-auto mt-8 mb-8 gap-8">
      {children}
    </main>
  );
}
