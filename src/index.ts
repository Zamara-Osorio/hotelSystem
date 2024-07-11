import { Hotel } from './models/hotel';
import { Reserva } from './models/reserva';
import promptSync from 'prompt-sync';

function Menu() {
    const hotel = new Hotel();

    console.log(" BIENVENIDOS A NUESTRO HOTEL ");

    let choice = 0;
    while (choice < 7) {
        console.log("\n Menú:");
        console.log("1. Buscar la  reservación por ID");
        console.log("2. Listar todas las reservaciones ordenadas por la fecha de check-in");
        console.log("3. Agregar una nueva reservación");
        console.log("4. Eliminar una reservación por el ID");
        console.log("5. Obtener todas las reservaciones por el check-in de forma asendente");
        console.log("6. Visualizar todas las reservaciones");
        console.log("7. Salir del menú");

       
        const prompt = promptSync();
        const choice = prompt("Ingrese la opción deseada");

        switch (choice) {
            case "1":
                try {
                    const id = parseInt(prompt("Ingresar el ID de la reserva que desea buscar:") || '0');
                    const reserva = hotel.searchReserva(id);
                    console.log("La Reservación fue encontrada:", reserva);
                } catch (error) {
                    console.log("ERROR")
                }
                break;
            case "2":
                const sortedReservas = hotel.getSortReservas();
                console.log("Las Reservaciones ordenadas por fechas de check-in:", sortedReservas);
                break;
            case "3":
                try {
                    const newReserva = new Reserva(
                        parseInt(prompt("Ingrese el ID de la reservación nueva ") || '0'),
                        prompt("Ingrese su nombre :") || '',
                        prompt("Ingrese la fecha deseada de check-in (dd/mm) ") || '',
                        prompt("Ingrese la fecha deseada de check-out (dd/mm) ") || '',
                        parseInt(prompt("Ingrese el número de la habitación ") || '0')
                    );
                    hotel.addReserva(newReserva);
                    console.log("Reservación nueva para agregada:", newReserva);
                } catch (error) {
                    console.log("ERROR")
                }
                break;
            case "4":
                try {
                    const idToRemove = parseInt(prompt("Ingrese el ID de la reservación a eliminar:") || '0');
                    const removedReserva = hotel.removeReserva(idToRemove);
                    console.log("Reservación ha sido eliminada:", removedReserva);
                } catch (error) {
                    console.log("ERROR")
                }
                break;
            case "5":
                const allReservas = hotel.getSortReservas();
                console.log("MostrarTodas las reservaciones:", allReservas);
                break;
            case "6":
                   const getReservation =hotel.getReservation()
                   console.table(getReservation)
                    break;
            case "7":
                console.log("Estamos saliendo del sistema");
                break;
            default:
                console.log("Opción no valida. Ingrese un número del 1 al 7.");
                break;
        }
    }
}

Menu();
