import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUpdateEmployeeMutation } from "../../store/services/employeeService";

const EmployeeUpdate = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "Muddasir Nazir",
    salary: "200000",
    department: "MERN Stack",
  });
  const [createEmployee, response] = useUpdateEmployeeMutation();
  console.log("new employee response", response);
  const handleCreateEmployee = () => {
    createEmployee(employee);
  };
  useEffect(() => {
    if (response.isSuccess) {
      navigate("/");
    }
  }, [response.isSuccess]);
  return (
    <div className="lading-page bg-themeColor2 h-screen flex">
      <div className="wrap wrapWidth flex flex-col">
        <div>Employee Update</div>
        <button className="button border" onClick={handleCreateEmployee}>
          Create Employee
        </button>
      </div>
    </div>
  );
};

export default EmployeeUpdate;
