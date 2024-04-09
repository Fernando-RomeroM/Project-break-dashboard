    //Variables
    const reloj = document.querySelector('#clock')
    let reloj24h = true
    const hora_actual = () => {
        const fecha = new Date()
        let horas = fecha.getHours()
        let minutos = actualizar_hora(fecha.getMinutes())
        let segundos = actualizar_hora(fecha.getSeconds())
        if(reloj24h) {
            reloj.innerText = `${horas} : ${minutos} : ${segundos}`
        } else {
            const amPm = horas >= 12 ? 'PM' :'AM'
            horas = horas % 12 || 12
            reloj.innerText = `${horas} : ${minutos} : ${segundos} : ${amPm}`
        }
        setTimeout(hora_actual, 1000)
    }
    //Funcion para saber si el número es < 10 'Importante'
    const actualizar_hora = numero => {
        return numero < 10 ? '0' + numero : numero
    }
    hora_actual()

    const fechaHoy = document.querySelector('#fecha')

    const fecha_actual = () => {
        const fechah = new Date()
        let mes = fechah.getMonth() + 1
        let dia = fechah.getDate()
        let anno = fechah.getFullYear()

        fechaHoy.innerText = `${mes} / ${dia} / ${anno}`
    }
 
    fecha_actual()