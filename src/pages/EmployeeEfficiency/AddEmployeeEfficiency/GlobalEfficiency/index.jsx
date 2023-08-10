import { useState } from "react";
import Calculator from "../Calculator";

const GlobalEfficiency = ({ data }) => {
  const [selectedKey, setSelectedKey] = useState(1);
  const [index, setIndex] = useState(0);

  const onKeyDown = (event) => {
    if (event.key == "ArrowDown") {
      setSelectedKey(data[index + 1].key);
      const newIndex = index + 1;
      setIndex(newIndex);
    }
    if (event.key == "ArrowUp") {
      setSelectedKey(data[index - 1].key);
      const newIndex = index - 1;
      setIndex(newIndex);
    }
  };
  return (
    <div className="flex w-full justify-between">
      <div className="w-[15rem]">
        <div>
          <h4>Employee List</h4>
        </div>
        <div onKeyDown={onKeyDown} className="h-[25rem] overflow-y-scroll">
          {data.map((element, i) => {
            return (
              <button
                key={i}
                className={`bg-transparent border-none cursor-pointer block w-full rounded-md focus:border-none ${
                  selectedKey == element.key ? "bg-lime-700 text-white" : ""
                }`}
                onClick={() => {
                  setSelectedKey(element.key);
                  setIndex(i);
                }}
              >
                {element.name} ({element.employee_id})
              </button>
            );
          })}
        </div>
      </div>
      <div className="w-[69rem] ">
        <div className="text-xl font-bold text-center my-3">Efficiency</div>
        <Calculator />
      </div>
    </div>
  );
};
export default GlobalEfficiency;
