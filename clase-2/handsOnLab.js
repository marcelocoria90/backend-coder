/*

productoManager.addProduct(new Product("Producto prueba", "Esto es un producto de prueba", 200, "Sin Imagen", "abc123", 25))

*/


class TickectManager {
    #precioBaseDeGanancia = 0.15

    constructor() {
        this.events = []
    }

    getEventos() {
        return this.events
    }

    addEvent(event) {
        if (this.events.length === 0) {
            event.id = 1
        } else {
            event.id = this.events[this.events.length - 1].id + 1
        }

        event.price = event.price + (event.price * this.#precioBaseDeGanancia)

        this.events.push(event)

        return event
    }

    addUser(eventId, userId) {
        const event = this.events.find(event => event.id === eventId)

        if (!event) { return 'No existe el evento' }

        const user = event.participants.find(user => user === userId)

        if (user) { return 'El usuario ya esta registrado' }

        event.participants.push(userId)
    }

    putEventOnTour(eventId, newPlace, newDate) {
        const event = this.events.find(event => event.id === eventId)

        if (!event) { return 'No existe el evento' }

        const newEvent = {
            ...event,
            place: newPlace,
            date: newDate,
            participants: [],
            id: this.events[this.events.length - 1].id + 1

        }
        this.events.push(newEvent)
    }

}

class Event {
    constructor(name, place, price, capacity = 50, date = new Date().toLocaleDateString()) {
        this.name = name,
            this.place = place,
            this.price = price,
            this.capacity = capacity,
            this.date = date,
            this.participants = []
    }
}


// test 🧪

const ticketManager = new TickectManager()

ticketManager.addEvent(new Event('Evento 1', 'Buenos Aires', 1500))
ticketManager.addEvent(new Event('Evento 2', 'Cordoba', 1000))

ticketManager.addUser(1, 'Divididos')
ticketManager.addUser(1, 'Divididos')
ticketManager.addUser(1, 'Ciro y los Persas')
ticketManager.addUser(2, 'Ciro y los Persas')

ticketManager.putEventOnTour(1, 'Rosario', '20/10/2023')

const events = ticketManager.getEventos()

console.log(events)


