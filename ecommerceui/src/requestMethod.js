import axios from "axios";

const BASE_URL=`http://localhost:9000/api/`;
const Token="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDU4NDdiZTQ0NmNhYWQwMmExMjFjOSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4Mjc2NzUyNSwiZXhwIjoxNjgzMDI2NzI1fQ.tMLMf-Aps-A0OsUCgv7GbQZfFS0qCjoqp7DmDNxFRwM"

export const publicRequest=axios.create({
    baseURL:BASE_URL,
});


export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{token:`Bearer ${Token}`},
});
