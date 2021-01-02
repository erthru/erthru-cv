import React from "react";
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

    return (
        <Card className="p-6 flex w-full">
            <div className="w-full flex overflow-y-hidden">
                <div className="mx-auto flex bg-gray-50 area-to-print" style={{ width: "210mm", height: "297mm" }}>
                    <div className="w-72 h-full bg-gray-900 flex flex-wrap text-gray-300 px-6">
                        <span className="w-full text-center mt-10 text-xl font-medium uppercase">{profile.fullName}</span>

                        <div className="flex w-full mt-10">
                            <img src={profile.avatarUrl} className="rounded-full w-32 h-32 mx-auto" style={{ objectFit: "cover" }} />
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

                    <div className="w-full px-3 pt-10 flex flex-wrap">
                        <span className="w-full text-red-400 text-2xl">PROFILE</span>
                        <span className="w-full mt-2 text-gray-800">{profile.intro}</span>
                        <span className="w-full text-red-400 text-2xl mt-8">FORMAL EDUCATION</span>

                        {formalEducations.map((formalEducation) => (
                            <div className="w-full flex mt-2 flex-wrap" key={formalEducation.id}>
                                <span className="w-fulltext-gray-800 font-bold">{formalEducation.timeframe}</span>

                                <span className="w-full text-gray-800">
                                    {formalEducation.place} - {formalEducation.majors}
                                </span>

                                <div className="h-full" />
                            </div>
                        ))}

                        <span className="w-full text-red-400 text-2xl mt-8">LANGUAGES</span>

                        <ul className="list-disc ml-5">
                            {languages.map((language) => (
                                <li>
                                    {language.lang} ({language.level})
                                </li>
                            ))}
                        </ul>

                        <span className="w-full text-red-400 text-2xl mt-8">WORK EXPERIENCES</span>

                        {workExperiences.map((workExperience, i) => (
                            <div className={"w-full flex flex-wrap " + (i === 0 ? "mt-2" : "mt-4")}>
                                <span className="w-full text-gray-800 font-bold">{workExperience.timeframe}</span>
                                <span className="w-full text-gray-800">{workExperience.place}</span>

                                <ul className="list-disc ml-8">
                                    {workExperience.activities?.map((activity) => (
                                        <li>{activity}</li>
                                    ))}
                                </ul>

                                <div className="h-full" />
                            </div>
                        ))}

                        <div className="h-full" />
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default Document;
