const topSectionTitle = document.querySelector('.headline') 

const topSectionParagraph = document.querySelector('.statement')

const projects = document.querySelectorAll('.fade')

const topSectionOptions = {}
const projectsOptions = {
    rootMargin: '0px 0px -250px 0px'
}

const topSectionObserver = new IntersectionObserver(function(entries, topSectionObserver) {
    entries.forEach(entry => {
        entry.target.classList.add('top_section_loaded')
    })
},topSectionOptions)

const topSectionObserver2 = new IntersectionObserver(function(entries, topSectionObserver2){
    entries.forEach(entry => {
        entry.target.classList.add('top_section_loaded')
    })
},topSectionOptions)

const projectsObserver = new IntersectionObserver(function(entries, projectsObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('fade_in')
            projectsObserver.unobserve(entry.target)
        }
    })
},projectsOptions)



topSectionObserver.observe(topSectionTitle)
topSectionObserver2.observe(topSectionParagraph)
projects.forEach(project => {
    projectsObserver.observe(project)
})