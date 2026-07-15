interface PageHeaderProps {
  title: string;
  description?: string;
  breadcrumb?: string;
}

export default function PageHeader({
  title,
  description,
  breadcrumb,
}: PageHeaderProps) {
  return (
    <div className="border-b border-gray-border bg-gray-light">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        {breadcrumb && (
          <p className="mb-2 text-sm text-gray-500">{breadcrumb}</p>
        )}
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
