interface Props {
  title: string;
}
export default function Header(props: Props) {
  const { title = 'empty' } = props;

  return (
    <div className="w-full mb-4 text-center">
      <h1 className="">{title}</h1>
    </div>
  );
}
