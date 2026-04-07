export default function Note({
  children,
  title = "note",
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <div className="note">
      <p className="note__text">
        <span className="note__prefix">{title.toUpperCase()}:</span>
        {children}
      </p>
    </div>
  );
}
