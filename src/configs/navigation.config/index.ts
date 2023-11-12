import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_ITEM,
  NAV_ITEM_TYPE_COLLAPSE,
} from "@/constants/navigation.constant";
import type { NavigationTree } from "@/@types/navigation";

const navigationConfig: NavigationTree[] = [
  {
    key: "home",
    path: "/home",
    title: "Home",
    translateKey: "nav.home",
    icon: "home",
    type: NAV_ITEM_TYPE_ITEM,
    authority: [],
  },
  {
    key: "plans",
    path: "",
    title: "Plans",
    translateKey: "nav.plans.plansMenu",
    icon: "plansMenu",
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [],
    subMenu: [
      {
        key: "plans.list",
        path: "/plans",
        title: "View plans",
        translateKey: "nav.plans.list",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
      },
    ],
  },
  {
    key: "exercises",
    path: "",
    title: "Exercises",
    translateKey: "nav.exercises.exercisesMenu",
    icon: "exercisesMenu",
    type: NAV_ITEM_TYPE_COLLAPSE,
    authority: [],
    subMenu: [
      {
        key: "exercises.list",
        path: "/exercises",
        title: "View exercises",
        translateKey: "nav.exercises.list",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [],
      },
    ],
  },
//   {
//     key: "groupMenu",
//     path: "",
//     title: "Group Menu",
//     translateKey: "nav.groupMenu.groupMenu",
//     icon: "",
//     type: NAV_ITEM_TYPE_TITLE,
//     authority: [],
//     subMenu: [
//       {
//         key: "groupMenu.single",
//         path: "/group-single-menu-item-view",
//         title: "Group single menu item",
//         translateKey: "nav.groupMenu.single",
//         icon: "groupSingleMenu",
//         type: NAV_ITEM_TYPE_ITEM,
//         authority: [],
//         subMenu: [],
//       },
//       {
//         key: "groupMenu.collapse",
//         path: "",
//         title: "Group collapse menu",
//         translateKey: "nav.groupMenu.collapse.collapse",
//         icon: "groupCollapseMenu",
//         type: NAV_ITEM_TYPE_COLLAPSE,
//         authority: [],
//         subMenu: [
//           {
//             key: "groupMenu.collapse.item1",
//             path: "/group-collapse-menu-item-view-1",
//             title: "Menu item 1",
//             translateKey: "nav.groupMenu.collapse.item1",
//             icon: "",
//             type: NAV_ITEM_TYPE_ITEM,
//             authority: [],
//             subMenu: [],
//           },
//           {
//             key: "groupMenu.collapse.item2",
//             path: "/group-collapse-menu-item-view-2",
//             title: "Menu item 2",
//             translateKey: "nav.groupMenu.collapse.item2",
//             icon: "",
//             type: NAV_ITEM_TYPE_ITEM,
//             authority: [],
//             subMenu: [],
//           },
//         ],
//       },
//     ],
//   },
];

export default navigationConfig;
