export const initialState = {
  hourLists: [
    {
      title: "H1",
      value: 1,
    },
    {
      title: "H2",
      value: 2,
    },
    {
      title: "H3",
      value: 3,
    },
    {
      title: "H4",
      value: 4,
    },
    {
      title: "H5",
      value: 5,
    },
    {
      title: "H6",
      value: 6,
    },
    {
      title: "H7",
      value: 7,
    },
    {
      title: "H8",
      value: 8,
    },
    {
      title: "H9",
      value: 9,
    },
    {
      title: "H10",
      value: 10,
    },
  ],
  targetQuantity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  productionQuantity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  checkQuantity: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  defectQuantity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  efficiency: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  defect: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  total:{
    target_quantity: 0,
    production_quantity: 0,
    check_quantity: 0,
    check_quantity: 0,
    defect_quantity: 0,
    efficiency: 0,
    defect: 0,
  },
  average: {
    target_quantity: 0,
    production_quantity: 0,
    check_quantity: 0,
    check_quantity: 0,
    defect_quantity: 0,
    efficiency: 0,
    defect: 0,
  },
};

export const employeeReducer = (state, action) => {
  switch (action.type) {
    case "ADD_HOUR": {
      let len = state.hourLists.length;
      if (len) {
        const newVal = {
          title: "H" + (len + 1),
          value: len + 1,
        };
        const newHourLists = [...state.hourLists, newVal];
        const newTargetQuantity = state.targetQuantity;
        newTargetQuantity.push(0);
        const newProductionQuantity = state.productionQuantity;
        newProductionQuantity.push(0);
        const newCheckQuantity = state.checkQuantity;
        newCheckQuantity.push(0);
        const newDefectQuantity = state.defectQuantity;
        newDefectQuantity.push(0);
        const newEfficiency = state.efficiency;
        newEfficiency.push(0);
        const newDefect = state.defect;
        newDefect.push(0);
        return {
          ...state,
          hourLists: newHourLists,
          productionQuantity: newProductionQuantity,
          targetQuantity: newTargetQuantity,
          checkQuantity: newCheckQuantity,
          defectQuantity: newDefectQuantity,
          efficiency: newEfficiency,
          defect: newDefect,
        };
      }
    }
    case "REMOVE_HOUR": {
      const newHourlists = [...state.hourLists];
      newHourlists.pop();
      const newTargetQuantity = state.targetQuantity;
      newTargetQuantity.pop();
      const newProductionQuantity = state.productionQuantity;
      newProductionQuantity.pop();
      const newCheckQuantity = state.checkQuantity;
      newCheckQuantity.pop();
      const newDefectQuantity = state.defectQuantity;
      newDefectQuantity.pop();
      const newEfficiency = state.efficiency;
      newEfficiency.pop();
      const newDefect = state.defect;
      newDefect.pop();
      return {
        ...state,
        hourLists: newHourlists,
      };
    }

    case "EDIT_PRODUCTION_QUANTITY": {
      const newProductionQuantity = state.productionQuantity;
      newProductionQuantity[action.payload.index] = action.payload.value?parseInt(action.payload.value):0;
      state.calculateTotalAndAverage()
      return {
        ...state,
        productionQuantity: newProductionQuantity,
      };
    }

    case "EDIT_TARGET_QUANTITY": {
        console.log("JKHG")
      const newTargetQuantity = state.targetQuantity;
      newTargetQuantity[action.payload.index] = action.payload.value?parseInt(action.payload.value):0;
      return {
        ...state,
        targetQuantity: newTargetQuantity,
      };
    }

    case "EDIT_CHECK_QUANTITY": {
      const newCheckQuantity = state.checkQuantity;
      newCheckQuantity[action.payload.index] = action.payload.value?parseInt(action.payload.value):0;
      return {
        ...state,
        checkQuantity: newCheckQuantity,
      };
    }

    case "EDIT_DEFECT_QUANTITY": {
      const newDefectQuantity = state.defectQuantity;
      newDefectQuantity[action.payload.index] = action.payload.value?parseInt(action.payload.value):0;
      return {
        ...state,
        defectQuantity: newDefectQuantity,
      };
    }

    case "TOTAL_AND_AVERAGE_CHANGE": {
        const newTotal = state.total;
        const newAverage = state.average;
        newTotal.target_quantity = action.payload.targetQuantityTotal;
        newAverage.target_quantity = action.payload.targetQuantityAverage;
        return {
            ...state,
            total: newTotal
        }
    }

    default:
      return state;
  }
};
