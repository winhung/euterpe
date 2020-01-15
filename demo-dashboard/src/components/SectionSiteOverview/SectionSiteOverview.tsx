import React, { FC } from "react";

const SectionSiteOverview: FC<{}> = () => {
  return (
    <div className="my-4">
      <h3>Overview</h3>
      <p className="mb-4">Highlights of scan site</p>

      <div className="flex -mx-4">
        <div className="w-full sm:1/2 px-4">
          <div className="border border-gray-400 rounded shadow p-4">
            donut goes here
          </div>
        </div>

        <div className="w-full sm:1/2 px-4">
          <div className="border border-gray-400 rounded shadow p-4 mb-4">
            <h3 className="mb-2 ">Total Links</h3>
            <h2>4,620</h2>
          </div>

          <div className="border border-gray-400 rounded shadow p-4">
            <h3 className="mb-2 ">Total Broken Links</h3>
            <h2 className="mb-2">36</h2>
            <p>Internal: 28 External: 8</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSiteOverview;
