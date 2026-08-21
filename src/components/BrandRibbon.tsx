export default function BrandRibbon() {
  return (
    <div
      className="flex h-1.5 w-full"
      aria-hidden="true"
    >
      <span className="flex-1 bg-brand-blue" />
      <span className="flex-1 bg-brand-red" />
      <span className="flex-1 bg-brand-yellow" />
      <span className="flex-1 bg-brand-green" />
    </div>
  );
}
