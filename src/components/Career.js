import React from 'react';
import lasset from '../images/lasset.png';
import selvice from '../images/selvice.jpg';
import duburi from '../images/duburi.jpg';
import mongol_tori from '../images/mongol_tori.jpg';
import roboway from '../images/roboway.jpeg';
import texon from "../images/texon.png"

const Career = () => {
    return (
        <div className='container mx-auto'>
            <div className=''>
                <h1 className='my-10 py-10 '>
                    <div className="w-full">
                        <table className="table w-full">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Company Name</th>
                                    <th>Position</th>
                                    <th>Time period</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 (Latest Job) */}
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={roboway} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Roboway Labs</div>
                                                <div className="text-sm opacity-50">Bashundhara R/A, Dhaka, Bangladesh</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>CEO and Product Development Manager</td>
                                    <td>2024-2025</td>
                                </tr>

                                {/* row 2 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={texon} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Texon Software Solutions Limited</div>
                                                <div className="text-sm opacity-50">Mirpur, Dhaka</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Robotics and Automation Engineer</td>
                                    <td>2024</td>
                                </tr>

                                {/* row 3 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={lasset} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Laboratory of Space Engineering and Technology</div>
                                                <div className="text-sm opacity-50">Brac University, Dhaka</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Student Researcher</td>
                                    <td>2022-2023</td>
                                </tr>

                                {/* row 4 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={mongol_tori} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Bracu Mongol Tori</div>
                                                <div className="text-sm opacity-50">Brac University</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Engineer at AI and Autonomous System</td>
                                    <td>2020-2021</td>
                                </tr>

                                {/* row 5 */}
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={duburi} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Bracu Duburi</div>
                                                <div className="text-sm opacity-50">Bracu Duburi, Brac University, Dhaka</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Head of Machine Vision and Autonomous System</td>
                                    <td>2020-2022</td>
                                </tr>

                                {/* row 6 (Oldest Job) */}
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={selvice} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">Selvice Logistics Limited</div>
                                                <div className="text-sm opacity-50">Mohakhali, Dhaka, Bangladesh</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>Co-founder and Chief Technology Officer</td>
                                    <td>2019-2021</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Career;
