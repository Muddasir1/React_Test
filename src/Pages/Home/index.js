import React, { useState } from "react";

import Loader from "../../components/Loader";
import { useGetEmployeeListQuery } from "../../store/services/employeeService";

const Main = () => {
  const { data, isLoading, isSuccess } = useGetEmployeeListQuery();
  console.log("Employee Data", data);

  return (
    <div className="lading-page bg-themeColor2 h-screen flex">
      <div className="wrap wrapWidth flex flex-col">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="tbl flex flex-col">
            <div className="tbl-col flex items-center w-full">
              <div className="col-item flex items-center flex-1 font-semibold text-lg">
                Id
              </div>
              <div className="col-item flex items-center flex-1 font-semibold text-lg">
                Name
              </div>
              <div className="col-item flex items-center flex-1 font-semibold text-lg">
                Salary
              </div>
              <div className="col-item flex items-center flex-1 font-semibold text-lg">
                Department
              </div>
            </div>
            {data.map((item, index) => (
              <div key={index} className="tbl-col flex items-center w-full">
                <div className="col-item flex items-center flex-1">
                  {item.id}
                </div>
                <div className="col-item flex items-center flex-1">
                  {item.name}
                </div>
                <div className="col-item flex items-center flex-1">
                  {item.salary}
                </div>
                <div className="col-item flex items-center flex-1">
                  {item.department}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Main;
