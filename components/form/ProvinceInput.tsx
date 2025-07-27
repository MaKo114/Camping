import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { provinces } from "@/utils/province";

const ProvinceInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "province";
  return (
    <div className="mb-2">
      <Label className="font-bold mb-2 capitalize" htmlFor={name}>
        {name}
      </Label>
      <Select
        name={name}
        required
        defaultValue={defaultValue || provinces[0].PROVINCE_NAME}
      >
        <SelectTrigger>
          <SelectValue  />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {provinces.map((item) => {
            return (
              <SelectItem key={item.PROVINCE_ID} value={item.PROVINCE_NAME}>
                <span className="capitalize flex items-center">
                  {item.PROVINCE_NAME}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default ProvinceInput;
