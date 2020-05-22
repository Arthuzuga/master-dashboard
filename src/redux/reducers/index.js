import { combineReducers } from "redux";
import example from "./example_reducer";
import monsters from "./monsters_reducer";
import equipments from "./equipments_reducer";
import sessions from "./sessions_reducer";
import playerInfo from "./playerInfo_reducer";
import campaigns from "./campaign_reducer"
import selectedCampaign from "./selectCampaign_reducer"
import selectedSession from "./selectSession_reducer"

const rootReducer = combineReducers({
 example,
 monsters,
 equipments,
 sessions,
 playerInfo,
 campaigns,
 selectedCampaign,
 selectedSession,
});

export default rootReducer;
