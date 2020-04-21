import * as React from 'react';
import classNames from 'classnames';
import Key, { Props } from './Key';
import './KeyWin.css';

const KeyWin: React.FC<Props> = ({ className, ...props }) => (
  <Key className={classNames('KeyWin', className)} {...props} />
);

const KeyWinShift: React.FC<Props> = (props) => (
  <KeyWin className="KeyWinShift" {...props}>
    <span className="Key-text">
      Shift
    </span>
  </KeyWin>
);

const KeyWinControl: React.FC<Props> = (props) => (
  <KeyWin className="KeyWinControl" {...props}>
    <span className="Key-text">
      Ctrl
    </span>
  </KeyWin>
);

const KeyWinAlt: React.FC<Props> = (props) => (
  <KeyWin className="KeyWinAlt" {...props}>
    <span className="Key-text">
      Alt
    </span>
  </KeyWin>
);

const KeyWinWindows: React.FC<Props> = (props) => (
  <KeyWin className="KeyWinWindows" {...props}>
    <svg className="Key-symbol" width={64} height={64} viewBox="0 0 64 64">
      <path
        d="M.022 32L0 12.495l24-3.259V32zM28 8.655L59.992 4v28H28zM60 36l-.008 28L28 59.499V36zM24 58.99L.02 55.703.019 36h23.982z"
      />
    </svg>
  </KeyWin>
);

export {
  KeyWinShift,
  KeyWinControl,
  KeyWinAlt,
  KeyWinWindows,
};
