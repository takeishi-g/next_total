import { border, label } from "@/app/styles";

type Props = {
  time: number
  handleChange: React.ChangeEventHandler<HTMLInputElement>
}

const TimeInput = ({time, handleChange}: Props) => {

  
  return (
    <label htmlFor="number" className={label}>加工時間:
      <input type="number" step={0.25} min={0} name="timeinput" value={time} onChange={handleChange} className={border}/>
    </label>
  );
};

export default TimeInput;
