const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navlinks")
menuBtn.addEventListener("click",()=>{
    navLinks.classList.toggle("active");
    menuBtn.innerHTML = navLinks.classList.contains("active")
    ? "<i class='ri-close-large-line'></i>"
    : "<i class='ri-menu-line'></i>";
});

document.querySelectorAll(".nav-links a").forEach(link=>{
    link.addEventListener("click", ()=>{
        navLinks.classList.remove('active');
        menuBtn.innerHTML = "<i class='ri-menu-line'></i>"
    });
});

// انیمیشن تایپینگ
// اسم متغیر رو اصلاح کردیم (جمع بستیم)
const texts = [
    'توسعه دهنده فرانت اند',
    'طراح رابط کاربری',
    'متخصص React.js',
    'فریلنسر خلاق',
];

let count = 0;
let index = 0;
let currentText = ''; // اصلاح غلط املایی متغیر
let letter = '';

function type() {
    if (count === texts.length) {
        count = 0;
    }
    
    currentText = texts[count]; // استفاده از نام اصلاح شده
    // اصلاح متد از slics به slice
    letter = currentText.slice(0, ++index); 

    document.querySelector('.typing-effect').textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // مکث برای خواندن کلمه کامل
    } else {
        setTimeout(type, 100); // سرعت تایپ کردن
    }
}

// برای شروع حتماً باید تابع رو صدا بزنی
type();


function animateCounters() { // اصلاح اسم تابع (animate)
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach((counter) => {
        // اصلاح متد به parseInt
        const target = parseInt(counter.textContent); 
        
        let current = 0;
        const increment = target / 100;

        const timer = setInterval(() => {
            current += increment;
            
            if (current >= target) {
                // نمایش عدد نهایی
                counter.textContent = target + (counter.textContent.includes('+') ? '+' : '');
                clearInterval(timer);
            } else {
                // نمایش عدد در حین شمارش (رند شده)
                counter.textContent = Math.floor(current) + (counter.textContent.includes('+') ? '+' : '');
            }
        }, 20); // سرعت تایمر
    });
}

// یادت نره این تابع رو صدا بزنی تا اجرا بشه:
animateCounters();


// فریم خبر
document
    .querySelector('.newsletter-from')
    .addEventListener('submit', function (e) {
        e.preventDefoult();
        const email = this.querySelector('input[type="email"]').value;

        // نمایش پیام موفقیت
        const orginalHTML = this.innerHTML;
        this.innerHTML = `
                    <div style="text-align: center; padding: 20px; border-radius: 10px; background: rgba(76, 175, 80, 0.1)">
                    <i class="ri-checkbox-circle-line" style="font-size: 3rem; color: #4CAF50;"></i>
                    <h4 style="margin-top: 1rem; color: #fff;">پیام شما ارسال شد!</h4>
                    <p>به زودی با شما تماس خواهیم گرفت.</p>
                    </div>
                    `;
    })