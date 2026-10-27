// Fixtures for publish-to-code skip reasons (DIT-14074). One string per case.
export function SkipCases() {
  const title = "Welcome back";

  return (
    <div>
      <h1>{title}</h1>
      <p>Save changes</p>
      <p>
        Need to <strong>upgrade</strong> now.
      </p>
      <p>Price list</p>
      <p>Store hours</p>
      <p>Open daily</p>
    </div>
  );
}
