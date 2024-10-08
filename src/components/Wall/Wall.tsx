import React from 'react';

type Prospect = {
    username: string;
};

type Company = {
    logo: string;
    name: string;
    location: string;
};

type WallProps = {
    prospects: Prospect[];
    companies: Company[];
};

const Wall: React.FC<WallProps> = ({ prospects, companies }) => {
    const maxLength = Math.max(prospects.length, companies.length); // To ensure equal rows

    return (
        <div style={{minHeight:'50vh', maxHeight:'51vh', overflowY:'auto'}} className='mx-9'>
            <div className="grid grid-cols-2 gap-4 ">
                {/* Column Headers */}
                <div>
                    <h2 className="text-2xl font-semibold">Prospects</h2>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold">Companies</h2>
                </div>

                {/* List Items */}
                {Array.from({ length: maxLength }).map((_, index) => (
                    <React.Fragment key={index}>
                        {/* Prospects Section */}
                        {prospects[index] ? (
                            <div className="flex items-center">
                                <span className="text-lg leading-tight text-white">{index + 1}.</span>
                                <p className="ml-4 text-lg leading-tight text-white ">
                                    {prospects[index].username}
                                </p>
                            </div>
                        ) : (
                            <div className="">
                                <span className="text-gray-400"></span>
                            </div>
                        )}

                        {/* Companies Section */}
                        {companies[index] ? (
                            <div className=" flex items-center">
                                <span className="text-lg leading-tight text-white">{index + 1}.</span>

                                <div className="ml-4 flex flex-col">
                                    <p className="text-lg leading-tight text-white">
                                        {companies[index].name}
                                        <span className="ml-2 text-sm" style={{ color: 'gray' }}>{companies[index].location}</span>
                                    </p>

                                </div>
                            </div>
                        ) : (
                            <div className="">
                                <span className="text-gray-400"></span>
                            </div>
                        )}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Wall;
