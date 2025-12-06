// 导航栏滚动效果
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// 表单验证
const contactForm = document.querySelector('form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address');
            e.preventDefault();
            return false;
        }
        
        const message = document.getElementById('message').value;
        if (message.length < 10) {
            alert('Message should be at least 10 characters');
            e.preventDefault();
            return false;
        }
    });
}
// 1. 滚动时元素渐入动画（当元素进入视图时触发）
const animateOnScroll = () => {
    // 获取所有需要动画的元素
    const elements = document.querySelectorAll('p, .form-group, table');
    
    elements.forEach(element => {
        // 获取元素位置
        const elementPosition = element.getBoundingClientRect().top;
        // 可视区域高度
        const windowHeight = window.innerHeight;
        
        // 当元素进入视图时
        if (elementPosition < windowHeight - 50) {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }
    });
};

// 初始化元素样式（默认隐藏）
document.querySelectorAll('p, .form-group, table').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
});

// 页面加载和滚动时触发动画
window.addEventListener('load', animateOnScroll);
window.addEventListener('scroll', animateOnScroll);

// 2. 项目卡片点击展开/收起动画
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    // 添加点击展开功能
    card.addEventListener('click', () => {
        card.classList.toggle('expanded');
        const content = card.querySelector('p');
        if (card.classList.contains('expanded')) {
            content.style.maxHeight = content.scrollHeight + "px"; // 展开
        } else {
            content.style.maxHeight = "60px"; // 收起
        }
    });
    
    // 初始化项目描述高度（默认收起）
    const content = card.querySelector('p');
    content.style.maxHeight = "60px";
    content.style.overflow = "hidden";
    content.style.transition = "maxHeight 0.5s ease";
});