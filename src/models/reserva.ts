export class Reserva {
       id: number;
       nombre: string;
       checkIn: string;
        // formato "dd/mm"
       checkOut: string; 
       numeroHabitacion: number;
   
       constructor(
       id: number, 
       nombre: string, 
       checkIn: string, 
       checkOut: string, 
       numeroHabitacion: number) 
       {
           this.id = id;
           this.nombre = nombre;
           this.checkIn = checkIn;
           this.checkOut = checkOut;
           this.numeroHabitacion = numeroHabitacion;
       }
   }
   