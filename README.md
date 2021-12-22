# Mini Project: Student Management

## Router

### Use react-router-dom

## with typescript: add pakage @type/react-router-dom

/login:
/admin: layout

/admin/\*
feature: /admin/dashboard
feature: /admin/students

auth/ authentication:

- login
- sing up/ regisrer
- forget password

Click login

- Call api to login
- Success --> redirect Admin page
- Failed --> show Error

authSaga
2 action not exitst together
LOOP

- if login watch logout
- else watch login
  handle
  LOGIN LOGOUT

Login

- call login API to get token + userinfo
- set Token to localstorage
- redirect to admin page

Logout

- Clear token from localstorage
- redirect to login page
