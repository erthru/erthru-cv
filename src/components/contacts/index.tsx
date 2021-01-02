import { faFacebookF, faGithubAlt, faInstagram, faLinkedinIn, faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Store } from "../../plugins/store";
import { updateContact } from "../../plugins/store/contact/actions";
import Button from "../button";
import Card from "../card";
import Input from "../input";
import ProgressBar from "../progress-bar";

const Contacts = () => {
    const dispatch = useDispatch();
    const contact = useSelector((store: Store) => store.contact.contact);
    const isFetchingContact = useSelector((store: Store) => store.contact.isFetchingContact);
    const isUpdatingContact = useSelector((store: Store) => store.contact.isUpdatingContact);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [githubUrl, setGithubUrl] = useState("");
    const [linkedinUrl, setLinkedinUrl] = useState("");
    const [mediumUrl, setMediumUrl] = useState("");
    const [facebookUrl, setFacebookUrl] = useState("");
    const [instagramUrl, setInstagramUrl] = useState("");

    useEffect(() => {
        if (Object.keys(contact).length > 0) {
            setAddress(contact.address!!);
            setPhone(contact.phone!!);
            setEmail(contact.email!!);
            setGithubUrl(contact.githubUrl!!);
            setLinkedinUrl(contact.linkedinUrl!!);
            setMediumUrl(contact.mediumUrl!!);
            setFacebookUrl(contact.facebookUrl!!);
            setInstagramUrl(contact.instagramUrl!!);
        }
    }, [contact]);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(
            updateContact({
                address: address,
                phone: phone,
                email: email,
                githubUrl: githubUrl,
                linkedinUrl: linkedinUrl,
                mediumUrl: mediumUrl,
                facebookUrl: facebookUrl,
                instagramUrl: instagramUrl,
            })
        );
    };

    return (
        <Card className="p-6 flex w-full">
            {isFetchingContact && <ProgressBar color="red-600" className="mx-auto text-4xl" />}

            {!isFetchingContact && (
                <form onSubmit={onSubmit} className="flex flex-wrap w-full md:w-2/3 lg:w-1/2">
                    <div className="w-full flex">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faHome} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={address}
                            onChange={(e) => setAddress(e.currentTarget.value)}
                            placeholder="Input Address"
                            isTextArea
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faPhone} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={phone}
                            onChange={(e) => setPhone(e.currentTarget.value)}
                            placeholder="Input Phone Number"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faEnvelope} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            placeholder="Input Email Address"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faGithubAlt} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={githubUrl}
                            onChange={(e) => setGithubUrl(e.currentTarget.value)}
                            placeholder="Input Github Url"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faLinkedinIn} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={linkedinUrl}
                            onChange={(e) => setLinkedinUrl(e.currentTarget.value)}
                            placeholder="Input Linkedin Url"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faMediumM} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={mediumUrl}
                            onChange={(e) => setMediumUrl(e.currentTarget.value)}
                            placeholder="Input Medium Url"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faFacebookF} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={facebookUrl}
                            onChange={(e) => setFacebookUrl(e.currentTarget.value)}
                            placeholder="Input Facebook Url"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <div className="w-full flex items-center mt-4">
                        <div className="w-8 h-8 flex">
                            <FontAwesomeIcon icon={faInstagram} className="text-gray-600 text-2xl mx-auto" />
                        </div>

                        <Input
                            className="ml-3 w-full"
                            value={instagramUrl}
                            onChange={(e) => setInstagramUrl(e.currentTarget.value)}
                            placeholder="Input Instagram Url"
                            required
                            disabled={isUpdatingContact}
                        />
                    </div>

                    <Button className="mt-6" type="submit" color="green-600" isLoading={isUpdatingContact}>
                        Save
                    </Button>
                </form>
            )}
        </Card>
    );
};

export default Contacts;
