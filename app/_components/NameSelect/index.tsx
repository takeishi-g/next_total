import { border,label } from "@/app/styles";

type Props = {
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const NameSelect = ({ value, onChange }:Props) => {
  return (
    <label htmlFor="nameselect" className={label}>名前:
      <select name="nameselect" id="nameselect" className={border} value={value} onChange={onChange}> 
        <option value="斉藤">斉藤</option>
        <option value="宇田">宇田</option>
        <option value="桜井">桜井</option>
        <option value="佐々木">佐々木</option>
        <option value="笹原">笹原</option>
      </select>
    </label>
  );
};

export default NameSelect;
