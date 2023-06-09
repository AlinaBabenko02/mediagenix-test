import React from "react";
import { Input, Button, Table } from "antd";
import { useToggleState } from "../data/utils/useToggleState";
import { CreateEventModal } from "./components/modals/create-event-modal";
import { useEventsTable } from "./hooks/useEventsTable";
import "./styles.scss";

const { Search } = Input;

const App: React.FC = () => {
  const [createEventModalShown, setCreateEventModalShown] =
    useToggleState(false);

  const {
    table: { columns, events, loading },
    search: { searchValue, setSearchValue },
  } = useEventsTable();

  return (
    <>
      <div className="root">
        <div className="rootHeader">
          <Search
            placeholder="Search events"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            onSearch={setSearchValue}
            enterButton
            className="rootHeaderSearch"
          />
          <Button type="primary" onClick={setCreateEventModalShown}>
            Create event
          </Button>
        </div>
        <Table columns={columns} dataSource={events} loading={loading} />
      </div>
      {createEventModalShown && (
        <CreateEventModal
          createEventModalShown={createEventModalShown}
          setCreateEventModalShown={setCreateEventModalShown}
        />
      )}
    </>
  );
};

export default App;
