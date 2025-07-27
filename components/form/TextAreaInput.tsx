import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";

const TextAreaInput = ({
  name,
  LabelText,
  defaultValue,
}: {
  name: string;
  LabelText?: string;
  defaultValue?: string;
}) => {
  return (
    <div className="mb-2">
      <Label className="font-semibold mb-2 capitalize" htmlFor={name}>
        {LabelText || name}
      </Label>
      <Textarea
      id={name}
      name={name}
      defaultValue={defaultValue}
      rows={5}
      required
      ></Textarea>
    </div>
  );
};

export default TextAreaInput;
