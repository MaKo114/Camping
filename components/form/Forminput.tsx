import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormInputProps = {
  name: string;
  type: string;
  label?: string;
  defaultValue?: string;
  placeholder?: string;
};

const FormInput = (props: FormInputProps) => {
  const { name, type, label, defaultValue, placeholder } = props;

  return (
    <div className="mb-2">
      <Label className="font-bold mb-2" htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      ></Input>
    </div>
  );
};

export default FormInput;
