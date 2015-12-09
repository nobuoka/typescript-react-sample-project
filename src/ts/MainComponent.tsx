/// <reference path="..\..\typings\bundle.d.ts" />
import * as React from 'react';
import {ReactSampleItem} from './ReactSampleItem'

export interface IState {}

export interface IProps extends React.Props<any> {}

export class MainComponent extends React.Component<IProps, IState> {
    render(): JSX.Element {
        return (
            <div>
              <ReactSampleItem value={{ v1: "Good", v2: 100 }}>This is sample project</ReactSampleItem>
              <ReactSampleItem value={{ v1: "Awesome!", v2: 205 }}>Very useful!!!</ReactSampleItem>
            </div>
        );
    }
}
