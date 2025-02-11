export default function Table(){
    return(
        <table className="min-w-full table-auto">
            <thead>
                <tr className="bg-gray-800">
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Name </span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">E-mail</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Salary</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Birthday</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Status</span>
                    </th>
                    <th className="px-16 py-2">
                        <span className="text-gray-200">Actions</span>
                    </th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                <tr className="bg-gray-50 text-center">
                    <td className="flex flex-row items-center px-16 py-2">
                        <img src="#" alt=""/>
                        <span className="text-center ml-2 font-semibold">Daily Tuition</span>
                    </td>
                    <td className="items-center px-16 py-2">
                        
                        <span className="text-center ml-2 font-semibold">Daily Tuition</span>
                    </td>
                    <td className=" items-center px-16 py-2">
                        
                        <span className="text-center ml-2 font-semibold">Daily Tuition</span>
                    </td>
                    <td className=" items-center px-16 py-2">
                        
                        <span className="text-center ml-2 font-semibold">Daily Tuition</span>
                    </td>
                    <td className=" items-center px-16 py-2">
                        
                        <span className="text-center ml-2 font-semibold">Daily Tuition</span>
                    </td><td className="items-center px-16 py-2">
                        
                        <span className="text-center ml-2 font-semibold">Daily Tuition</span>
                        </td>
                </tr>
            </tbody>
        </table>
    )
}