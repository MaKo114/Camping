import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/utils/category";

const CategoryInput = ({ defaultValue }: { defaultValue?: string }) => {
  const name = "category";
  return (
    <div className="mb-2">
      <Label className="font-bold mb-2 capitalize" htmlFor={name}>
        {name}
      </Label>
      <Select
        name={name}
        required
        defaultValue={defaultValue || categories[0].label}
      >
        <SelectTrigger>
          <SelectValue  />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {categories.map((item) => {
            return (
              <SelectItem key={item.label} value={item.label}>
                <span className="capitalize flex items-center gap-2">
                  <item.icon />
                  {item.label}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
};

export default CategoryInput;
