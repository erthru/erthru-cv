import React from "react";

type Props = {
    type?: string;
    disabled?: boolean;
    value?: string;
    placeholder?: string;
    className?: string;
    required?: boolean;
    onChange?(e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>): void;
    isTextArea?: boolean;
};

const Input = (props: Props) => {
    const classes = "py-1 px-4 focus:outline-none rounded-xl bg-gray-100 " + props.className;

    return props.isTextArea ? (
        <textarea
            disabled={props.disabled}
            value={props.value}
            placeholder={props.placeholder}
            className={classes}
            required={props.required}
            onChange={props.onChange}
        />
    ) : (
        <input
            type={props.type}
            disabled={props.disabled}
            value={props.value}
            placeholder={props.placeholder}
            className={classes}
            required={props.required}
            onChange={props.onChange}
        />
    );
};
export default Input;
