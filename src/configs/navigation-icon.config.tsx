import { HiOutlineHome, HiClipboardList } from "react-icons/hi";
import { CiDumbbell } from "react-icons/ci";

export type NavigationIcons = Record<string, JSX.Element>;

const navigationIcon: NavigationIcons = {
  home: <HiOutlineHome />,
  plansMenu: <HiClipboardList />,
  exercisesMenu: <CiDumbbell />,
};

export default navigationIcon;
