import { ReactElement, createElement } from "react";

import { PopupMenuContainerProps } from "../typings/PopupMenuProps";
import { PopupMenu as PopupMenuComponent } from "./components/PopupMenu";
<<<<<<< HEAD
=======
import "./ui/PopupMenu.scss";
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)

export default function PopupMenu(props: PopupMenuContainerProps): ReactElement {
    return <PopupMenuComponent {...props} />;
}
