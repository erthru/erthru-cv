import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

type Props = {
    className?: string;
};

const SearchInput = (props: Props) => {
    const [search, setSearch] = useState("");

    return (
        <div className={"bg-gray-100 px-2 py-1 rounded-full flex items-center " + props.className}>
            {search === "" && <FontAwesomeIcon icon={faSearch} className="text-gray-400 ml-2" />}

            <input
                type="text"
                placeholder="Search"
                onChange={(e) => setSearch(e.target.value)}
                className="ml-2 bg-transparent placeholder-gray-400 focus:outline-none"
            />
        </div>
    );
};

export default SearchInput;
