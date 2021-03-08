import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { removeStack } from "../../plugins/store/stack/actions";
import { Stack, StackDepartment } from "../../plugins/store/stack/types";
import AddNewButton from "../add-new-button";
import Card from "../card";
import EditButton from "../edit-button";
import ProgressBar from "../progress-bar";
import RemoveButton from "../remove-button";
import SearchInput from "../search-input";
import Table from "../table";

const Stacks = () => {
    const dispatch = useDispatch();
    const stacks = useSelector((store: Store) => store.stack.stacks);
    const isFetchingStacks = useSelector((store: Store) => store.stack.isFetchingStacks);
    const isRemovingStack = useSelector((store: Store) => store.stack.isRemovingStack);
    const [search, setSearch] = useState("");
    const [_stacks, _setStacks] = useState<Stack[]>([]);

    useEffect(() => {
        if (stacks.length > 0) _setStacks(stacks);
    }, [stacks]);

    useEffect(() => {
        if (search !== "") {
            const tempStacks = _stacks.filter(
                (stack) =>
                    stack.skills?.join(", ").toLowerCase().includes(search.toLowerCase()) ||
                    stack.department?.toLowerCase().includes(search.toLocaleLowerCase())
            );

            _setStacks(tempStacks);
        } else {
            _setStacks(stacks);
        }
    }, [search]);

    return (
        <Card className="w-full p-6 flex flex-wrap">
            <div className="flex flex-wrap w-full">
                <AddNewButton to="/admin/stack/add" className="mx-auto md:mx-0" />
                <SearchInput value={search} onChange={(e) => setSearch(e.currentTarget.value)} className="mx-auto md:ml-auto md:mr-0 mt-3 md:mt-0" />
            </div>

            {(isFetchingStacks || isRemovingStack) && <ProgressBar color="red-600" className="mt-4 mx-auto text-4xl" />}

            {!isFetchingStacks && !isRemovingStack && (
                <div className="w-full mt-4">
                    <Table
                        className="w-full"
                        headers={["Department", "Skills", "Actions"]}
                        rows={[
                            ..._stacks.map((stack) => {
                                return [
                                    <span className="capitalize">{stack.department}</span>,
                                    <span>{stack.skills?.join(", ")}</span>,

                                    <div className="flex flex-wrap">
                                        <div className="w-full flex">
                                            <EditButton to={"/admin/stack/edit/" + stack.id} className="mx-auto" />
                                        </div>

                                        <div className="w-full flex mt-1">
                                            <RemoveButton className="mx-auto" onClick={() => dispatch(removeStack(stack.id!!))} />
                                        </div>
                                    </div>,
                                ];
                            }),
                        ]}
                    />
                </div>
            )}
        </Card>
    );
};

export default Stacks;
