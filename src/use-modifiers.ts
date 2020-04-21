import * as React from "react";
import { Modifier, Modifiers } from "./modifiers";

export const useModifiers = (): Modifiers => {
  const [isShift, setShift] = React.useState(false);
  const [isControl, setControl] = React.useState(false);
  const [isAlt, setAlt] = React.useState(false);
  const [isMeta, setMeta] = React.useState(false);

  React.useEffect(() => {
    const handleModifier = (e: KeyboardEvent | MouseEvent) => {
      setShift(e.getModifierState(Modifier.SHIFT));
      setControl(e.getModifierState(Modifier.CONTROL));
      setAlt(e.getModifierState(Modifier.ALT));
      setMeta(e.getModifierState(Modifier.META));
    };
    const handleBlur = () => {
      setShift(false);
      setControl(false);
      setAlt(false);
      setMeta(false);
    };
    window.addEventListener("keydown", handleModifier);
    window.addEventListener("keyup", handleModifier);
    window.addEventListener("blur", handleBlur);
    return () => {
      window.removeEventListener("keydown", handleModifier);
      window.removeEventListener("keyup", handleModifier);
      window.removeEventListener("blur", handleBlur);
    };
  });

  return {
    [Modifier.SHIFT]: isShift,
    [Modifier.CONTROL]: isControl,
    [Modifier.ALT]: isAlt,
    [Modifier.META]: isMeta,
  };
};
