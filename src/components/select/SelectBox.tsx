import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface Props {
  onValueChange?: (value: string) => void;
  defaultText: string;
  options: {
    key: string;
    label: string;
  }[];
}

export default function SelectBox(props: Props) {
  return (
    <Select onValueChange={props?.onValueChange}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder={props.defaultText} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{props.defaultText}</SelectLabel>
          {props.options.map((item) => (
            <SelectItem key={item.key} value={item.key}>
              {item.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
