import { ReactElement } from "react"

export type DynamicModalTypes = {
  open: boolean;
  onClose: () => void;
  variant: "notify" | "customized";
  className?: string;
  description?: string;
  buttonConfirm?: string;
  btnConfirmClick?: () => void;
  buttonCancel?: string;
  title?: string;
  confirmBackgroundColor?: string;
  icon?: ReactElement<any, any>;
  iconColors?: string[];
  children?: any;
};
