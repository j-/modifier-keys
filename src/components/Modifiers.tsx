import * as React from 'react';
import { useModifiers } from '../use-modifiers';
import { ModifierWin, ModifierMac } from '../modifiers';
import {
  KeyWinShift,
  KeyWinControl,
  KeyWinAlt,
  KeyWinWindows,
} from './KeyWin';
import {
  KeyMacShift,
  KeyMacControl,
  KeyMacOption,
  KeyMacCommand,
} from './KeyMac';
import './Modifiers.css';

const Modifiers: React.FC = () => {
  const modifiers = useModifiers();
  return (
    <table className="Modifiers">
      <colgroup>
        <col style={{ width: '8em' }} />
        <col style={{ width: '5em' }} />
        <col style={{ width: '5em' }} />
        <col style={{ width: '6em' }} />
      </colgroup>
      <thead>
        <tr>
          <th><code>Shift</code></th>
          <th><code>Control</code></th>
          <th><code>Meta</code></th>
          <th><code>Alt</code></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><KeyWinShift pressed={modifiers[ModifierWin.SHIFT]} /></td>
          <td><KeyWinControl pressed={modifiers[ModifierWin.CONTROL]} /></td>
          <td><KeyWinAlt pressed={modifiers[ModifierWin.ALT]} /></td>
          <td><KeyWinWindows pressed={modifiers[ModifierWin.WINDOWS]} /></td>
        </tr>
        <tr>
          <td><KeyMacShift pressed={modifiers[ModifierMac.SHIFT]} /></td>
          <td><KeyMacControl pressed={modifiers[ModifierMac.CONTROL]} /></td>
          <td><KeyMacOption pressed={modifiers[ModifierMac.OPTION]} /></td>
          <td><KeyMacCommand pressed={modifiers[ModifierMac.COMMAND]} /></td>
        </tr>
      </tbody>
    </table>
  );
};

export default Modifiers;
