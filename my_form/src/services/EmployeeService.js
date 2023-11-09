import axios from "axios";

//const EMPLOYEE_BASE_REST_API_URL = 'http://localhost:8080/homepage/get';
const EMPLOYEE_BASE_REST_API_POST = 'http://localhost:8080/homepage/post';
const EMPLOYEE_BASE_REST_API_GET = 'http://localhost:8080/homepage';

class EmployeeService{

    getAllEmployees(){
        return axios.get(EMPLOYEE_BASE_REST_API_GET)
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_POST,employee)
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_GET + '/' + employeeId);
    }

    updateEmployee(employeeId,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_GET + '/' + employeeId,employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_GET + '/' + employeeId)
    }
}

export default new EmployeeService();
