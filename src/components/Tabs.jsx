export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;

  // Created array with three tabs.
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {/* Mapped all the three buttons and rendered them to the front-end as buttons. */}
      {tabs.map((tab, tabIndex) => {
        const numOfTasks =
          tab === "All"
            ? todos.length
            : tab === "Completed"
            ? todos.filter((val) => val.complete).length
            : todos.filter((val) => !val.complete).length;

        return (
          <button
            onClick={() => {
               setSelectedTab(tab) 
            }}
            key={tabIndex}
            className={
              "tab-button " + (tab === selectedTab ? " tab-selected" : " ")
            }
          >
            <h4>
              {tab} <span>({numOfTasks})</span>
            </h4>
          </button>
        );
      })}

      <hr />
    </nav>
  );
}
