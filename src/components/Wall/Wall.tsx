import React from 'react';
import { WallProps } from '../../types/wall';

const Wall: React.FC<WallProps> = ({ prospects, companies }) => {
    const maxLength = Math.max(prospects?.length ?? 0, companies?.length ?? 0); // To ensure equal rows

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* Employers Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Recruiters/ Hiring Managers</h2>
                    <div className="space-y-4">
                        {companies && Array.from({ length: maxLength }).map((_, index) => (
                            <div key={index} className="flex items-center">
                                {companies[index] ? (
                                    <>
                                        <span className="text-lg leading-tight text-white">{index + 1}.</span>
                                        <p className="ml-4 text-lg leading-tight text-white ">
                                            {companies[index].name}
                                        </p>
                                    </>
                                ) : (
                                    <span className="text-gray-400 hidden sm:inline"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Prospects Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Job Seekers</h2>
                    <div className="space-y-4">
                        {prospects && Array.from({ length: maxLength }).map((_, index) => (
                            <div key={index} className="flex items-center">
                                {prospects[index] ? (
                                    <>
                                        <span className="text-lg leading-tight text-white">{index + 1}.</span>
                                        <p className="ml-4 text-lg leading-tight text-white ">
                                            {prospects[index].name}
                                        </p>
                                    </>
                                ) : (
                                    <span className="text-gray-400"></span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Wall;
