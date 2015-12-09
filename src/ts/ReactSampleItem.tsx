/// <reference path="..\..\typings\bundle.d.ts" />
import * as React from 'react';

export interface ReactSampleValue {
    v1: string;
    v2: number;
}

export interface IState {}

export interface IProps extends React.Props<any> {
    value: ReactSampleValue;
}

export class ReactSampleItem extends React.Component<IProps, IState> {
    render(): JSX.Element {
        return (
            <li>
              <div className="react-sample-item-main">{this.props.children}</div>
              <div className="react-sample-item-value">
                <span>v1: {this.props.value.v1}</span>
                <span>v2: {this.props.value.v2}</span>
              </div>
            </li>
        );
    }
}
