import axios from "axios";

const API = axios.create({
  baseURL: 'https://butere.onrender.com',
});

API.interceptors.request.use((req) => {
  if (localStorage.getItem("profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }
  return req;
});

export const createStudent = (formData) => API.post("/student", formData);








export const deleteUser = (id) => API.delete(`/stats/${id}`);

export const signIn = (formData) => API.post("/signin", formData);
export const signUp = (formData) => API.post("/signup", formData);
export const googleSignIn = (result) => API.post("/users/googleSignIn", result);
export const getMiles = () => API.get("/milestone");
export const createComplain = (formData) => API.post("/teacher", formData);
export const createVacation = (formData) => API.post("/tender", formData);
export const createMilestone = (id) => API.post(`/news`);
export const deleteVacation = (id) => API.delete(`/vacation/${id}`);
export const deleteComplain = (id) => API.delete(`/complain/${id}`);
export const getTeacherByUser = (userId) => API.get(`/teacher/userStudents/${userId}`);

export const createMessage = (formData) => API.post("/tenderform", formData);

export const createcaretakernotice = (formData) => API.post("/meeting", formData);
// export const getTenants = () => API.get("/tenant");
// export const getTenant = (id) => API.get(`/tenant/${id}`);
// export const deleteTenant = (id) => API.delete(`/tenant/${id}`);
// export const getTenantByUser = (userId) => API.get(`/tenant/userProjects/${userId}`);

export const createCaretakerExpense = (formData) => API.post("/ass", formData);
export const createRevision = (formData) => API.post("/revisions", formData);
export const getRevision = () => API.get("/revisions");
export const createCaretakerVacation = (formData) => API.post("/events", formData);
// export const getTenants = () => API.get("/tenant");
// export const getTenant = (id) => API.get(`/tenant/${id}`);
// export const deleteTenant = (id) => API.delete(`/tenant/${id}`);
// export const getTenantByUser = (userId) => API.get(`/tenant/userProjects/${userId}`);


export const createsummary = (formData) => API.post("/results", formData);
export const deleteSummary = (id) => API.delete(`/summary/${id}`);

export const createFess = (formData) => API.post("/fees", formData);

export const createTenant = (formData) => API.post("/news", formData);
export const getTenants = () => API.get("/tenant");
export const getTenant = (id) => API.get(`/tenant/${id}`);
export const deleteTenant = (id) => API.delete(`/tenant/${id}`);
export const getTenantByUser = (userId) => API.get(`/tenant/userProjects/${userId}`);

//users
export const getUsers=()=>API.get('/usercrud/allusers')
export const deleteUsers = (id) => API.delete(`/usercrud/delete/${id}`);



export const createnotice = (formData) => API.post("/stuff", formData);
export const getnotices = () => API.get("/notice");
export const getnotice = (id) => API.get(`/notice/${id}`);
export const deletenotice = (id) => API.delete(`/notice/${id}`);
export const getNoticeByUser = (userId) => API.get(`/notice/userProjects/${userId}`);

export const createTour = (formData) => API.post("/fees", formData);
export const getTours = () => API.get("/project");
export const getTour = (id) => API.get(`/project/${id}`);
export const deleteTour = (id) => API.delete(`/users/delete/${id}`);
export const updateTour = (updatedTourData, id) =>
  API.patch(`/project/${id}`, updatedTourData);
  export const getProjectsByUser = (userId) => API.get(`/student/userStudents/${userId}`);
  export const getMilesByUser = (userId) => API.get(`/milestone/miles/${userId}`);
  export const createMile = (updateddata) => API.post("/milestone", updateddata);

export const getToursBySearch = (searchQuery) =>
  API.get(`/project/search?searchQuery=${searchQuery}`);

export const getTagTours = (tag) => API.get(`/tour/tag/${tag}`);
export const getRelatedTours = (tags) => API.post(`/tour/relatedTours`, tags);
export const likeTour = (id) => API.patch(`/tour/like/${id}`);
export const  createCareTakers = (formData) => API.get('/teacher' ,formData);
export const getCaretaker = () => API.post('/caretaker');
export const getCaretakerByUser = (userId) => API.patch('/caretaker');