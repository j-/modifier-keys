import * as React from 'react';
import classNames from 'classnames';
import Key, { Props } from './Key';
import './KeyMac.css';

const KeyMac: React.FC<Props> = ({ className, ...props }) => (
  <Key className={classNames('KeyMac', className)} {...props} />
);

const KeyMacShift: React.FC<Props> = (props) => (
  <KeyMac className="KeyMacShift" {...props}>
    <span className="Key-text">
      Shift
    </span>
  </KeyMac>
);

const KeyMacCommand: React.FC<Props> = (props) => (
  <KeyMac className="KeyMacCommand" {...props}>
    <span className="Key-text">
      Command
    </span>
    <svg className="Key-symbol" width={64} height={64} viewBox="0 0 64 64">
      <path
        d="M46 56c-5.514 0-10-4.486-10-10v-6h-8v6c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10h6v-8h-6c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10v6h8v-6c0-5.514 4.486-10 10-10s10 4.486 10 10-4.486 10-10 10h-6v8h6c5.514 0 10 4.486 10 10s-4.486 10-10 10zM40 40v6c0 3.308 2.692 6 6 6s6-2.692 6-6-2.692-6-6-6h-6zM18 40c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6v-6h-6zM28 36h8v-8h-8v8zM40 24h6c3.308 0 6-2.692 6-6s-2.692-6-6-6-6 2.692-6 6v6zM18 12c-3.308 0-6 2.692-6 6s2.692 6 6 6h6v-6c0-3.308-2.692-6-6-6z"
      />
    </svg>
  </KeyMac>
);

const KeyMacControl: React.FC<Props> = (props) => (
  <KeyMac className="KeyMacControl" {...props}>
    <span className="Key-text">
      Control
    </span>
    <svg className="Key-symbol" width={64} height={64} viewBox="0 0 64 64">
      <path
        d="M46.001 28a1.994 1.994 0 01-1.506-.683L32 13.037l-12.495 14.28a2 2 0 11-3.01-2.634l14-16a2 2 0 013.01 0l14 16A2 2 0 0146.001 28z"
      />
    </svg>
  </KeyMac>
);

const KeyMacOption: React.FC<Props> = (props) => (
  <KeyMac className="KeyMacOption" {...props}>
    <span className="Key-text">
      Option
    </span>
    <svg className="Key-symbol" width={64} height={64} viewBox="0 0 64 64">
      <path
        d="M58 52H42a2 2 0 01-1.828-1.188L24.7 16H6a2 2 0 010-4h20c.79 0 1.507.466 1.828 1.188L43.3 48H58a2 2 0 110 4zM58 16H38a2 2 0 010-4h20a2 2 0 010 4z"
      />
    </svg>
  </KeyMac>
);

export {
  KeyMacShift,
  KeyMacCommand,
  KeyMacControl,
  KeyMacOption,
};
