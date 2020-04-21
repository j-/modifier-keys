export enum Modifier {
  SHIFT = 'Shift',
  CONTROL = 'Control',
  META = 'Meta',
  ALT = 'Alt',
}

export interface Modifiers {
  [Modifier.SHIFT]: boolean;
  [Modifier.CONTROL]: boolean;
  [Modifier.META]: boolean;
  [Modifier.ALT]: boolean;
  [k: string]: boolean;
}

export enum ModifierWin {
  SHIFT = Modifier.SHIFT,
  CONTROL = Modifier.CONTROL,
  WINDOWS = Modifier.META,
  ALT = Modifier.ALT,
}

export enum ModifierMac {
  SHIFT = Modifier.SHIFT,
  CONTROL = Modifier.CONTROL,
  COMMAND = Modifier.META,
  OPTION = Modifier.ALT,
}
