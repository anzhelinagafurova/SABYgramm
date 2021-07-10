export default class SabygramService {
    data = [];

    async sendLoginForm(formData){
        let response = await fetch('/', {
            method: 'POST',
            body: {
                login: formData.login,
                password: formData.password
            }
          });
        if(response.ok){
            alert("Logged in!")
        }
    }
}