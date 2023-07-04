import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserList = () => {
    const navigate = useNavigate()
    const userList = useSelector((state: any) => state.tasks.tasks);
    console.log('uselist', userList);
    const handleAddUser = () => {
        navigate("/create")
    }
    return (
      <div className="text-center">
        <div className="">
          <h1>Redux CRUD User app</h1>
        </div>
        <div className="flex justify-end">
          <div className="">
            <button className="p-2 border bg-black text-white" onClick={handleAddUser}>Add user</button>
          </div>
        </div>
        <div className="border border-black h-screen">
          <table className="w-screen">
            <thead>
              <tr className="border border-black">
                <th className="border border-black">ID</th>
                <th className="border border-black">Name</th>
                <th className="border border-black">Email</th>
                <th className="border border-black">Actions</th>
              </tr>
            </thead>
            <tbody className="">
              <tr className="border border-black">
                <td className="border border-black p-1">1</td>
                <td className="border border-black p-1">Dave Gamache</td>
                <td className="border border-black p-1">dave@gmail.com</td>
                <td className="border border-black p-1">
                  <button className="p-2 bg-red-500 text-white mx-2">Delete</button>
                  <button className="p-2 bg-blue-500 text-white mx-2">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}
export default UserList;