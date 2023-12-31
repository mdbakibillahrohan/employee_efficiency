import loadable from "@loadable/component";

const UploadBulletin = loadable(() => import("./UploadButtelin"));
const ShowBulletin = loadable(() => import("./ShowBulletin"));

export default [
  {
    path: "upload",
    component: <UploadBulletin />,
  },
  {
    path: "show",
    component: <ShowBulletin />,
  },
];
