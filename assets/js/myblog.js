let myblogs = []

let addBlog = (event) => { 
    event.preventDefault()
    const titleBlog = document.getElementById('input-blog-title').value
    let startBlog = document.getElementById("input-start-date").value
    let endBlog = document.getElementById("input-end-date").value
    const descriptionBlog = document.getElementById('desc-blog').value
    let image = document.getElementById("input-blog-image").files[0]

    if (image) {
        image = URL.createObjectURL(image)
    }

    checkedValue = [];
    let technologyBlog = document.getElementsByClassName('blog-checkbox');
    let data = technologyBlog.length
    for (var i = 0; i < data; i++) {
        if (technologyBlog[i].checked == true) {
            checkedValue.push(technologyBlog[i].value)
        }
    }

    let myblog = {
        titleBlog,
        descriptionBlog,
        image,
        checkedValue,
        startBlog,
        endBlog,
    }

    myblogs.push(myblog)
    console.log(myblog)
    rendermyblog()
}

const rendermyblog = () => {

    let containerBlogs = document.getElementById("blog-list-render")

    containerBlogs.innerHTML = ""

    for (let i = 0; i < myblogs.length; i++) {
        containerBlogs.innerHTML += `
        <div class="blog-list-render">
            <div class="blog-img">
                <img src="${myblogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
                <a href="myblog-detail.html" class="title-card-blog">${myblogs[i].titleBlog}</a>
                <p class="distance-card-blog">Duration : ${getDuration(myblogs[i].startBlog, myblogs[i].endBlog)}</p>
                <p class="desc-card-blog">${myblogs[i].descriptionBlog}</p>
                <div class="icon-blog">
                    ${(function icon() {
                    let string = ""
                    for (let j = 0; j < myblogs[i].checkedValue.length; j++) {
                        string += `
                        <div class="item-icon-blog">
                            <i class="${myblogs[i].checkedValue[j]}"></i>
                        </div>
                        `}

                    return string
                    })()}
                </div>
            <div class="blog-project-action">
                <a href="#" class="edit-card-action">edit</a>
                <a href="#" class="delete-card-action">delete</a>
            </div>
        </div>  
        `
    }
}

function getDuration(start, end) {
    let proStart = new Date(start)
    let proEnd = new Date(end)

    let distance = proEnd - proStart


    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' weeks'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' days ago'
            } else {
                let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                if (hoursDistance != 0) {
                    return hoursDistance + ' hours ago'
                } else {
                    let minuteDistance = Math.floor(distance / (60 * 1000))
                    if (minuteDistance != 0) {
                        return minuteDistance + ' minutes ago'
                    } else {
                        let secondDistance = Math.floor(distance / 1000)
                        if (secondDistance != 0)
                        return secondDistance + ' sec'
                    }
                }
            }
        }
    }
}
        