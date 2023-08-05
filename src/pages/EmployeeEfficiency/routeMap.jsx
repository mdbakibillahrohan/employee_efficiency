import loadable from "@loadable/component";

const AddEmployeeEfficiency = loadable(() => import("./AddEmployeeEfficiency"));
const ShowEmployeeEfficiency = loadable(() =>
  import("./ShowEmployeeEfficiency/")
);

export default [
  {
    path: "add-employee",
    component: <AddEmployeeEfficiency />,
  },
  {
    path: "show-employee",
    component: <ShowEmployeeEfficiency />,
  },
];
