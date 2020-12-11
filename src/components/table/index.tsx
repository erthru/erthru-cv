import React, { useRef } from "react";

type Props = {
    headers: string[];
    rows: JSX.Element[][];
    className?: string;
};

const Table = (props: Props) => (
    <div className={props.className}>
        <div className="flex text-center w-full overflow-x-auto pl-2 pr-4 font-medium text-gray-600">
            <span className="w-14">No</span>

            {props.headers.map((header, i) => (
                <span className="flex-1 px-4" key={i}>
                    {header}
                </span>
            ))}
        </div>

        {props.rows.map((row, i) => (
            <div className="flex w-full overflow-x-auto border-2 border-gray-200 py-2 rounded-xl mt-2 text-center pl-2 pr-4" key={i}>
                <div className="w-14 px-4">{i + 1}</div>

                {row.map((_row) => (
                    <div className="flex-1 px-4">{_row}</div>
                ))}
            </div>
        ))}
    </div>
);

export default Table;
