// Импортим отдельно, т.к. фича экспортит из себя много подмодулей
import * as Auth from "./auth";

// FIXME: Нормализовать экспорты к единому виду

export * from "./repo-explorer";
export * from "./repo-details";
export { default as UserInfo } from "./user-info";
export { default as RepoList } from "./repo-list";
export { Auth };
