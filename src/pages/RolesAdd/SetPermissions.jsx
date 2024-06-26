import { useEffect, useState } from "react";
import Divider from "../../components/Divider";
import FormButton from "../../components/FomButton";
import PageHeading from "../../components/PageHeadng";

const SetPermissions = ({
  Modules,
  View,
  SelectedRole,
  onSavePerm,
  backToRoles,
}) => {
  const [Perm, setPerm] = useState(
    SelectedRole.permissions ? [...SelectedRole.permissions] : []
  );
  const initializePermissions = () => {
    if (Perm.length === 0) {
      console.log("zero");
      const initialPermissions = Modules.reduce((permArray, module) => {
        const moduleObj = {
          module_id: module.module_id,

          view: false,
          add: false,
          edit: false,
          delete: false,
        };
        return [...permArray, moduleObj];
      }, []);
      setPerm(initialPermissions);
    }
  };

  useEffect(() => {
    initializePermissions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [Modules]);

  const handleChange = (id, e) => {
    let addNewPerm = true;
    const updatedPerm = Perm.map((permission) => {
      if (permission.module_id === id) {
        addNewPerm = false;
        return { ...permission, [e.target.name]: e.target.checked };
      } else {
        return permission;
      }
    });
    // If the module is not in the list then we need to add it to the list
    if (addNewPerm) {
      updatedPerm.push({ module_id: id, [e.target.name]: e.target.checked });
      console.log("entered new");
    }
    setPerm(updatedPerm);
  };

  const getValue = (name, id) => {
    const foundPerm = Perm.find((permission) => permission.module_id === id);
    if (foundPerm) {
      return foundPerm[name] || false;
    }
    return false;
  };
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        data-aos="fade-down"
        className="bg-[#D8D9DA] p-8 rounded-md shadow-lg w-11/12 "
      >
        {/* <div className="flex justify-center items-center"> */}
        <PageHeading Title={"Premissions for : " + SelectedRole.role_name} />
        {/* </div> */}
        <Divider />

        <table className="w-full border-collapse border border-orange-400">
          <thead>
            <tr className="bg-[#CECFD1] text-[#FF7D31]">
              <th className="border border-orange-300">Module</th>
              <th className="border border-orange-300">View</th>
              <th className="border border-orange-300">Edit</th>
              <th className="border border-orange-300">Delete</th>
              <th className="border border-orange-300">Add</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {Modules.map((module, index) => {
              return (
                <tr key={index}>
                  <td className="border border-orange-300">
                    {module.module_name}
                  </td>
                  <td className="border border-orange-300">
                    <div className="flex items-center justify-center">
                      <input
                        id="view-checkbox"
                        name="view"
                        // checked={Perm[module.module_id]?.view === true}
                        type="checkbox"
                        onChange={(e) => handleChange(module.module_id, e)}
                        className="w-4 h-4 text-orange-600 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                        checked={getValue("view", module.module_id)}
                      />
                    </div>
                  </td>
                  <td className="border border-orange-300">
                    <div className="flex items-center justify-center">
                      <input
                        id="edit-checkbox"
                        name="edit"
                        // checked={Perm[module.module_id]?.edit === true}
                        type="checkbox"
                        onChange={(e) => handleChange(module.module_id, e)}
                        className="w-4 h-4 text-orange-600 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                        checked={getValue("edit", module.module_id)}
                      />
                    </div>
                  </td>
                  <td className="border border-orange-300">
                    <div className="flex items-center justify-center">
                      <input
                        id="delete-checkbox"
                        name="delete"
                        type="checkbox"
                        // checked={Perm[module.module_id]?.delete === true}
                        onChange={(e) => handleChange(module.module_id, e)}
                        className="w-4 h-4 text-orange-600 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                        checked={getValue("delete", module.module_id)}
                      />
                    </div>
                  </td>
                  <td className="border border-orange-300">
                    <div className="flex items-center justify-center">
                      <input
                        id="add-checkbox"
                        name="add"
                        type="checkbox"
                        // checked={Perm[module.module_id]?.add === true}
                        onChange={(e) => handleChange(module.module_id, e)}
                        className="w-4 h-4 text-orange-600 border-orange-300 rounded focus:ring-orange-500 focus:ring-2 dark:bg-orange-700 dark:border-orange-600"
                        checked={getValue("add", module.module_id)}
                      />
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* <div className="flex justify-end mt-1">
          <button className=" mr-2 bg-yellow-400 hover:bg-yellow-500 text-white rounded-md transition-colors duration-700 px-1 flex items-center">
            <p>Check All</p>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-check-all"
              viewBox="0 0 16 16"
            >
              <path d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486z" />
            </svg>
          </button>
        </div> */}
        <div className="flex justify-center items-center">
          <button
            onClick={() => backToRoles(backToRoles)}
            className="border-2 border-orange-500 bg-orange-500 text-white py-1 rounded-md hover:bg-orange-600 hover:border-orange-600 transition duration-700 font-base font-bold mt-3 w-44 mr-2"
          >
            Back
          </button>
          <FormButton
            width="200px"
            value="Save"
            onClick={() => onSavePerm(Perm)}
          />
        </div>
      </div>
    </div>
  );
};
export default SetPermissions;
