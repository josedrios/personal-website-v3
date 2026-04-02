export default function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="note">
      <p className="note__text">
        <span className="note__prefix">NOTE:</span>
        {children}
      </p>
    </div>
  );
}
