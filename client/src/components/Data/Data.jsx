import { useState, memo } from "react";
import DataTab from "./DataTab";
import RegionDataRaw from "./RegionData/RegionData";
import ReasonDataRaw from "./ReasonData/ReasonData";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RegionData = memo(RegionDataRaw);
const ReasonData = memo(ReasonDataRaw);

const Data = () => {
  const [tab, setTab] = useState(0);
  return (
    <div className="my-40">
      <DataTab tab={tab} setTab={setTab} />
      <TransitionGroup>
        <CSSTransition key={tab} timeout={1000} classNames="fade">
          {tab === 0 ? <RegionData /> : <ReasonData />}
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
};

export default Data;
