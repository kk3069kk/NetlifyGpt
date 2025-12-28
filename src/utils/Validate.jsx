export const ValidateData = (email,password)=>{
   //regex
    const emailchecker = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const passwordchecker = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);

    if(!emailchecker) return "Email is not correct";
    if(!passwordchecker) return "PassWord is Wrong";

    return null;

}