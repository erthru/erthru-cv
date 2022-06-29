import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import Card from "../card";
import "./index.css";

const Document = () => {
    const profile = useSelector((store: Store) => store.profile.profile);
    const contact = useSelector((store: Store) => store.contact.contact);
    const formalEducations = useSelector((store: Store) => store.formalEducation.formalEducations);
    const languages = useSelector((store: Store) => store.language.languages);
    const workExperiences = useSelector((store: Store) => store.workExperience.workExperiences);
    const stacks = useSelector((store: Store) => store.stack.stacks);
    const [isDocumentHovered, setIsDocumentHovered] = useState(false);

    return (
        <Card className="p-6 flex flex-wrap w-full">
            <div
                className="mx-auto flex relative overflow-y-hidden overflow-y-auto bg-gray-50 area-to-print"
                onMouseEnter={() => setIsDocumentHovered(true)}
                onMouseLeave={() => setIsDocumentHovered(false)}
                style={{ width: "210mm", height: "297mm" }}
            >
                {isDocumentHovered && (
                    <div
                        className="h-full w-full flex items-center absolute cursor-pointer not-to-print"
                        style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
                        onClick={() => window.print()}
                    >
                        <div className="bg-white w-32 h-10 rounded-xl mx-auto flex items-center">
                            <span className="mx-auto font-bold">PRINT</span>
                        </div>
                    </div>
                )}

                <div className="w-72 h-full bg-gray-900 flex flex-wrap text-gray-300 px-4">
                    <span className="w-full text-center mt-4 text-xl font-medium uppercase">{profile.fullName}</span>

                    <div className="flex w-full mt-10">
                        <img alt="avatar" src={profile.avatarUrl} className="rounded-full w-32 h-32 mx-auto" style={{ objectFit: "cover" }} />
                    </div>

                    <span className="w-full text-center mt-14 uppercase font-medium text-lg">Address</span>
                    <span className="w-full text-center mt-2 text-sm">{contact.address}</span>
                    <span className="w-full text-center mt-10 uppercase font-medium text-lg">Phone</span>
                    <span className="w-full text-center mt-2 text-sm">{contact.phone}</span>
                    <span className="w-full text-center mt-10 uppercase font-medium text-lg">Email</span>
                    <span className="w-full text-center mt-2 text-sm">{contact.email}</span>
                    <span className="w-full text-center mt-10 uppercase font-medium text-lg">Github</span>
                    <span className="w-full text-center mt-2 text-sm">{contact.githubUrl}</span>
                    <span className="w-full text-center mt-10 uppercase font-medium text-lg">Medium</span>
                    <span className="w-full text-center mt-2 text-sm">{contact.mediumUrl}</span>
                    <span className="w-full text-center mt-10 uppercase font-medium text-lg">LinkedIn</span>
                    <span className="w-full text-center mt-2 text-sm">{contact.linkedinUrl}</span>

                    <div className="h-full" />
                </div>

                <div className="w-6 h-full bg-red-500" />
                <div className="w-6 h-full bg-gray-400" />

                <div className="w-full px-4 pt-4 flex flex-wrap">
                    <span className="w-full text-red-400 text-xl">SUMMARY</span>
                    <span className="w-full text-sm text-gray-800">{profile.intro}</span>
                    <span className="w-full text-red-400 text-xl mt-4">EDUCATIONS</span>

                    {formalEducations.map((formalEducation) => (
                        <div className="w-full flex flex-wrap text-sm" key={formalEducation.id}>
                            <span className="w-fulltext-gray-800 font-bold">{formalEducation.timeframe}</span>

                            <span className="w-full text-gray-800">
                                {formalEducation.place} - {formalEducation.majors}
                            </span>

                            <div className="h-full" />
                        </div>
                    ))}

                    <span className="w-full text-red-400 text-xl mt-4">LANGUAGES</span>

                    <ul className="list-disc ml-5 text-sm">
                        {languages.map((language) => (
                            <li key={language.id}>
                                {language.lang} ({language.level})
                            </li>
                        ))}
                    </ul>

                    <span className="w-full text-red-400 text-xl mt-4">WORK EXPERIENCES</span>

                    {workExperiences.map((workExperience, i) => (
                        <div className={"w-full flex flex-wrap text-sm " + (i === 0 ? "" : "mt-2")} key={i}>
                            <span className="w-full text-gray-800 font-bold">{workExperience.timeframe}</span>
                            <span className="w-full text-gray-800">{workExperience.place}</span>

                            <ul className="list-disc ml-8">
                                {workExperience.activities?.map((activity, i) => (
                                    <li key={i}>{activity}</li>
                                ))}
                            </ul>

                            <div className="h-full" />
                        </div>
                    ))}

                    <span className="w-full text-red-400 text-xl mt-4">STACKS</span>

                    {stacks.map((stack, i) => (
                        <div className={"flex flex-wrap w-full text-sm " + (i > 0 ? "mt-2" : "")} key={i}>
                            <span className="w-full text-gray-800 font-bold capitalize">{stack.department}</span>

                            {stack.skills!!.map((skill, i1) => (
                                <span className="pr-1" key={i1}>
                                    {skill}
                                    {i1 !== stack.skills!!.length - 1 && ","}
                                </span>
                            ))}

                            <div className="h-full" />
                        </div>
                    ))}

                    <div className="h-full" />
                </div>
            </div>
        </Card>
    );
};

export default Document;
