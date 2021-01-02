import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from "react-redux";
import ProgressBar from "../../components/progress-bar";
import { APP_TITLE } from "../../helpers/environments";
import { Store } from "../../plugins/store";

const Landing = () => {
    const profile = useSelector((store: Store) => store.profile.profile);
    const isFetchingProfile = useSelector((store: Store) => store.profile.isFetchingProfile);

    return (
        <div>
            <Helmet title={"Landing - " + APP_TITLE} />

            {isFetchingProfile && (
                <div className="fixed bg-red-400 h-screen w-screen flex items-center">
                    <ProgressBar color="white" className="mx-auto text-4xl" />
                </div>
            )}

            <div className="flex flex-wrap w-full px-6 pt-6">
                {!isFetchingProfile && (
                    <div className="w-full rounded-xl relative h-72">
                        <img src={profile.coverUrl} alt="cover" className="w-full h-full rounded-xl" style={{ objectFit: "cover" }} />
                        <div className="w-full h-full absolute top-0 rounded-xl" style={{ backgroundColor: "rgba(255, 148, 148, 0.7)" }}></div>

                        <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                            <div className="w-24 h-24 flex mx-auto relative">
                                <img src={profile?.avatarUrl} alt="avatar" className="w-full h-full rounded-full" style={{ objectFit: "cover" }} />
                                <div className="w-full h-full absolute rounded-full"></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Landing;
