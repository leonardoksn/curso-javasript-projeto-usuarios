class UserController {
    constructor(formId){
        this.formEl = document.getElementById(formId);

    }

    onSubmit(){
        this.formEl.addEventListener("submit", (e) => {
            e.preventDefault();
          
           this.getValues();

          });
          
    }

    getValues(){

        this.formEl.elements.forEach((field) => {

            if (field.name === "gender") {
              field.checked && (user[field.name] = field.value);
            } else if(field.name === 'admin'){
              user[field.name] =  field.checked;
            }else{
                user[field.name] = field.value;
            }
          });
        
         return new User(
            user.name,
            user.gender,
            user.birth,
            user.country,
            user.email,
            user.password,
            user.photo,
            user.admin
          );

    }
}