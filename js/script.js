window .onload = function(){
    //图片轮播
    //获取图片和小圆点
	var imgs = document.querySelectorAll(".img");
    var dots = document.querySelector(".dots").querySelectorAll("span");//标签不需要加.

    //遍历所有img图片，给img图片设置data-index属性，用于判断当前图片为哪一张
    for (var i = 0; i < imgs.length; i++){
        imgs[i].setAttribute("data-index",i);
    }

    // 获取当前图片和图片的index
    var currentImg = document.querySelector(".current");
    var currentIndex = currentImg.getAttribute("data-index");

    // 每隔3秒图片自动轮播一次
    var timer = setInterval(changeImage,3000);

    // 图片自动轮播
    function changeImage(){ 
        // 如果currentIndex这个变量是小于最后一个下标的
        if(currentIndex < 4){ //或者 currentIndex < imgs.length-1
            // 隐藏之前的图片
            imgs[currentIndex].classList.remove("current");
            // 不显示之前的小圆点
            dots[currentIndex].classList.remove("square");
            // 显示下一张图片显示
            imgs[++currentIndex].classList.add("current");
            // 显示下一个小圆点
            dots[currentIndex].classList.add("square");
        }else{

            // 隐藏之前的图片
            imgs[currentIndex].classList.remove("current");
            // 不显示之前的小圆点
            dots[currentIndex].classList.remove("square");
            //回到第一张图片
            currentIndex = 0;
            // 显示下一张图片
            imgs[currentIndex].classList.add("current");
            // 显示下一个小圆点
            dots[currentIndex].classList.add("square");
        }
    }

    //遍历小圆点，且绑定事件
    for (var k = 0; k<dots.length; k++){
        //给所有span（小圆点）设置属性
        dots[k].setAttribute("data-index",k);
        dots[k].addEventListener("click",function(){
        // 获取当前点击的小圆点的索引
        var index = this.getAttribute("data-index");
        // 如果当前点击的小圆点的index索引与之前索引所以不一致，则切换图片,否则不做任何操作
        if(index != currentIndex){
            // 将鼠标点击之前显示的图片隐藏，即将之前显示的img上的current类删除
            imgs[currentIndex].classList.remove("current");
            // 将之前高亮的圆点取消高亮显示
            dots[currentIndex].classList.remove("square");
            // 将当前图片显示出来
            imgs[index].classList.add("current");
            // 将当前小圆点高亮显示
            dots[index].classList.add("square");
            // 改变currentIndex的值，让它和谁index相等。
            currentIndex = index;
        }
    })
}

    // tab切换
    // 获取点击的城市列表，及要切换的房源信息
    var aList = document.querySelectorAll(".list_nav");
        aTab = document.querySelectorAll(".productBox");
        // 用来存储上一次高亮显示的元素的索引
        cityIndex = 0;    

    // 遍历所有的城市列表
    for (var a = 0; a<aList.length; a++){
        // 闭包加函数自执行
        (function(a){
            // 给每一个城市列表li绑定事件
            aList[a].onclick = function(){
            	// 上一次高亮显示的城市及内容隐藏
            	aList[cityIndex].classList.remove("current_option");
            	aTab[cityIndex].classList.remove("on");
            	// 改变cityIndex，让它等于刚点击的a
            	cityIndex = a;
            	// 将当前点击的城市及内容高亮显示
            	aList[a].classList.add("current_option");
            	aTab[a].classList.add("on");
            }
        })(a)
    }
}
