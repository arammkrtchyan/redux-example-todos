import React from 'react';
import {VisibilityFilters} from "../FilterLink/actions";
import FilterLink from "../FilterLink/FilterLink";

const Footer = () => {
    return (
        <div>
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>
                All
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
                Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
                Completed
            </FilterLink>
        </div>
    )
};

export default Footer;