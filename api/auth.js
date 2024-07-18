export class Auth {
    // ipserver = "http://localhost:5500"
    ipserver = "https://cb42f619-5500.use2.devtunnels.ms";
    
    async signin(formData) {
        const url = `${this.ipserver}/api/v1/signin`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        };

        const response = await fetch(url, params);
        const result = await response.json();

        if (response.status != 200) return alert(result.msg);

        return result;
    }

    // async postUser() {
    //     const objectRegister = [{
    //         NombreEmpresa: "Restaurante Osso Panda",
    //         Usuario: "bearpanda",
    //         Contrasena: "contrasenia",
    //         Sector: "Gastronomico",
    //         Poliza: 942832,
    //         AnioEvaluado: 2023,
    //         Convenio: "2023-2024",
    //         EstadoGrap: 56
    //     }]

    //     const url = `${this.ipserver}/api/v1/client`;
    //     const params = {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(objectRegister)
    //     };

    //     const response = await fetch(url, params);
    //     const result = await response.json();

    //     return result;
    // }

    async setDataUser(userData) {
        localStorage.setItem('DataUser', JSON.stringify(userData));
    }

    async getDataUser() {
        return localStorage.getItem('DataUser');
    }
}