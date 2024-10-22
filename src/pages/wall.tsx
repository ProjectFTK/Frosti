import Wall from "@components/Wall/Wall";
import clsx from "clsx";
import { Button, Highlight } from '@components/Button';
import { Center } from '@components/Center';
import { useMemo, useState } from "react";
import Form from "@components/Wall/Form";
import WallApi from "../apis/wall";
import { ICompany, IProspect, WallProps } from "../types/wall";
import WallForm from "@components/Wall/Form";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { Container } from "@components/Container";

export const getServerSideProps = async () => {
    try {
        const response = await WallApi.getTheWall();
        return { props: { wallProps: response.data } };
    } catch (e: any) {
        console.error(e);
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
            props: { wallProps: { prospects: [], companies: [] } },
        };
    }
};

export default function Beta({
    wallProps,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {

    const [showModal, setShowModal] = useState(false);
    const [prospects, setProspects] = useState<IProspect[] | undefined>(wallProps.prospects ?? []);
    const [companies, setCompanies] = useState<ICompany[] | undefined>(wallProps.companies ?? []);

    return (
        <Container>
            <div className="container p-8">
                <div className="flex mt-4 items-end">
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

                <p className={clsx('mt-2 mb-12 text-lg text-gray-300 md:text-xl')}>
                    If you're fed up with endless job boards and the impersonal process, this is your chance to change it. We’re flipping recruiting on its head, putting people first – not algorithms.
                </p>
                <div style={{ minHeight: '50vh' }}>
                    <Wall prospects={prospects} companies={companies} />
                </div>
            </div>

            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div
                            className="relative my-6 mx-auto border rounded-xl bg-black w-full h-full sm:w-1/2 sm:h-auto"
                        >
                            {/* content */}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full outline-none focus:outline-none h-full sm:h-auto">
                                {/* header */}
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
                                {/* body */}
                                <WallForm companies={companies} prospects={prospects} setCompanies={setCompanies} setProspects={setProspects} setShowModal={setShowModal} />
                                {/* footer */}
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>

            ) : null}
        </Container>

    )
}