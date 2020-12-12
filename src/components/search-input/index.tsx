import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type Props = {
    className?: string;
    value: string;
    onChange(e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>): void;
};

const SearchInput = (props: Props) => (
    <div className={"bg-gray-100 px-2 py-1 rounded-full flex items-center " + props.className}>
        {props.value === "" && <FontAwesomeIcon icon={faSearch} className="text-gray-600 ml-2" />}

        <input
            type="text"
            placeholder="Search"
            onChange={props.onChange}
            value={props.value}
            className="ml-2 bg-transparent placeholder-gray-600 focus:outline-none"
        />
    </div>
);

export default SearchInput;
