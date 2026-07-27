import clsx from "clsx";

export default function Card({
  image,
  badge,
  icon,
  title,
  description,
  children,
  className = "",
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "group relative overflow-hidden rounded-3xl",
        "border border-white/10 bg-white/5 backdrop-blur-md",
        "transition-all duration-500",
        "hover:-translate-y-2 hover:border-primary/60",
        "hover:shadow-[0_15px_60px_rgba(0,200,83,.18)]",
        className,
      )}
    >
      {/* Top Image */}
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {badge && (
            <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Content */}
      <div className="relative flex flex-col items-center space-y-2 p-4 text-center">
        {icon && (
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition duration-300 group-hover:bg-primary group-hover:text-white">
            {icon}
          </div>
        )}

        <h3 className="text-base font-bold text-white transition group-hover:text-primary">
          {title}
        </h3>

        <p className="text-xs leading-5 text-text-light line-clamp-2">
          {description}
        </p>

        {children && <div className="w-full">{children}</div>}
      </div>

      {/* Glow Border */}
      <div className="absolute inset-0 rounded-3xl border border-primary/0 transition duration-500 group-hover:border-primary/30" />
    </div>
  );
}
