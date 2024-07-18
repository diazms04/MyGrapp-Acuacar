export class User {
    // ipserver = "http://localhost:5500"
    ipserver = "https://cb42f619-5500.use2.devtunnels.ms";
    
    async getUser(id) {
        console.log("🚀 ~ User ~ getUser ~ url:", this.ipserver)
        id = id || ""
        const url = `${this.ipserver}/api/v1/client?_id=${id}`;
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
    }

    async postUser() {
        const objectRegister = [{
            NombreEmpresa: "Restaurante Osso Panda",
            Usuario: "bearpanda",
            Contrasena: "contrasenia",
            Sector: "Gastronomico",
            Poliza: 942832,
            AnioEvaluado: 2023,
            Convenio: "2023-2024",
            EstadoGrap: 56
        }]

        const url = `${this.ipserver}/api/v1/client`;
        const params = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(objectRegister)
        };

        const response = await fetch(url, params);
        const result = await response.json();

        return result;
    }
}