import { border } from "@/app/styles";

type Props = {
  value: string
  onChange: React.ChangeEventHandler<HTMLSelectElement>
}

const TaskSelect = ({ value, onChange }: Props) => {

 

  return (
    <label htmlFor="task" className="flex gap-4">工程:
      <select name="task" id="task" className={border} value={value} onChange={onChange}>
        <option value="DR">DR</option>
        <option value="MC">MC</option>
        <option value="MC(無人)">MC(無人)</option>
        <option value="W">W</option>
        <option value="W(無人)">W(無人)</option>
        <option value="細穴">細穴</option>
        <option value="細穴(無人)">細穴(無人)</option>
      </select>
    </label>
  );
};

export default TaskSelect;
