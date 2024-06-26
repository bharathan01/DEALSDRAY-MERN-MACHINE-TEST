const BASE_URL = "http://localhost:8000/api";

export const logInUser = async (userCredentials) => {
  try {
    const isUserLogIn = await fetch(BASE_URL + "/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCredentials),
      credentials: "include",
    });

    const userData = await isUserLogIn.json();
    if (userData?.message?.error) return userData?.message;
    if (userData?.userData) {
      localStorage.setItem("username", userData.userData.f_username);
      return { success: true };
    }
  } catch (error) {
    return error;
  }
};

export const createEmp = async (formData) => {
  try {
    const createData = await fetch(BASE_URL + "/employee/create-employe", {
      method: "POST",
      body: formData,
      credentials: "include",
    });
    const result = await createData.json();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export const employeDetails = async () => {
  try {
    const empData = await fetch(BASE_URL + "/employee/getempdetails", {
      method: "GET",
      credentials: "include",
    });
    const employeDetails = await empData.json();
    return employeDetails;
  } catch (error) {
    console.log(error);
  }
};
export const deleteEmployeeData = async (empId) => {
  try {
    const empData = await fetch(
      `${BASE_URL}/employee/delete-employe/${empId}`,
      {
        method: "GET",
        credentials: "include",
      }
    );
    const employeDetails = await empData.json();
    return employeDetails;
  } catch (error) {
    console.log(error);
  }
};
export const singleEmployeDetails = async (id) => {
  try {
    const empData = await fetch(`${BASE_URL}/employee/employee-details/${id}`, {
      method: "GET",
      credentials: "include",
    });
    const employeDetails = await empData.json();
    return employeDetails;
  } catch (error) {
    console.log(error);
  }
};
export const editEmpDetails = async (empDetails, id) => {
  try {
    const empData = await fetch(`${BASE_URL}/employee/edit-employe/${id}`, {
      method: "POST",
      body: empDetails,
      credentials: "include",
    });
    const employeDetails = await empData.json();
    return employeDetails;
  } catch (error) {
    console.log(error);
  }
};
