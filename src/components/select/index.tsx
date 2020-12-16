import React from "react";

type Props = {
    options: SelectOption[];
    disabled?: boolean;
    className?: string;
    required?: boolean;
    value?: string;
    onChange?(e: React.FormEvent<HTMLSelectElement>): void;
};

export type SelectOption = {
    value: string;
    text: string;
};

const Select = (props: Props) => (
    <div className={"px-4 rounded-xl bg-gray-100 flex " + props.className}>
        <select
            value={props.value}
            className={"py-1 focus:outline-none w-full bg-transparent"}
            disabled={props.disabled}
            required={props.required}
            onChange={props.onChange}
        >
            {props.options.map((option, i) => (
                <option value={option.value} key={i}>
                    {option.text}
                </option>
            ))}
        </select>
    </div>
);

export default Select;
