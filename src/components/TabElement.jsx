export default function TabElement({
  currentTab,
  targetTab,
  className,
  children,
  ...props
}) {
  const hideClass = currentTab != targetTab ? "hideNarrow" : "";
  const elementClass = className + " " + hideClass;

  return (
    <div className={elementClass} {...props}>
      {children}
    </div>
  );
}
