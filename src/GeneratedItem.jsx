import { useState } from "react";

export default function GeneratedItem({ tweets }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems({
      ...checkedItems,
      [index]: !checkedItems[index],
    });
  };

  return (
    <div>
      {Object.values(tweets).map((tweet, index) => (
        <div key={index} className=" border-b-2 mb-4 pb-2">
          <div className="flex space-x-3 items-baseline">
            <input
              type="checkbox"
              onChange={() => handleCheckboxChange(index)}
              checked={!!checkedItems[index]} // !! converts to boolean
            />
            <div className="">{tweet}</div>
          </div>
          <div className="pl-6">
            {checkedItems[index] && (
              <div className="flex space-x-4 mt-4">
                <div className="mb-2">
                  <p className="font-bold ">Date</p>
                  <input
                    type="date"
                    className="bg-white py-1 px-2 rounded-md"
                    id="scheduleDate"
                    name="scheduleDate"
                    min={new Date().toISOString().split("T")[0]} // Sets today as the minimum date
                    max={
                      new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    } // Sets 30 days from now as maximum date
                  />
                </div>
                <div>
                  <p className="font-bold ">Time</p>
                  <input
                    type="time"
                    className="bg-white py-1 px-2 rounded-md"
                    id="scheduleTime"
                    name="scheduleTime"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
