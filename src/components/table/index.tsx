import React from "react";

// @ts-ignore
import { ScrollSync, ScrollSyncPane } from "react-scroll-sync";

type Props = {
    headers: string[];
    rows: JSX.Element[][];
    className?: string;
};

const Table = (props: Props) => (
    <div className={props.className}>
        <ScrollSync>
            <div className="w-full">
                <ScrollSyncPane>
                    <div className="flex text-center w-full overflow-x-auto pl-2 pr-4 font-medium text-gray-400">
                        <span className="w-14">No</span>

                        {props.headers.map((header, i) => (
                            <span className="flex-1 px-4" key={i}>
                                {header}
                            </span>
                        ))}
                    </div>
                </ScrollSyncPane>

                {props.rows.map((row, i) => (
                    <ScrollSyncPane key={i}>
                        <div
                            className={
                                "flex w-full overflow-x-auto py-2 rounded-xl mt-2 text-center pl-2 pr-4 " +
                                (i % 2 === 0 ? "bg-gray-100" : "bg-gray-300")
                            }
                        >
                            <div className="w-14 px-4">{i + 1}</div>

                            {row.map((_row, i) => (
                                <div className="flex-1 px-4" key={i}>
                                    {_row}
                                </div>
                            ))}
                        </div>
                    </ScrollSyncPane>
                ))}
            </div>
        </ScrollSync>
    </div>
);

export default Table;
