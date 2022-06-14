const qS = (el)=>document.querySelector(el);
const qSa = (el)=>document.querySelectorAll(el);

qS('#new_note').addEventListener('click', newNote)
qS('#color_save #submit').addEventListener('click', create)
qSa('#colors .circle_all').forEach(item => {
    item.addEventListener('click', notecolor)
});
qS('#color_save #update').addEventListener('click', update)

window.addEventListener('load', all)

function notecolor(e) {
    let myDivObj = e.target
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
    if(myDivObjBgColor) {
        qS('#circle').style.backgroundColor = myDivObjBgColor
        qS('#area #area_top').style.backgroundColor = myDivObjBgColor
        qS('#area #area_content').style.backgroundColor = myDivObjBgColor
        qS('#area #area_bottom').style.backgroundColor = myDivObjBgColor
    }
}

function newNote() {
    let areaTopValue = qS('#area #area_top')
    let areaContentValue = qS('#area #area_content')
    let areaBottomValue = qS('#area #area_bottom')
    if(areaTopValue.value || areaContentValue.value || areaBottomValue.value) {
        areaTopValue.value = ''
        areaContentValue.value = ''
        areaBottomValue.value = ''
    }
    areaBottomValue.setAttribute('data-key', '');
}

async function create(e) {
    e.preventDefault()
    let myDivObj = qS('#area #area_top')
    let myDivObjBgColor = window.getComputedStyle(myDivObj).backgroundColor;
    let areaTopValue = qS('#area #area_top')
    let areaContentValue = qS('#area #area_content')
    let areaBottomValue = qS('#area #area_bottom')
   
    if(areaTopValue.value && areaContentValue.value && areaBottomValue.value) {
        const requestInfo = {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                foldername: areaBottomValue.value,
                title: areaTopValue.value,
                text: areaContentValue.value,
                notecolor: myDivObjBgColor
            })
        };
    
        let request = await fetch("http://localhost/note/create", requestInfo)
        await request.json()

        document.location.reload(true);
       
    } else {
        window.alert("Campos não preenchidos!")
    }
};

async function all() {
    let request = await fetch("http://localhost/note/all")
    let json = await request.json()
    if(json) {
        json.note.forEach((item, index) => {
            let folders = qS('nav .folders_copy .foldername').cloneNode(true)
            folders.setAttribute('data-key', item.id);
            folders.querySelector('h1').innerHTML = item.foldername
            folders.querySelector('.content ul li').innerHTML = item.title
            folders.querySelector('.content ul li').style.backgroundColor = item.notecolor
            qS('nav .folders').append(folders)
        });
    }

    qSa('.edit_delete #delete').forEach(item => {
        item.addEventListener('click', remove)
    });

    qSa('.edit_delete #edit').forEach(item => {
        item.addEventListener('click', noteId)
    });

    qSa('.folders .foldername').forEach(item => {
        item.addEventListener('click', hideFolderName)
    })
}

async function remove(e) {
    let keyId = e.target.closest('.foldername').getAttribute('data-key')
    const requestInfo = {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    };

    let request = await fetch(`http://localhost/note/delete/${keyId}`, requestInfo)
    await request.json()
    document.location.reload(true);
}

async function noteId(e) {
    let keyId = e.target.closest('.foldername').getAttribute('data-key')
    let requestThisNote = await fetch(`http://localhost/note/${keyId}`)
    let json = await requestThisNote.json()
    if(json) {
        const infoJson = {
            id: json.note.id,
            foldername: json.note.foldername,
            title: json.note.title,
            text: json.note.text,
            notecolor: json.note.notecolor
        }

        let colorCircle = qS('#circle')
        let areaTopValue = qS('#area #area_top')
        let areaContentValue = qS('#area #area_content') 
        let areaBottomValue = qS('#area #area_bottom')

        areaTopValue.value = infoJson.title
        areaContentValue.value = infoJson.text
        areaBottomValue.value = infoJson.foldername

        colorCircle.style.backgroundColor = infoJson.notecolor
        areaTopValue.style.backgroundColor = infoJson.notecolor
        areaContentValue.style.backgroundColor = infoJson.notecolor
        areaBottomValue.style.backgroundColor = infoJson.notecolor

        areaBottomValue.setAttribute('data-key', infoJson.id);
    }
}

async function update(e) {
    e.preventDefault()

    let myDivObj = qS('#circle')
    let circleBgColor = window.getComputedStyle(myDivObj).backgroundColor;

    let areaTopValue = qS('#area #area_top')
    let areaContentValue = qS('#area #area_content') 
    let areaBottomValue = qS('#area #area_bottom')

    let keyId = areaBottomValue.getAttribute('data-key')
    if(!keyId) {
        window.alert('Campos não preenchidos!')
    } else {
        const requestInfo = {
            method: "PUT",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: new URLSearchParams({
                foldername: areaBottomValue.value,
                title: areaTopValue.value,
                text: areaContentValue.value,
                notecolor: circleBgColor
            })
        };
    
        let requestUpdate = await fetch(`http://localhost/note/edit/${keyId}`, requestInfo)
        await requestUpdate.json()
        document.location.reload(true);
    }
}

function hideFolderName(e) {
    let content = qS('.folders .foldername .content')
    if(e.target) {
        console.log(e.target.parent().find('.content'))
    }




    /*if(e.target.style.display == 'block') {
        e.target.style.opacity = 0
        setTimeout(() => {
            content.style.display = 'none'
        }, 350);
    }else {
        e.target.style.opacity = 0
        e.target.style.display = 'block'
        setTimeout(() => {
            e.target.style.opacity = 1
        }, 200);
    }*/
}