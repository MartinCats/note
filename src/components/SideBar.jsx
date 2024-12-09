import { useState } from "react";

const SideBar = () => {
  const [notebooks, setNotebooks] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newNotebook, setNewNotebook] = useState("");

  const handleAddNotebook = () => {
    if (newNotebook.trim() !== "") {
      setNotebooks([...notebooks, newNotebook]);
      setNewNotebook("");
      setIsAdding(false);
    }
  };

  return (
    <div>
      <h1 className="header px-6 py-4">Note !</h1>
      <button className="w-32 h-12 p-2 m-4 rounded-xl flex justify-around items-center bg-orange-300/50 shadow-lg">
        <span>+</span>
        <span>New note</span>
      </button>
      <p className="sub-header px-6 py-2 flex items-center justify-between">
        <span>NOTEBOOKS</span>
        <button
          className="w-12"
          onClick={() => setIsAdding(true)}
        >
          +
        </button>
      </p>
      <div className="flex flex-col py-3 px-6 text-start">
        {notebooks.map((notebook, index) => (
          <button key={index} className="w-full text-left py-2">
            {notebook}
          </button>
        ))}
        {isAdding && (
          <div className="mt-2 flex items-center">
            <input
              type="text"
              className="border px-2 py-1 rounded-lg w-full"
              placeholder="Enter notebook name"
              value={newNotebook}
              onChange={(e) => setNewNotebook(e.target.value)}
            />
            <button
              className="ml-2 px-4 py-1 bg-orange-300 text-white rounded-lg font-semibold"
              onClick={handleAddNotebook}
            >
              Add
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
