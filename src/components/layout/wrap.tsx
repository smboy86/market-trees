interface WrapProps extends React.HTMLAttributes<HTMLDivElement> {}

const Wrap: React.FC<WrapProps> = ({ className, children, ...props }) => {
  return (
    <main
      className="flex min-h-screen flex-col items-center justify-start"
      {...props}
    >
      {children}
    </main>
  );
};

export default Wrap;
