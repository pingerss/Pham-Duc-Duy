import students from '../../mock/students.json';
// Import thêm icon Edit và Trash2 cho cột Actions
import { Mars, Venus, Edit, Trash2 } from "lucide-react";

function FomatUser() {
    return (
        // Bọc table trong một div để tạo viền bo tròn, đổ bóng và cho phép cuộn ngang trên mobile
        <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
            <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">Name</th>
                        <th className="px-6 py-4">Enrollment Date</th>
                        <th className="px-6 py-4 text-center">Gender</th>
                        <th className="px-6 py-4 text-center">Status</th>
                        <th className="px-6 py-4 text-center">Actions</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {/* Bỏ dấu ; ở cuối vòng lặp map để tránh bị in thừa ra màn hình */}
                    {students.map(student => (
                        <tr key={student.id} className="hover:bg-gray-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-gray-900">
                                #{student.id}
                            </td>
                            <td className="px-6 py-4">
                                {student.first_name}
                            </td>
                            <td className="px-6 py-4">
                                {student.enrollment_date}
                            </td>
                            <td className="px-6 py-4 flex justify-center">
                                {/* Đã sửa lại Venus cho Nữ (hồng) và Mars cho Nam (xanh) */}
                                {student.gender === 'Female' ? (
                                    <Venus className="text-pink-500 w-5 h-5" />
                                ) : (
                                    <Mars className="text-blue-500 w-5 h-5" />
                                )}
                            </td>
                            <td className="px-6 py-4 text-center">
                                {/* Chuyển <p> thành <span> inline-block để khối màu ôm sát chữ hơn */}
                                {student.is_active ? (
                                    <span className="inline-block bg-green-100 text-green-700 rounded-full px-3 py-1 text-xs font-medium">
                                        Active
                                    </span>
                                ) : (
                                    <span className="inline-block bg-red-100 text-red-700 rounded-full px-3 py-1 text-xs font-medium">
                                        Inactive
                                    </span>
                                )}
                            </td>
                            <td className="px-6 py-4">
                                <div className="flex items-center justify-center gap-3">
                                    <button className="text-gray-400 hover:text-blue-600 transition-colors" title="Edit">
                                        <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="text-gray-400 hover:text-red-600 transition-colors" title="Delete">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default FomatUser;