function Projects(title){
    this.id = projectList.length + 1
    this.title = title
}

const projectList = [{id: 'default', title:'Default'}]

function makeProject(project){
    projectList.push(new Projects(project))
}

function showProjects(){
    return projectList
}

function showProject(projectId){
    return projectList.find(project => project.id === projectId)
}