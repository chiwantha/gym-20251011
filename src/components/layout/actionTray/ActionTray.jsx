import NavBtn from "@/components/buttons/navBtn/NavBtn";

const ActionTray = ({ children, closeTray, state, title, data }) => {
  return (
    <div
      className={`fixed top-[50px] right-0 h-[calc(100vh-50px)] 
        p-4 bg-gray-100 border-l border-[#4364BF]/40
        transition-transform duration-300 ease-in-out space-y-4
        w-[90%] sm:w-[80%] md:w-[60%]  lg:w-[50%] xl:w-[45%] 2xl:w-[35%] z-40
        ${state ? "translate-x-0" : "translate-x-full "}`}
    >
      <div className="flex justify-between items-center h-12 border-b border-gray-300 pb-4">
        <h2 className="text-2xl font-medium">{title || `Slide Tray`}</h2>
        <NavBtn icon={`X`} state={state} click={() => closeTray(false)} />
      </div>
      {children}
    </div>
  );
};

export default ActionTray;
