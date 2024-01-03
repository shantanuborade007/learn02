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
    { id: 1, CCLtStatus: 'status1', counterpartName: 'counterpart1', SDSId: 'id1', marketTier: 'tier1', LEI: 'lei1', reporting: 'reporting1', tableType: 'type1', stage: 'demoStage1', margin: 'demoMargin1', 'ball-in': 'demoBallIn1', riskmitigation: 'demoRiskMitigation1', 'cftc_p1_p2': 'demoCFTC1', 'global_kyc': 'demoGlobalKYC1', 'global_retail_client': 'demoGlobalRetailClient1' },
    { id: 2, CCLtStatus: 'status2', counterpartName: 'counterpart2', SDSId: 'id2', marketTier: 'tier2', LEI: 'lei2', reporting: 'reporting2', tableType: 'type2', stage: 'demoStage2', margin: 'demoMargin2', 'ball-in': 'demoBallIn2', riskmitigation: 'demoRiskMitigation2', 'cftc_p1_p2': 'demoCFTC2', 'global_kyc': 'demoGlobalKYC2', 'global_retail_client': 'demoGlobalRetailClient2' },
    { id: 3, CCLtStatus: 'status3', counterpartName: 'counterpart3', SDSId: 'id3', marketTier: 'tier3', LEI: 'lei3', reporting: 'reporting3', tableType: 'type1', stage: 'demoStage3', margin: 'demoMargin3', 'ball-in': 'demoBallIn3', riskmitigation: 'demoRiskMitigation3', 'cftc_p1_p2': 'demoCFTC3', 'global_kyc': 'demoGlobalKYC3', 'global_retail_client': 'demoGlobalRetailClient3' },
    { id: 4, CCLtStatus: 'status4', counterpartName: 'counterpart4', SDSId: 'id4', marketTier: 'tier4', LEI: 'lei4', reporting: 'reporting4', tableType: 'type2', stage: 'demoStage4', margin: 'demoMargin4', 'ball-in': 'demoBallIn4', riskmitigation: 'demoRiskMitigation4', 'cftc_p1_p2': 'demoCFTC4', 'global_kyc': 'demoGlobalKYC4', 'global_retail_client': 'demoGlobalRetailClient4' },
    { id: 5, CCLtStatus: 'status5', counterpartName: 'counterpart5', SDSId: 'id5', marketTier: 'tier5', LEI: 'lei5', reporting: 'reporting5', tableType: 'type1', stage: 'demoStage5', margin: 'demoMargin5', 'ball-in': 'demoBallIn5', riskmitigation: 'demoRiskMitigation5', 'cftc_p1_p2': 'demoCFTC5', 'global_kyc': 'demoGlobalKYC5', 'global_retail_client': 'demoGlobalRetailClient5' },
    { id: 6, CCLtStatus: 'status6', counterpartName: 'counterpart6', SDSId: 'id6', marketTier: 'tier6', LEI: 'lei6', reporting: 'reporting6', tableType: 'type2', stage: 'demoStage6', margin: 'demoMargin6', 'ball-in': 'demoBallIn6', riskmitigation: 'demoRiskMitigation6', 'cftc_p1_p2': 'demoCFTC6', 'global_kyc': 'demoGlobalKYC6', 'global_retail_client': 'demoGlobalRetailClient6' },
    { id: 7, CCLtStatus: 'status7', counterpartName: 'counterpart7', SDSId: 'id7', marketTier: 'tier7', LEI: 'lei7', reporting: 'reporting7', tableType: 'type1', stage: 'demoStage7', margin: 'demoMargin7', 'ball-in': 'demoBallIn7', riskmitigation: 'demoRiskMitigation7', 'cftc_p1_p2': 'demoCFTC7', 'global_kyc': 'demoGlobalKYC7', 'global_retail_client': 'demoGlobalRetailClient7' },
    { id: 8, CCLtStatus: 'status8', counterpartName: 'counterpart8', SDSId: 'id8', marketTier: 'tier8', LEI: 'lei8', reporting: 'reporting8', tableType: 'type2', stage: 'demoStage8', margin: 'demoMargin8', 'ball-in': 'demoBallIn8', riskmitigation: 'demoRiskMitigation8', 'cftc_p1_p2': 'demoCFTC8', 'global_kyc': 'demoGlobalKYC8', 'global_retail_client': 'demoGlobalRetailClient8' },
    { id: 9, CCLtStatus: 'status9', counterpartName: 'counterpart9', SDSId: 'id9', marketTier: 'tier9', LEI: 'lei9', reporting: 'reporting9', tableType: 'type1', stage: 'demoStage9', margin: 'demoMargin9', 'ball-in': 'demoBallIn9', riskmitigation: 'demoRiskMitigation9', 'cftc_p1_p2': 'demoCFTC9', 'global_kyc': 'demoGlobalKYC9', 'global_retail_client': 'demoGlobalRetailClient9' },
    { id: 10, CCLtStatus: 'status10', counterpartName: 'counterpart10', SDSId: 'id10', marketTier: 'tier10', LEI: 'lei10', reporting: 'reporting10', tableType: 'type2', stage: 'demoStage10', margin: 'demoMargin10', 'ball-in': 'demoBallIn10', riskmitigation: 'demoRiskMitigation10', 'cftc_p1_p2': 'demoCFTC10', 'global_kyc': 'demoGlobalKYC10', 'global_retail_client': 'demoGlobalRetailClient10' },
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