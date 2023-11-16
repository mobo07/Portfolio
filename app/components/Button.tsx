interface Props {
  children: React.ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    <div className="button relative text-sm px-3 py-1 w-fit rounded-[5px] border-[1.5px] border-[var(--primary)] text-[var(--primary)] bg-transparent dark:bg-[#010409] dark:font-semibold outline-none">
      {children}
    </div>
  );
};

export default Button;
