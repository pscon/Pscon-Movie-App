import React from "react";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [left, setLeft] = React.useState(0);

  const activeTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    onTabChange(tab, index);
  };

  const activeStyle = "text-white font-bold";

  return (
    <div className="h-[35px] bg-white rounded-[20px] p-1">
      <div className="flex items-center h-[30px] relative">
        {data.map((tab, index) => (
          <span
            onClick={() => activeTab(tab, index)}
            key={index}
            className={`h-full flex items-center justify-center w-[100px] text-primary-black text-sm z-[1] cursor-pointer relative ${
              selectedTab === index ? activeStyle : ""
            } `}
          >
            {tab}
          </span>
        ))}
        <span
          className="h-[30px] w-[100px] rounded-2xl bg-gradient-custom absolute left-0 transition-all ease duration-300"
          style={{ left }}
        />
      </div>
    </div>
  );
};

export default SwitchTabs;
