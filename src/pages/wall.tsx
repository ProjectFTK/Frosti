import Wall from "@components/Wall/Wall";
import clsx from "clsx";
import { Button, Highlight } from '@components/Button';
import { Center } from '@components/Center';
import { useState } from "react";
import Form from "@components/Wall/Form";
export default function Beta() {

    const sampleProspects = [
        { id: 1, name: 'Alice Johnson', username: 'alicej' },
        { id: 2, name: 'Bob Smith', username: 'bob_smith' },
        { id: 3, name: 'Carol White', username: 'carolw' },
    ];

    const sampleCompanies = [
        { id: 1, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png', name: 'Tech Corp', location: 'San Francisco, CA' },
        { id: 2, logo: 'https://banner2.cleanpng.com/20190731/uqk/kisspng-google-icon-1713874997698.webp', name: 'InnovateX', location: 'New York, NY' },
        { id: 3, logo: 'https://www.logo.wine/a/logo/SpaceX/SpaceX-White-Dark-Background-Logo.wine.svg', name: 'Dev Labs', location: 'Austin, TX' },
    ];

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <div className="container mx-auto p-8">
                <div className="flex mt-4 items-end mx-9">
                    <h1 className={clsx('text-gradient text-6xl md:text-8xl')}>
                        The Wall
                    </h1>
                    <Button
                        intent="primary"
                        onClick={() => setShowModal(true)}
                        size="lg"
                        className="ml-4 md:mb-3 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
                    >
                        + Add Yourself
                    </Button>
                </div>

                <p className={clsx('mt-2 mb-12 text-lg text-gray-300 md:text-xl mx-9')}>
                    Get ahead of the crowd. Join The Wall to boost your profile’s presence and match potential when we launch.
                </p>

                <Wall prospects={sampleProspects} companies={sampleCompanies} />
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative my-6 mx-auto border rounded-xl bg-black" style={{ width: '50%' }}>
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full  outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Adding to The Wall...
                                    </h3>
                                    <button
                                        className="p-1 ml-auto border-0 float-right leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="h-6 w-6 text-3xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                {/*body*/}
                                <Form />
                                {/*footer*/}

                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>

    )
}