// Фиксированная шапка при скролле
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Плавная прокрутка для якорных ссылок
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const swiper = new Swiper('.specialties-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    autoHeight: false, // <<== Важно
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        320: {
        slidesPerView: 1,
        },
        768: {
        slidesPerView: 2,
        },
        1024: {
        slidesPerView: 3,
        },
    },
});

// Загрузка новостей
document.addEventListener('DOMContentLoaded', function() {
    const newsGrid = document.querySelector('.news-grid');
    

    const newsData = [
        {
            date: '15.05.2025',
            title: 'День открытых дверей',
            content: 'Приглашаем всех желающих на день открытых дверей 25 мая 2025 года.'
        },
        {
            date: '28.04.2025 ',
            title: 'Неделя психологии',
            content: 'Открытая лекция клинического психолога Л. В. Богатыревой на тему «Профессиональное выгорание в педагогическом коллективе» для преподавателей колледжа'
        },
        {
            date: '05.05.2025',
            title: 'ТАВИАК на Самбекских высотах',
            content: 'Студенты нашего колледжа посетили Народный военно-исторический музейный комплекс Великой Отечественной войны «Самбекские высоты»'
        }
    ];

    // Генерация карточек новостей
    newsData.forEach(news => {
        const newsCard = document.createElement('div');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <div class="news-date">${news.date}</div>
            <div class="news-content">
                <h3>${news.title}</h3>
                <p>${news.content}</p>
            </div>
        `;
        newsGrid.appendChild(newsCard);
    });
});