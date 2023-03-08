const add = document.getElementById('elem')
var x0 = document.getElementById("elem")
var w = document.getElementById('win')
var res = document.getElementById('restart')
var rest = document.getElementById('restart_menu')

var i = 1
    var k = 1
        var x = 1
            var O = 1   

 function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

var list = [{elem:'1'},{elem:'2'},{elem:'3'},{elem:'4'},{elem:'5'},{elem:'6'},{elem:'7'},{elem:'8'},{elem:'9' }]

function render (){
    list.forEach(elem => { 
        const NewDiv = document.createElement('div')
        NewDiv.id = 'elem'
        NewDiv.textContent = k
        grid.appendChild(NewDiv)
        return k++
    })
    choice()
}



function choice (){
var a = document.querySelectorAll('#elem')
    a.forEach (x0 =>{       
        x0.addEventListener('click', function() {
            if (i%2!=0&&x0.id=='elem') {
                x0.style.cssText =  `
                font-size: 0px;
                background: url('img/x.png');
                background-size: 85%;
                background-repeat: no-repeat;
                background-position: center;`
                var search = x0.textContent;
                var a = list.findIndex(el => el.elem === search);
                list[a].elem = 'x'
              //      console.log(a)
                x0.id = 'X0'
                checkX()
                return i ++
            }
            if (i%2==0&&x0.id=='elem') {
                x0.style.cssText =  `
                font-size: 0px;
                background: url('img/0.png');
                background-size: 90%;
                background-repeat: no-repeat;
                background-position: center;`
                x0.style.transform = 'rotate('+(getRandomInt(360))+'deg)'
                var search = x0.textContent;
                var a = list.findIndex(el => el.elem === search);
                list[a].elem = '0'
                x0.id = "X0"
                check0()
              //  console.log(x0.style.transform)
               // console.log(a)
                return i++
            }
    })
})
}

function checkX (){
    if (list[0].elem==='x'&&list[1].elem=='x'&&list[2].elem=='x') {
        w.style.cssText = `
        display: block;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[3].elem==='x'&&list[4].elem=='x'&&list[5].elem=='x') {
        w.style.cssText = `
        display: block;
        animation: changeColor 2s ease-in-out 1 forwards;
        top: 240px;`
    }
    if (list[6].elem==='x'&&list[7].elem=='x'&&list[8].elem=='x') {
        w.style.cssText = `
        display: block;
        animation: changeColor 2s ease-in-out 1 forwards;
        top: 408px;`
    }
    if (list[0].elem==='x'&&list[3].elem=='x'&&list[6].elem=='x') {
        w.style.cssText = `
        display: block;
        left: 73px;
        top: 7px;
        height: 481px;
        width: 12px;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[1].elem==='x'&&list[4].elem=='x'&&list[7].elem=='x') {
        w.style.cssText = `
        display: block;
        left: 240px;
        top: 7px;
        height: 481px;
        width: 12px;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[2].elem==='x'&&list[5].elem=='x'&&list[8].elem=='x') {
        w.style.cssText = `
        display: block;
        left: 408px;
        top: 7px;
        height: 481px;
        width: 12px;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[2].elem==='x'&&list[4].elem=='x'&&list[6].elem=='x') {
        w.style.cssText = `
        display: block;
        left: -68px;
        top: 243px;
        height: 12px;
        width: 632px;
        transform: rotate(315deg);
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[0].elem==='x'&&list[4].elem=='x'&&list[8].elem=='x') {
        w.style.cssText = `
        display: block;
        left: -68px;
        top: 243px;
        height: 12px;
        width: 632px;
        transform: rotate(45deg);
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (w.style.display=='block'){
        xsc.textContent = x
        restart_menu.style.display = 'block'
        res_img.style.cssText = `background: url('img/x.png'); background-size: 100%;`
        return x++
    }
}

function check0 (){
    if (list[0].elem==='0'&&list[1].elem=='0'&&list[2].elem=='0') {
        w.style.cssText = `
        display: block;
        animation: changeColor 2s ease-in-out 1 forwards;`


    }
    if (list[3].elem==='0'&&list[4].elem=='0'&&list[5].elem=='0') {
        w.style.cssText = `
        display: block;
        animation: changeColor 2s ease-in-out 1 forwards;
        top: 240px;`
    }
    if (list[6].elem==='0'&&list[7].elem=='0'&&list[8].elem=='0') {
        w.style.cssText = `
        display: block;
        animation: changeColor 2s ease-in-out 1 forwards;
        top: 408px;`
    }
    if (list[0].elem==='0'&&list[3].elem=='0'&&list[6].elem=='0') {
        w.style.cssText = `
        display: block;
        left: 73px;
        top: 7px;
        height: 481px;
        width: 12px;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[2].elem==='0'&&list[5].elem=='0'&&list[8].elem=='0') {
        w.style.cssText = `
        display: block;
        left: 408px;
        top: 7px;
        height: 481px;
        width: 12px;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[1].elem==='0'&&list[4].elem=='0'&&list[7].elem=='0') {
        w.style.cssText = `
        display: block;
        left: 240px;
        top: 7px;
        height: 481px;
        width: 12px;
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[2].elem==='0'&&list[4].elem=='0'&&list[6].elem=='0') {
        w.style.cssText = `
        display: block;
        left: -68px;
        top: 243px;
        height: 12px;
        width: 632px;
        transform: rotate(315deg);
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (list[0].elem==='0'&&list[4].elem=='0'&&list[8].elem=='0') {
        w.style.cssText = `
        display: block;
        left: -68px;
        top: 243px;
        height: 12px;
        width: 632px;
        transform: rotate(45deg);
        animation: changeColor 2s ease-in-out 1 forwards;`
    }
    if (w.style.display=='block'){
        Osc.textContent = O
        restart_menu.style.display = 'block'
        res_img.style.cssText = `background: url('img/0.png'); background-size: 100%;`
        return O++
    }
}
function clear(){
    document.querySelectorAll('#elem').forEach(function(){
        var elem = document.getElementById("elem");
            elem.parentNode.removeChild(elem);
            
    })  
    document.querySelectorAll('#X0').forEach(function(){
        var elem = document.getElementById("X0");
            elem.parentNode.removeChild(elem);
    })
}

function restart (){
    list=[{elem:'1'},{elem:'2'},{elem:'3'},{elem:'4'},{elem:'5'},{elem:'6'},{elem:'7'},{elem:'8'},{elem:'9' }]
    clear ()
    render( )
    choice ()
    w.style.display = 'none'
    restart_menu.style.display = 'none'
}
function re (){
    return k = 1, i = 1
}

render()

res.addEventListener('click',re)
res.addEventListener('click',restart)

rest.addEventListener('click',re)
rest.addEventListener('click',restart)
