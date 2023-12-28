import Table from "./component/Table";
import { Tabs, Tab } from '@material-ui/core';
import { useState } from "react";
import React from "react";

function App() {

  const [currentTab, setCurrentTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setCurrentTab(newValue);
  };
  const allData = [
  { id:1,CCLtStatus: 'status1', counterpartName: 'counterpart1', SDSId: 'id1', marketTier: 'tier1', LEI: 'lei1', reporting: 'reporting1', tableType: 'type1' },
  { id:2,CCLtStatus: 'status2', counterpartName: 'counterpart2', SDSId: 'id2', marketTier: 'tier2', LEI: 'lei2', reporting: 'reporting2', tableType: 'type2' },
  { id:3,CCLtStatus: 'status3', counterpartName: 'counterpart3', SDSId: 'id3', marketTier: 'tier3', LEI: 'lei3', reporting: 'reporting3', tableType: 'type1' },
  { id:4,CCLtStatus: 'status4', counterpartName: 'counterpart4', SDSId: 'id4', marketTier: 'tier4', LEI: 'lei4', reporting: 'reporting4', tableType: 'type2' },
  { id:5,CCLtStatus: 'status5', counterpartName: 'counterpart5', SDSId: 'id5', marketTier: 'tier5', LEI: 'lei5', reporting: 'reporting5', tableType: 'type1' },
  { id:6,CCLtStatus: 'status6', counterpartName: 'counterpart6', SDSId: 'id6', marketTier: 'tier6', LEI: 'lei6', reporting: 'reporting6', tableType: 'type2' },
  { id:7,CCLtStatus: 'status7', counterpartName: 'counterpart7', SDSId: 'id7', marketTier: 'tier7', LEI: 'lei7', reporting: 'reporting7', tableType: 'type1' },
  { id:8,CCLtStatus: 'status8', counterpartName: 'counterpart8', SDSId: 'id8', marketTier: 'tier8', LEI: 'lei8', reporting: 'reporting8', tableType: 'type2' },
  { id:9,CCLtStatus: 'status9', counterpartName: 'counterpart9', SDSId: 'id9', marketTier: 'tier9', LEI: 'lei9', reporting: 'reporting9', tableType: 'type1' },
  { id:10,CCLtStatus: 'status10', counterpartName: 'counterpart10', SDSId: 'id10', marketTier: 'tier10', LEI: 'lei10', reporting: 'reporting10', tableType: 'type2' },
  ];

  const redData = allData.filter(row => row.tableType === 'type1');
  const greenData = allData.filter(row => row.tableType !== 'type1');

  return (
    <div className="App">

      <div>
      <Tabs value={currentTab} onChange={handleTabChange}>
          <Tab label="All" style={currentTab === 0 ? { backgroundColor: 'rgba(128, 128, 128, 0.5)' } : {}} />
          <Tab label="Red" style={currentTab === 1 ? { backgroundColor: 'rgba(255, 0, 0, 0.5)' } : {}} />
          <Tab label="Green" style={currentTab === 2 ? { backgroundColor: 'rgba(0, 128, 0, 0.5)' } : {}} />
      </Tabs>
      {currentTab === 0 && <Table  data={allData} />}
      {currentTab === 1 && <Table data={redData} />}
      {currentTab === 2 && <Table  data={greenData} />}
      </div>
      
    </div>
  );
}

export default App;