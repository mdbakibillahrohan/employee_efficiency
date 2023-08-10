import { useReducer } from "react";
import { employeeReducer, initialState } from "./store";

const Calculator = ({
  onTargetQuantityChangeHandler,
  onProductionQuantityChangeHandler,
  onCheckQuantityChangeHandler,
  onDefectQuantityChangeHandler,
  isFocus,
}) => {
  const [state, localDispatch] = useReducer(employeeReducer, initialState);

  return (
    <table
      border={2}
      className="w-full text-sm text-center text-gray-500 dark:text-gray-400"
    >
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col">Hours</th>
          {state.hourLists.map((e, i) => {
            return (
              <th key={i} scope="col">
                {e.title}
              </th>
            );
          })}
          <th scope="col">Total</th>
          <th scope="col">Average</th>
        </tr>
      </thead>
      <tbody>
        {/* here started the target quantity code  */}
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Target Quantitiy
          </th>
          {state.targetQuantity.map((e, i) => {
            return (
              <td key={i} className="p-0 w-16">
                <input
                  className="h-11 w-16 text-black text-center border-0"
                  type="text"
                  onChange={(e) => {
                    onTargetQuantityChangeHandler(e, i);
                  }}
                  name={e.value}
                  value={e}
                />
              </td>
            );
          })}

          <td className="bg-lime-600 text-black my-1">
            {state.total.target_quantity}
          </td>
          <td className="bg-lime-600 text-black my-1">
            {state.average.target_quantity}
          </td>
        </tr>
        {/* here ended the target quantity  */}

        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Production Quantitiy
          </th>
          {state.productionQuantity.map((e, i) => {
            return (
              <td key={i} className="p-0 w-16">
                <input
                  className="h-11 w-16 text-black text-center border-0"
                  type="text"
                  name={e.value}
                  value={e}
                  ref={(e) => {
                    if (isFocus) {
                      if (i === 0) {
                        e.focus(true);
                      }
                    }
                  }}
                  onChange={(e) => {
                    onProductionQuantityChangeHandler(e, i);
                  }}
                />
              </td>
            );
          })}

          <td className="bg-lime-600 text-black my-1">
            {state.total.production_quantity}
          </td>
          <td className="bg-lime-600 text-black my-1">
            {state.average.production_quantity}
          </td>
        </tr>

        {/* here started the check quantity  */}
        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Check Quantitiy
            </th>
            {state.checkQuantity.map((e, i) => {
              return (
                <td key={i} className="p-0 w-16">
                  <input
                    className="h-11 w-16 text-black text-center border-0"
                    type="text"
                    name={e.value}
                    onChange={(e) => {
                      onCheckQuantityChangeHandler(e, i);
                    }}
                    value={e}
                  />
                </td>
              );
            })}
            <td className="bg-lime-600 text-black my-1">
              {state.total.check_quantity}
            </td>
            <td className="bg-lime-600 text-black my-1">
              {state.average.check_quantity}
            </td>
          </tr> */}
        {/* here ended the check quantity  */}

        {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Defect Quantitiy
            </th>
            {state.defectQuantity.map((e, i) => {
              return (
                <td key={i} className="p-0 w-16">
                  <input
                    className="h-11 w-16 text-black text-center border-0"
                    type="text"
                    name={e.value}
                    onChange={(e) => {
                      onDefectQuantityChangeHandler(e, i);
                    }}
                    value={e}
                  />
                </td>
              );
            })}
            <td className="bg-lime-600 text-black my-1">
              {state.total.defect_quantity}
            </td>
            <td className="bg-lime-600 text-black my-1">
              {state.average.defect_quantity}
            </td>
          </tr> */}
        <tr className="bg-yellow-500 border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Efficiency(%)
          </th>
          {state.efficiency.map((e, i) => {
            return (
              <td key={i} className="p-0 w-16 text-black">
                {e}
              </td>
            );
          })}
          <td className="text-black my-1">{state.total.efficiency}</td>
          <td className="text-black my-1">{state.average.efficiency}</td>
        </tr>
        {/* <tr className="bg-yellow-500 border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              Defect(%)
            </th>
            {state.defect.map((e, i) => {
              return (
                <td key={i} className="p-0 w-16 text-black">
                  {e}
                </td>
              );
            })}
            <td className="text-black my-1">
              {state.total.defect}
            </td>
            <td className="text-black my-1">
              {state.average.defect}
            </td>
          </tr> */}
      </tbody>
    </table>
  );
};

export default Calculator;
