import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeeService = createApi({
  reducerPath: "employee",
  tagTypes: "employees",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (builder) => {
    return {
      updateEmployee: builder.mutation({
        query: (data) => {
          return {
            url: "https://641b1f8e1f5d999a445bf904.mockapi.io/Employee",
            method: "POST",
            body: data,
          };
        },
        invalidatesTags: ["employees"],
      }),

      getEmployeeList: builder.query({
        query: () => {
          return {
            url: `https://641b1f8e1f5d999a445bf904.mockapi.io/Employee`,
            method: "GET",
          };
        },
        providesTags: ["employees"],
      }),
    };
  },
});
export const { useUpdateEmployeeMutation, useGetEmployeeListQuery } =
  employeeService;
export default employeeService;
