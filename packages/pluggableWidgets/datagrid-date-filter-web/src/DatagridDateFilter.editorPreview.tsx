<<<<<<< HEAD
import { enableStaticRendering } from "mobx-react-lite";
enableStaticRendering(true);

=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
import { FilterComponent } from "./components/FilterComponent";
import { withPreviewAdapter } from "./hocs/withPreviewAdapter";

export const preview = withPreviewAdapter(FilterComponent);

export function getPreviewCss(): string {
    return require("react-datepicker/dist/react-datepicker.css");
}
