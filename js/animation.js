//后去需要加动画的元素对象
var doms = {
    wenhuaBoxs:document.querySelectorAll(".selection-wenhua-container .selection-wenhua-item .selection-wenhua-item-box"),
    jiazhiguan:document.querySelector(".selection-wenhua-about-our"),
    jiazhiguanText:document.querySelector(".selection-wenhua-about-our h2"),
    jiazhiguanBoxs:document.querySelectorAll(".selection-wenhua-about-our .selection-wenhua-about-our-item"),
    jingli:document.querySelector(".selection-jingli-our-box"),
    jingliText:document.querySelector(".selection-jingli-our-box .jingli-left-content"),
    jingliBoxs:document.querySelectorAll(".selection-jingli-our-box .swiper-slide"),
    cy:document.querySelector(".selection-cy-container-box"),
    cybox:document.querySelector(".selection-cy-container .selection-cy-container-box"),
    endTexts:document.querySelectorAll(".animation-end-text")
}

//观察器
const observer1 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        //获取到观察到的Dom元素
        let dom = entry.target
        
        //如果进入视口区域（根据下面的配置）
        // 文化标签
        if (entry.isIntersecting && dom.classList.contains('selection-wenhua-item-box')) {
            dom.classList.add('opacity-animation')
        } else {
            if(dom.classList.contains('opacity-animation')){
                
                dom.classList.remove('opacity-animation');
                dom.style.opacity = "0.1"
            }
        }
    })
},{
     // 配置
     root:null, // 根节点
     rootMargin: '0px', // 根节点的外边距
     threshold: 0.1 // 当元素与根节点（视口）出现时交叉阈值，也就是元素多少显示在视口时触发，这里是显示出10%时触发
})

//观察器
const observer2 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        //价值观标签
        if (entry.isIntersecting) {
            doms.jiazhiguanText.classList.add('donw-to-up-animation0')
            for(let i = 0;i<doms.jiazhiguanBoxs.length;i++){
                doms.jiazhiguanBoxs[i].classList.add( `donw-to-up-animation${i}`)
            }
            
        } else {
            if(doms.jiazhiguanText.classList.contains('donw-to-up-animation0')){
                doms.jiazhiguanText.classList.remove('donw-to-up-animation0');
                doms.jiazhiguanText.style.transform = "translateY(90px)";
                doms.jiazhiguanText.style.opacity = "0.1";
            }
            for(let i = 0;i<doms.jiazhiguanBoxs.length;i++){
                if(doms.jiazhiguanBoxs[i].classList.contains(`donw-to-up-animation${i}`)){
                    doms.jiazhiguanBoxs[i].classList.remove(`donw-to-up-animation${i}`);
                    doms.jiazhiguanBoxs[i].style.marginLeft = "translateY(90px)";
                    doms.jiazhiguanBoxs[i].style.opacity = "0.1";
                }
            }
        }
        
    })
},{
     // 配置
     root:null, // 根节点
     rootMargin: '0px', // 根节点的外边距
     threshold: 0.1 // 当元素与根节点（视口）出现时交叉阈值，也就是元素多少显示在视口时触发，这里是显示出10%时触发
})

//观察器
const observer3 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        //经历标签
        if (entry.isIntersecting) {
            doms.jingliText.classList.add('right-to-left-animation')
            for(let i = 0;i<doms.jingliBoxs.length;i++){
                doms.jingliBoxs[i].classList.add( `right-to-left-animation${i}`)
            }
            
        } else {
            if(doms.jingliText.classList.contains('right-to-left-animation')){
                doms.jingliText.classList.remove('right-to-left-animation');
                doms.jingliText.style.transform = "translateX(50)";
                doms.jingliText.style.opacity = "0.1";
            }
            for(let i = 0;i<doms.jingliBoxs.length;i++){
                if(doms.jingliBoxs[i].classList.contains(`right-to-left-animation${i}`)){
                    doms.jingliBoxs[i].classList.remove(`right-to-left-animation${i}`);
                    doms.jingliBoxs[i].style.marginLeft = "50px";
                    doms.jingliBoxs[i].style.opacity = "0.1";
                }
            }
        }
        
    })
},{
     // 配置
     root:null, // 根节点
     rootMargin: '0px', // 根节点的外边距
     threshold: 0.1 // 当元素与根节点（视口）出现时交叉阈值，也就是元素多少显示在视口时触发，这里是显示出10%时触发
})

//观察器
const observer4 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        //经历标签
        if (entry.isIntersecting) {
            doms.cybox.classList.add('donw-to-up-animation')
            
            
        } else {
            if(doms.cybox.classList.contains('donw-to-up-animation')){
                doms.cybox.classList.remove('donw-to-up-animation');
                doms.cybox.style.transform = "translateY(90px)";
                doms.cybox.style.opacity = "0.1";
            }
        }
        
    })
},{
     // 配置
     root:null, // 根节点
     rootMargin: '0px', // 根节点的外边距
     threshold: 0.3 // 当元素与根节点（视口）出现时交叉阈值，也就是元素多少显示在视口时触发，这里是显示出10%时触发
})

//观察器
const observer5 = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        //经历标签
        if (entry.isIntersecting) {
            entry.target.classList.add('donw-to-up-animation')
            
            
        } else {
            if(entry.target.classList.contains('donw-to-up-animation')){
                entry.target.classList.remove('donw-to-up-animation');
                entry.target.style.transform = "translateY(90px)";
                entry.target.style.opacity = "0.1";
            }
        }
        
    })
},{
     // 配置
     root:null, // 根节点
     rootMargin: '0px', // 根节点的外边距
     threshold: 0.9 // 当元素与根节点（视口）出现时交叉阈值，也就是元素多少显示在视口时触发，这里是显示出10%时触发
})
//观察注册
doms.wenhuaBoxs.forEach(wenhuaBox=>{
    observer1.observe(wenhuaBox)
})
observer2.observe(doms.jiazhiguan)
observer3.observe(doms.jingli)
observer4.observe(doms.cy)
doms.endTexts.forEach(endText=>{
    observer5.observe(endText)
})
