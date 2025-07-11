import React from "react";

export const Dashboard = () => {
  return (
    <>
      <div className="flex flex-1 flex-col gap-4 p-4">
        <div className="grid auto-rows-min gap-4 md:grid-cols-4">
          <div className="aspect-video rounded-xs bg-green-400/50">
            Approved
          </div>
          <div className="aspect-video rounded-xs bg-orange-400/50">
            Pending
          </div>
          <div className="aspect-video rounded-xs bg-gray-400/50">
            Rescheduled
          </div>
          <div className="aspect-video rounded-xs bg-red-400/50">Rejected</div>
        </div>
        <div className="grid min-h-[100vh] flex-1 auto-rows-min gap-4 md:min-h-min md:grid-cols-2">
          <div className="aspect-video rounded-xs bg-gray-400/50">Graph 1</div>
          <div className="aspect-video rounded-xs bg-gray-400/50">Graph 2</div>
        </div>
      </div>
    </>
  );
};
