import { Reserva } from './reserva';

export class Hotel {
    private reservas: Reserva[];

    constructor() {
        this.reservas = [];
    }

   

    searchReserva(id: number): Reserva {
        const reserva = this.reservas.find(res => res.id === id);
        if (!reserva) {
            throw new Error("La reservación no fue encontrada");
        }
        return reserva;
    }

    getSortReservas(): Reserva[] {
        return [...this.reservas].sort((a, b) => {
            const dateA = new Date(this.formatDate(a.checkIn));
            const dateB = new Date(this.formatDate(b.checkIn));
            return dateA.getTime() - dateB.getTime();
        });
    }
    addReserva(reserva: Reserva): void {
        this.reservas.push(reserva);
    }

    removeReserva(id: number): Reserva | undefined {
        const index = this.reservas.findIndex(res => res.id === id);
        if (index === -1) {
            throw new Error("La reservación que se busca remover no existe");
        }
        const [removedReserva] = this.reservas.splice(index, 1);
        return removedReserva;
    }

    
    getReservation() :void{
         const getReservation = this.reservas
         console.table(getReservation)
}

    getAvailableRooms(checkIn: string, checkOut: string): number[] {
        return [];
    }

    private formatDate(date: string): string {
        const parts = date.split('/');
        return `${parts[1]}/${parts[0]}/${new Date().getFullYear()}`;
    }

    isRoomAvailable(roomNumber: number, checkIn: string, checkOut: string): boolean {
        return true;
    }
}
