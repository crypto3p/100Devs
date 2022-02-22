document.querySelector('#check').addEventListener('click', check)

function check() {
    const day = document.querySelector('#day').value


    if (day.toLowerCase() == 'wednesday' || day.toLowerCase() == 'friday') {
        document.getElementById('response').innerHTML = 'Class Day!'
    }

    else if (day.toLowerCase() == 'saturday' || day.toLowerCase() == 'sunday') {
        document.getElementById('response').innerHTML = 'Weekend!'
    }

    else if (day.toLowerCase() == 'monday' || day.toLowerCase() == 'tuesday' || day.toLowerCase() == 'thursday') {
        document.getElementById('response').innerHTML = 'Code Practice'
    }

    else {
        document.getElementById('response').innerHTML = 'Typo?'
    }
}