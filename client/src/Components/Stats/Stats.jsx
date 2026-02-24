import React from "react";
import "./Stats.css";

const StatsArea = () => {
  return (
    <section className="stats-area-h">
      <div className="stat-box-h">
        <div className="stats-item-h">
          <h2 className="count-h">
            200<span>+</span>
          </h2>
          <p>Smart Contract Projects</p>
        </div>
      </div>

      <div className="stat-box-h">
        <div className="stats-item-h">
          <h2 className="count-h">
            300<span>+</span>
          </h2>
          <p>MLM, DeFi Projects</p>
        </div>
      </div>

      <div className="stat-box-h">
        <div className="stats-item-h">
          <h2 className="count-h">
            50<span>+</span>
          </h2>
          <p>Token ICO Launchpad</p>
        </div>
      </div>

      <div className="stat-box-h">
        <div className="stats-item-h">
          <h2 className="count-h">
            10<span>+</span>
          </h2>
          <p>CMC, CG &amp; Exchange Listing</p>
        </div>
      </div>
    </section>
  );
};

export default StatsArea;
