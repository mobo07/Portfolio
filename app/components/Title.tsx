interface Props {
  number: string;
  title: string;
}

const Title = ({ number, title }: Props) => {
  return (
    <h2 className="font-bold text-gray-950 dark:text-gray-400">
      <span className="font-secondary text-[var(--primary)] mr-2">
        {number}
      </span>
      {title}
    </h2>
  );
};

export default Title;
