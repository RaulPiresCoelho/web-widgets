/**
 * This file was generated from Switch.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { ActionValue, EditableValue } from "mendix";

export interface SwitchContainerProps {
    name: string;
    tabIndex?: number;
    id: string;
    booleanAttribute: EditableValue<boolean>;
    action?: ActionValue;
}

export interface SwitchPreviewProps {
    readOnly: boolean;
<<<<<<< HEAD
    renderMode?: "design" | "xray" | "structure";
=======
>>>>>>> daa3fce04 (Add DE localization to rich-text-web)
    booleanAttribute: string;
    action: {} | null;
}
