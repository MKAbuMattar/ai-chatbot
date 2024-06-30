export const CodeSnippet = ({children}: {children: string}) => {
  return (
    <span className="mx-1 rounded-md bg-secondary p-1 font-mono text-sm text-secondary-foreground">
      {children}
    </span>
  );
};
