import * as React from 'react';
import classNames from 'classnames';
import './Key.css';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  pressed: boolean;
}

const Key: React.FC<Props> = ({ pressed, className, ...props }) => (
  <div className={classNames('Key', pressed && 'Key--pressed', className)} {...props} />
);

export default Key;
