export const Header = () => {
  return (
    <header className="w-full border-b border-border bg-gradient-surface">
      <div className="container mx-auto px-4 py-6">
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-foreground tracking-tight">
            Prompt That For You
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            For all those people who find it more convenient to ask you to ask ChatGPT than to ask ChatGPT themselves.
          </p>
        </div>
      </div>
    </header>
  );
};