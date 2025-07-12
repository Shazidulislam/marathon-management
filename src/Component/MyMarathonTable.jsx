import React from 'react';

const MyMarathonTable = () => {
    return (
        <div>
             <tbody className="border-b dark:bg-gray-50 dark:border-gray-300">
                                    <tr>
                                        <td className="px-3 text-2xl font-medium dark:text-gray-600">A</td>
                                        <td className="px-3 py-2">
                                            <p>Dwight Adams</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <span>UI Designer</span>
                                            <p className="dark:text-gray-600">Spirit Media</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>555-873-9812</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>dwight@adams.com</p>
                                        </td>
                                        <td className="px-3 py-2">
                                            <p>71 Cherry Court, SO</p>
                                            <p className="dark:text-gray-600">United Kingdom</p>
                                        </td>
                                        <td className="px-3 py-2">
                                           
                                        </td>
                                    </tr>
                                </tbody>
        </div>
    );
};

export default MyMarathonTable;