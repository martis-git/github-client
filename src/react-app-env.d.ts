/// <reference types="react-scripts" />

declare type PropsWithChildren<T = {}> = import("react").PropsWithChildren<T>;

declare type Callback = () => void;

declare type Nullable<T> = T | null;

declare type Component = () => JSX.Element;