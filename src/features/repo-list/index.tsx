import React from "react";
import { useReposQuery } from "./queries.gen";
import { useFilters, useStarring } from "./hooks";
import Tabs from "./tabs";
import Items from "./items";
import Pagination from "./pagination";
import "./index.scss";

type Props = {
    /** @routeParam Логин пользователя текущей страницы */
    username: string;
};

/**
 * @feature Список репозиториев пользователя
 * FIXME: rename to UserRepoList? (coz - user as dep)
 * FIXME: simplify inner components
 */
const RepoList = ({ username }: Props) => {
    const { handleTabClick, handlePaginationClick, config } = useFilters();
    const { data, loading, variables } = useReposQuery({
        variables: { login: username, ...config },
    });
    // TODO: transmit id and viewerHasStarred of nodes to handler func
    const starring = useStarring(variables);
    const { repositories } = data?.user || {};

    return (
        <div className="repo-list">
            <Tabs
                handleTabClick={handleTabClick}
                config={config}
                loading={loading}
                totalCount={repositories?.totalCount}
            />
            <Items
                loading={loading}
                nodes={repositories?.nodes}
                starring={starring}
                username={username}
            />
            <Pagination handlePaginationClick={handlePaginationClick} {...repositories} />
        </div>
    );
};

export default RepoList;
