export default function DiagnosisCard({
  className,
  title,
  value,
  status,
  icon,
}: {
  className?: string;
  title: string;
  value: string;
  status: string;
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 p-4 shadow-md rounded-3xl ${className}`}
    >
      <div className="flex items-center gap-2">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-sm font-semibold text-gray-500">{status}</p>
    </div>
  );
}
