const savol =alert("Sizda hozir random sonlar chiqishni boshlidi😁")
const randomRaqam =Math.round(Math.random() * 100);
alert(`Random orqali chiqqan son: ${randomRaqam}`)
const question = confirm("Biz random sonni 2 ga kopaytirmoqchi va bo'lmoqchimiz! ")
alert(`
    Random orqali chiqigan son: ${randomRaqam}
    biz uni 2 ga kopaytirib: ${randomRaqam * 2} sonini chiqardik,
    va shu soni 2 ga bolib: ${randomRaqam / 2} sonini chiqardik,
    va shu soni 3 ka bolgandagi qoldik: ${randomRaqam % 3} sonini chiqardik
    `)
